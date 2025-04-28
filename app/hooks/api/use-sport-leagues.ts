import { useQuery, type QueryFunction } from '@tanstack/react-query'
import environment from '~/environment'
import type { SportLeague } from '~/types/sport-league'
import type { SportTypes } from '~/types/sport-type'

type SportLeaguesResponse = {
  leagues: SportLeague[]
}

const loadSportLeagues: QueryFunction<
  SportLeaguesResponse,
  readonly unknown[],
  never
> = async ({ queryKey }) => {
  const [, sport] = queryKey
  const response = await fetch(`${environment.api}/api/sports/${sport}/leagues`)
  return await response.json()
}

export default function useSportLeagues({ sport }: { sport: SportTypes }) {
  const { isPending, error, data } = useQuery<SportLeaguesResponse>({
    queryKey: ['sports', sport, 'leagues'],
    queryFn: loadSportLeagues,
  })

  return { isPending, error, data }
}
