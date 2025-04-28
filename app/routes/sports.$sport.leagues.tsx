import SportLeagueItem from '~/components/sport-league-item'
import type { Route } from './+types/sports.$sport.leagues'
import type { SportTypes } from '~/types/sport-type'
import useSportLeagues from '~/hooks/api/use-sport-leagues'
import Loading from '~/components/loading'
import RouteContentContainer from '~/components/route-content-container'

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Leagues | ${params.sport}` },
    { name: 'description', content: `All leagues for ${params.sport}` },
  ]
}

export default function SportLeagues({ params }: Route.ComponentProps) {
  const { isPending, error, data } = useSportLeagues({
    sport: params.sport as SportTypes,
  })
  if (error) {
    return (
      <RouteContentContainer>
        Error while attempting to fetch league: {error.message}
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
      {data?.leagues
        ?.filter(
          league =>
            league.displayName !== null &&
            league.displayName !== '' &&
            league.leagueType !== 'None',
        )
        .map(league => (
          <SportLeagueItem
            key={league.id}
            sportLeague={league}
            sport={params.sport as SportTypes}
          />
        ))}
    </RouteContentContainer>
  )
}
