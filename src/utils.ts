import signale from 'signale'
import { CONFIG_PATH } from './constants'
import { ScpDeployOption } from './types'

export const logger = signale.scope('scp-deploy')

export const getConfig = (namespace: string): ScpDeployOption => {
  const defaultConfig = {
    port: 22,
    buildCmd: 'npm run build',
    buildDir: 'dist',
    username: 'root',
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const configs = require(CONFIG_PATH) as ScpDeployOption[]
  if (Array.isArray(configs) === false) {
    logger.fatal(`config file is not array, path: ${CONFIG_PATH}`)
  }
  const config = configs.find((item) => item.namespace === namespace)
  if (!config) {
    logger.fatal(`config not found, namespace: ${namespace}`)
  }
  return Object.assign(defaultConfig, config)
}
