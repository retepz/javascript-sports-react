import type { Config } from '@react-router/dev/config'

import environment from 'app/environment'
import { allLeagueTypes } from 'app/types/league-types'
import { allSportTypes } from 'app/types/sport-type'

const base: Config = {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
}

const genConfig = () => {
  if (environment.preRenderRoutes) {
    return {
      ...base,
      async prerender() {
        return [
          '/',
          ...allSportTypes.map(st => `/sports/${st}/leagues`),
          ...allLeagueTypes.map(lt => `/leagues/${lt}/week/events`),
          ...allLeagueTypes.map(lt => `/leagues/${lt}/week`),
        ]
      },
    }
  }
  return base
}

export default {
  ...genConfig(),
} satisfies Config
