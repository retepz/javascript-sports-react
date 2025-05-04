import './event-item-teams-container.css'

type EventItemTeamContainer = {
  children: React.ReactNode
}

export function EventItemTeamsContainer({ children }: EventItemTeamContainer) {
  return <div className='event-item-teams-container'>{children}</div>
}
