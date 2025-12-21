const fullBuildSha = import.meta.env.VITE_BUILD_SHA
const buildTime = import.meta.env.VITE_BUILD_TIME

const displayBuildSha = fullBuildSha && fullBuildSha.length > 0 ? fullBuildSha.slice(0, 7) : 'dev'

export default function BuildInfo() {
  return (
    <div className="text-[11px] text-muted-foreground text-right">
      <span className="font-mono">build: {displayBuildSha}</span>
      {buildTime ? (
        <span className="ml-2 text-muted-foreground/80" title={buildTime}>
          ({buildTime})
        </span>
      ) : null}
    </div>
  )
}
