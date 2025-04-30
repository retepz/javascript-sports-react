import Loading from '~/components/loading'
import type { LeagueTypes } from '~/types/league-types'
import RouteContentContainer from '~/components/route-content-container'
import useLeagueWeekEvents from '~/hooks/api/use-league-week-events'
import type { Route } from './+types/leagueWeekEvents'
import { LeagueWeekEventItem } from '~/components/league-week-event-item'

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `League Week Events | ${params.league}` },
    {
      name: 'description',
      content: `Current Events for League ${params.league}`,
    },
  ]
}

export default function LeagueWeekEvents({ params }: Route.ComponentProps) {
  const { isPending, error, data } = useLeagueWeekEvents({
    league: params.league as LeagueTypes,
  })
  if (error) {
    return (
      <RouteContentContainer>
        Error while attempting to fetch week: {error.message}
      </RouteContentContainer>
    )
  }

  if (isPending) {
    return (
      <RouteContentContainer>
        <Loading />
      </RouteContentContainer>
    )
  }

  return (
    <RouteContentContainer>
      <div style={{ fontSize: '2rem' }}>{params.league}</div>
      {data === null ? (
        <div>No games this week/Off season</div>
      ) : (
        data?.map(event => <LeagueWeekEventItem event={event} key={event.id} />)
      )}
    </RouteContentContainer>
  )
}
