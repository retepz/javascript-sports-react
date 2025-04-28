import Loading from '~/components/loading'
import useLeagueWeek from '~/hooks/api/use-league-week'
import type { LeagueTypes } from '~/types/league-types'
import RouteContentContainer from '~/components/route-content-container'
import type { Route } from './+types/leagues.$league.week'

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `League Week | ${params.league}` },
    {
      name: 'description',
      content: `Current Week for League ${params.league}`,
    },
  ]
}

export default function LeagueWeek({ params }: Route.ComponentProps) {
  const { isPending, error, data } = useLeagueWeek({
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

  if (data === null) {
    return (
      <RouteContentContainer>
        <div>{params.league}</div>
        No games this week/Off season
      </RouteContentContainer>
    )
  }

  return (
    <RouteContentContainer>
      <div>{params.league}</div>
      <div>{data?.displayName}</div>
      <div>{data?.startDate}</div>
      <div>{data?.endDate}</div>
    </RouteContentContainer>
  )
}
