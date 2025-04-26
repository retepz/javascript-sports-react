import { useQuery } from '@tanstack/react-query'
import type { Route } from './+types/sport-leagues'
import type { SportLeague } from '~/types/sport-league'
import SportLeagueItem from '~/components/sport-league-item'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Sport Leagues' },
    { name: 'description', content: 'Sport Leagues' },
  ]
}

type SportLeaguesResponse = {
  leagues: SportLeague[]
}
type SportLeaguesProps = { sport: SportTypes }

export default function SportLeagues({
  sport = 'basketball',
}: SportLeaguesProps) {
  const { isPending, error, data } = useQuery<SportLeaguesResponse>({
    queryKey: [`sportLeagues-${sport}`],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5094/api/sport/${sport}/leagues`,
      )
      return await response.json()
    },
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
        gridTemplateColumns: 'auto 1fr',
        columnGap: '.5rem',
        rowGap: '.5rem',
      }}
    >
      {data?.leagues?.map(league => (
        <SportLeagueItem key={league.id} sportLeague={league} />
      ))}
    </div>
  )
}
