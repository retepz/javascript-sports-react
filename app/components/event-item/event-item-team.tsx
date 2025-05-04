import type { SportCompetitor } from '~/types/sport-competitor'
import './event-item-team.css'

type EventItemTeamProps = {
  isFirst: boolean
  team: SportCompetitor
}

export function EventItemTeam({ isFirst, team }: EventItemTeamProps) {
  const containerClass = isFirst
    ? 'event-item-team-container-first'
    : 'event-item-team-container-second'
  const teamInfoClass = isFirst
    ? 'event-item-team-info-first'
    : 'event-item-team-info-second'
  const homeAwayClass = isFirst
    ? 'event-item-team-home-away-first'
    : 'event-item-team-home-away-second'

  return (
    <div
      className={`event-item-team-container ${containerClass}`}
      style={{
        backgroundColor: `#${team.color}`,
      }}
    >
      <img src={team.logo} alt={team.name} />
      <div className={`event-item-team-info ${teamInfoClass}`}>
        <div style={{ fontSize: '.8rem' }}>{team.record}</div>
        <div style={{ fontSize: '1rem' }}>{team.location}</div>
        <div style={{ fontSize: '1rem' }}>{team.name}</div>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
          {team.score}
        </div>
      </div>

      <div className={homeAwayClass}>{team.isHome ? 'Home' : 'Away'}</div>
    </div>
  )
}
