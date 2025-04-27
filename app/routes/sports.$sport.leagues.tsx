import SportLeagueItem from '~/components/sport-league-item'
import type { Route } from './+types/sports.$sport.leagues'
import type { SportTypes } from '~/types/sport-type'
import useSportLeagues from '~/hooks/api/use-sport-leagues'

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
    return <div>Error while attempting to fetch league: {error.message}</div>
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  return (
    <div
      style={{
        display: 'grid',
        rowGap: '1.5rem',
        margin: '1rem',
      }}
    >
      {data?.leagues
        ?.filter(
          league => league.displayName !== null && league.displayName !== '',
        )
        .map(league => (
          <SportLeagueItem key={league.id} sportLeague={league} />
        ))}
    </div>
  )
}
