import type { SportLeagueEvent } from '~/types/sport-league-event'
import { LeagueWeekEventItemHeader } from './league-week-event-item-header'
import { EventItemTeamsContainer } from '../event-item/event-item-teams-container'
import { EventItemTeam } from '../event-item/event-item-team'

type LeagueWeekEventItemProps = {
  event: SportLeagueEvent
}

export function LeagueWeekEventItem({ event }: LeagueWeekEventItemProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        rowGap: '.5rem',
        columnGap: '1rem',
      }}
      key={event.id}
    >
      <LeagueWeekEventItemHeader event={event} />
      <EventItemTeamsContainer>
        <EventItemTeam isFirst={true} team={event.firstTeam} />
        <EventItemTeam isFirst={false} team={event.secondTeam} />
      </EventItemTeamsContainer>
    </div>
  )
}
