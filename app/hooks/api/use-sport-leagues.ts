import { useQuery, type QueryFunction } from '@tanstack/react-query'
import type { SportLeague } from '~/types/sport-league'
import type { SportTypes } from '~/types/sport-type'

type SportLeaguesResponse = {
  leagues: SportLeague[]
}
export const loadSportLeagues: QueryFunction<
  SportLeaguesResponse,
  readonly unknown[],
  never
> = async ({ queryKey }) => {
  const [, sport] = queryKey
  const response = await fetch(
    `http://localhost:5094/api/sport/${sport}/leagues`,
  )
  return await response.json()
}

export default function useSportLeagues({ sport }: { sport: SportTypes }) {
  const { isPending, error, data } = useQuery<SportLeaguesResponse>({
    queryKey: ['sports', sport, 'leagues'],
    queryFn: loadSportLeagues,
  })

  return { isPending, error, data }
}
