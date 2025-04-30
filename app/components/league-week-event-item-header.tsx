import type { SportLeagueEvent } from '~/types/sport-league-event'

type LeagueWeekEventItemHeaderProps = {
  event: SportLeagueEvent
}
export function LeagueWeekEventItemHeader({
  event,
}: LeagueWeekEventItemHeaderProps) {
  return (
    <div
      style={{
        gridRow: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      <div style={{ justifySelf: 'start' }}>{event.gameTime}</div>
      <div style={{ justifySelf: 'center' }}>{event.gameTimeDisplay}</div>
      <div
        style={{
          textAlign: 'end',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {event.broadcastStations.join(', ')}
      </div>
    </div>
  )
}
