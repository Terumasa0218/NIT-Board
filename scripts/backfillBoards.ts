import process from 'node:process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { DEFAULT_UNIVERSITY_ID } from '../src/constants/university.ts'

type CliOptions = {
  dryRun: boolean
  apply: boolean
  sampleSize: number
}

type PatternKey = 'missingDepartmentOnly' | 'missingYearOnly' | 'missingBoth'

const BOARDS_COLLECTION = 'boards'
const DEFAULT_SAMPLE_SIZE = 20

function parseArgs(args: string[]): CliOptions {
  const apply = args.includes('--apply')
  const dryRun = args.includes('--dry-run') || !apply
  const sampleSizeArg = args.find((arg) => arg.startsWith('--sample-size='))

  const sampleSize = sampleSizeArg ? Number(sampleSizeArg.split('=')[1]) : DEFAULT_SAMPLE_SIZE

  if (Number.isNaN(sampleSize) || sampleSize <= 0) {
    throw new Error('`--sample-size` must be a positive number. Example: --sample-size=20')
  }

  if (apply && args.includes('--dry-run')) {
    throw new Error('Use either `--dry-run` or `--apply`, not both.')
  }

  return { dryRun, apply, sampleSize }
}

function getCredentialFromEnv(): string {
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  const serviceAccountJson = process.env.SERVICE_ACCOUNT_JSON

  if (serviceAccountJson?.trim()) {
    return serviceAccountJson
  }

  if (credentialsPath?.trim()) {
    const path = resolve(credentialsPath)
    return readFileSync(path, 'utf8')
  }

  throw new Error(
    'Missing credentials. Set either GOOGLE_APPLICATION_CREDENTIALS (file path) or SERVICE_ACCOUNT_JSON (raw JSON string).',
  )
}

async function initFirebaseAdmin() {
  const projectId = process.env.FIREBASE_PROJECT_ID

  if (!projectId?.trim()) {
    throw new Error('FIREBASE_PROJECT_ID is required.')
  }

  let appModule: typeof import('firebase-admin/app')
  let firestoreModule: typeof import('firebase-admin/firestore')

  try {
    appModule = await import('firebase-admin/app')
    firestoreModule = await import('firebase-admin/firestore')
  } catch {
    throw new Error('firebase-admin is required. Install dependencies before running this script (`npm install`).')
  }

  if (!appModule.getApps().length) {
    const credentialJson = getCredentialFromEnv()
    const parsed = JSON.parse(credentialJson) as {
      project_id: string
      client_email: string
      private_key: string
    }

    appModule.initializeApp({
      credential: appModule.cert({
        projectId: parsed.project_id,
        clientEmail: parsed.client_email,
        privateKey: parsed.private_key,
      }),
      projectId,
    })
  }

  return firestoreModule.getFirestore()
}

function isMissing(value: unknown): boolean {
  return value === undefined || value === null || value === ''
}

async function main() {
  const options = parseArgs(process.argv.slice(2))

  const yearDefault = process.env.YEAR_DEFAULT
  const departmentDefault = process.env.DEPARTMENT_DEFAULT

  if (options.apply) {
    if (!yearDefault || Number.isNaN(Number(yearDefault))) {
      throw new Error('When using --apply, YEAR_DEFAULT (number) is required.')
    }

    if (!departmentDefault?.trim()) {
      throw new Error('When using --apply, DEPARTMENT_DEFAULT is required.')
    }
  }

  const db = await initFirebaseAdmin()

  console.log(`Mode: ${options.apply ? 'apply' : 'dry-run'}`)
  console.log(`Collection: ${BOARDS_COLLECTION}`)
  console.log(`DEFAULT_UNIVERSITY_ID: ${DEFAULT_UNIVERSITY_ID}`)

  const snap = await db.collection(BOARDS_COLLECTION).get()

  const counters: Record<PatternKey, number> = {
    missingDepartmentOnly: 0,
    missingYearOnly: 0,
    missingBoth: 0,
  }

  const targets = snap.docs.filter((doc) => {
    const data = doc.data()
    const missingDepartment = isMissing(data.departmentId)
    const missingYear = isMissing(data.year)

    if (missingDepartment && missingYear) {
      counters.missingBoth += 1
      return true
    }

    if (missingDepartment) {
      counters.missingDepartmentOnly += 1
      return true
    }

    if (missingYear) {
      counters.missingYearOnly += 1
      return true
    }

    return false
  })

  console.log('--- Backfill Summary ---')
  console.log(`Total boards scanned: ${snap.size}`)
  console.log(`Total backfill targets: ${targets.length}`)
  console.log(`missing departmentId only: ${counters.missingDepartmentOnly}`)
  console.log(`missing year only: ${counters.missingYearOnly}`)
  console.log(`missing both: ${counters.missingBoth}`)

  const sample = targets.slice(0, options.sampleSize)

  console.log(`--- Sample (first ${sample.length}) ---`)
  for (const doc of sample) {
    const data = doc.data()
    console.log(
      JSON.stringify(
        {
          docId: doc.id,
          topicId: data.topicId ?? null,
          universityId: data.universityId ?? DEFAULT_UNIVERSITY_ID,
          departmentId: data.departmentId ?? null,
          year: data.year ?? null,
          title: data.title ?? null,
        },
        null,
        2,
      ),
    )
  }

  if (options.dryRun) {
    console.log('Dry-run complete. No documents were written.')
    return
  }

  const failures: Array<{ docId: string; error: string }> = []
  let updatedCount = 0

  for (const doc of targets) {
    const data = doc.data()

    const patch: Record<string, unknown> = {}

    if (isMissing(data.departmentId)) {
      patch.departmentId = departmentDefault
    }

    if (isMissing(data.year)) {
      patch.year = Number(yearDefault)
    }

    if (Object.keys(patch).length === 0) {
      continue
    }

    try {
      await doc.ref.set(patch, { merge: true })
      updatedCount += 1
    } catch (error) {
      failures.push({
        docId: doc.id,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  console.log('--- Apply Result ---')
  console.log(`Documents updated: ${updatedCount}`)
  console.log(`Failures: ${failures.length}`)

  if (failures.length > 0) {
    console.log('Failure details:')
    failures.forEach((failure) => {
      console.log(`- ${failure.docId}: ${failure.error}`)
    })
    process.exitCode = 1
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error)
  console.error(`[backfill:boards] ${message}`)
  process.exitCode = 1
})
