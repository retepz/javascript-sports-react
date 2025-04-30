import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),
  route('/sports/:sport/leagues', 'routes/sportLeagues.tsx'),
  route('/leagues/:league/week/events', 'routes/leagueWeekEvents.tsx'),
  route('/leagues/:league/week', 'routes/leagueWeek.tsx'),
] satisfies RouteConfig
