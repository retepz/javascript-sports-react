import { type QueryFunction } from '@tanstack/react-query'
import environment from '~/environment'
import type { LeagueTypes } from '~/types/league-types'
import type { LeagueWeek } from '~/types/league-week'
import useQueryDelayed from '../use-query-delayed'

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
  if (response.status === 500) {
    const errorResponse = await response.text()
    return Promise.reject(new Error(errorResponse))
  }
  return await response.json()
}

export default function useLeagueWeek({ league }: { league: LeagueTypes }) {
  const { isPending, error, data } = useQueryDelayed<LeagueWeek>({
    queryKey: ['league', league, 'currentweek'],
    queryFn: loadLeagueWeek,
  })

  return { isPending, error, data }
}
