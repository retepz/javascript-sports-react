import type { SportCompetitor } from './sport-competitor'

export type SportLeagueEvent = {
  id: string
  firstTeam: SportCompetitor
  secondTeam: SportCompetitor
  gameTime: string
  quarterDisplay: string
  gameTimeDisplay: string
  isFinished: string
  isInFuture: string
  isLive: string
  broadcastStations: string[]
}
