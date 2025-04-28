import { useQuery, type QueryFunction } from '@tanstack/react-query'
import environment from '~/environment'
import type { LeagueTypes } from '~/types/league-types'
import type { LeagueWeek } from '~/types/league-week'

const loadLeagueWeek: QueryFunction<
  LeagueWeek,
  readonly unknown[],
  never
> = async ({ queryKey }) => {
  const [, league] = queryKey
  const response = await fetch(
    `${environment.api}/api/leagues/${league}/season/currentweek`,
  )
  if (response.status === 404) {
    return null
  }
  return await response.json()
}

export default function useLeagueWeek({ league }: { league: LeagueTypes }) {
  const { isPending, error, data } = useQuery<LeagueWeek>({
    queryKey: ['league', league, 'currentweek'],
    queryFn: loadLeagueWeek,
  })

  return { isPending, error, data }
}
