import { type QueryFunction } from '@tanstack/react-query'
import environment from '~/environment'
import type { LeagueTypes } from '~/types/league-types'
import type { SportLeagueEvent } from '~/types/sport-league-event'
import useQueryDelayed from '../use-query-delayed'

type Response = SportLeagueEvent[]

const loadLeagueWeekEvents: QueryFunction<
  Response,
  readonly unknown[],
  never
> = async ({ queryKey }) => {
  const [, league] = queryKey
  const response = await fetch(
    `${environment.api}/api/leagues/${league}/season/currentweek/events`,
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

export default function useLeagueWeekEvents({
  league,
}: {
  league: LeagueTypes
}) {
  const { isPending, error, data } = useQueryDelayed<Response>({
    queryKey: ['league', league, 'currentweek', 'events'],
    queryFn: loadLeagueWeekEvents,
  })

  return { isPending, error, data }
}
