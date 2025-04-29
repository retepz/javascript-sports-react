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

  return (
    <RouteContentContainer>
      <div style={{ fontSize: '2rem' }}>{params.league}</div>
      {data === null ? (
        <div>No games this week/Off season</div>
      ) : (
        <>
          <div>{data?.displayName}</div>
          <div>{data?.startDate}</div>
          <div>{data?.endDate}</div>
        </>
      )}
    </RouteContentContainer>
  )
}
