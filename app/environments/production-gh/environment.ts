import type { Environment } from '~/types/environment'
import productionEnvironment from '~/environments/production/environment'

const environment: Environment = {
  ...productionEnvironment,
  name: 'production-gh',
  useHashRouter: true,
}

export default environment
