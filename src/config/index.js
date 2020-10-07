import baseConfig from './config.base'
import prodConfig from './config.prod'
import testConfig from './config.test'
import devConfig from './config.dev'

let envConfig = ''
switch (process.env.NODE_ENV) {
  case 'production':
    envConfig = prodConfig
    break
  case 'test':
    envConfig = testConfig
    break
  default:
    envConfig = devConfig
    break
}

export default { ...baseConfig, ...envConfig }
