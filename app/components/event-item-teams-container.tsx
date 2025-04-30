type EventItemTeamContainer = {
  children: React.ReactNode
}
export function EventItemTeamsContainer({ children }: EventItemTeamContainer) {
  return (
    <div
      style={{
        gridRow: 2,
        columnGap: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      {children}
    </div>
  )
}
