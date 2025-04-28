import type { LeagueTypes } from './league-types'

export type SportLeague = {
  id: string
  leagueType: LeagueTypes
  shortName: null | string
  displayName: string
  name: string
  abbreviation: string
  logos: string[]
}
