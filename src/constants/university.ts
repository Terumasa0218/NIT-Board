export const DEFAULT_UNIVERSITY_ID = 'nit'

export const ALLOWED_EMAIL_DOMAINS = [
  'ict.nitech.ac.jp',
  'stn.nitech.ac.jp',
  'nitech.ac.jp',
]

export const isAllowedEmail = (email: string): boolean => {
  return ALLOWED_EMAIL_DOMAINS.some((domain) => email.endsWith(`@${domain}`))
}
