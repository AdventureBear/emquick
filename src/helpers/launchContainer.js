const execa = require('execa')
const findParentDir = require('find-parent-dir')
const log = require('./logger')('launchContainer')

const dockerFile = findParentDir.sync(__dirname, 'docker-compose.yml')

const containersRunning = async () => {
  let database
  let databaseClient
  try {
    database = await execa('docker', [
      'inspect',
      '-f',
      '{{.State.Running}}',
      process.env.CONTAINER_NAME,
    ])

    databaseClient = await execa('docker', [
      'inspect',
      '-f',
      '{{.State.Running}}',
      `${process.env.CONTAINER_NAME}-client`,
    ])

    log.info('found active docker containers')
  } catch (e) {
    log.warn('found at least one container not running. will restart ALL services')
    // swallow the error if docker container doesn't exist
    return false
  }

  if (database && databaseClient) return true
  return false
}

const launchContainer = async () => {
  // check if mongo db is already running to not reload service
  if (await containersRunning()) return

  log.info('launching docker containers')
  try {
    await execa('docker-compose', ['up', '-d'], { cwd: dockerFile })
  } catch (err) {
    log.error('database docker container could not be started: ', { err })
  }
  log.info('database docker container has started. Waiting 1.5 secs for conn to stabilize...')
}

exports.launchContainer = launchContainer
