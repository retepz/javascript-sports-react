export type Environment = {
  api:
    | 'http://localhost:5094'
    | 'https://dotnetsports-b6h2hbecefepdyde.canadacentral-01.azurewebsites.net/'
  name: 'production' | 'develop' | 'production-gh'
  preRenderRoutes: boolean
}
