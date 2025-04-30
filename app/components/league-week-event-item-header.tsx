import { useMemo } from 'react'
import type { SportLeagueEvent } from '~/types/sport-league-event'

type LeagueWeekEventItemHeaderProps = {
  event: SportLeagueEvent
}

export function LeagueWeekEventItemHeader({
  event,
}: LeagueWeekEventItemHeaderProps) {
  const gameTimeAsDate = useMemo(
    () => new Date(event.gameTime),
    [event.gameTime],
  )
  const leftHeaderValue = useMemo(() => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
    return event.isLive
      ? event.statusType
      : new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(gameTimeAsDate)
  }, [event.isLive, event.statusType, gameTimeAsDate])

  const centerHeaderValue = useMemo(() => {
    return event.isInFuture
      ? new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(gameTimeAsDate)
      : event.isLive
        ? event.downDistance
        : 'Final'
  }, [gameTimeAsDate, event.isLive, event.downDistance])

  const rightHeaderValue = useMemo(() => {
    return event.broadcastStations.join(', ')
  }, [event.broadcastStations])

  return (
    <div
      style={{
        gridRow: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: '1rem',
        borderRadius: '.5rem',
        backgroundColor: '#1F2122',
      }}
    >
      <div style={{ justifySelf: 'start' }}>{leftHeaderValue}</div>
      <div style={{ justifySelf: 'center' }}>{centerHeaderValue}</div>
      <div
        style={{
          textAlign: 'end',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {rightHeaderValue}
      </div>
    </div>
  )
}
