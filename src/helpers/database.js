/* eslint-disable camelcase */
const { launchContainer } = require('./launchContainer')
const findParentDir = require('find-parent-dir')
const execa = require('execa')
const waitFor = require('wait-on')
const mongoose = require('mongoose')
const seed = require('./seed')
const loadModels = require('./loadModels')

const log = require('./logger')('database')

/**
 * BOILERPLATE START
 * Configuration
 */

const startupOpts = {
  // verify containers are reachable by checking nosqlclient http response
  resources: ['http://localhost:2000/healthcheck'],
  delay: 10, // initial delay in ms, default 0
  timeout: 5000, // timeout in ms, default Infinity
  window: 1500, // wait 1.5 secs for container to stabilize
  verbose: false, // enable for debugging
  log: false, // outputs to stdout, remaining resources waited on and when complete or errored
}

const shutdownOpts = {
  ...startupOpts,
  reverse: true,
}

/**
 * Start a mongodb docker container and connect to it
 */

// const db_url = process.env.MONGO_URI
const db_url = process.env.DB_URL
const dockerFile = findParentDir.sync(__dirname, 'docker-compose.yml')

/**
 * connect to mongodb instance when container is ready. Uses
 * an arrowed curried function so we can pass in the model to seed
 * https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe
 */
const establishConnection = async (err) => {
  if (err) return err

  try {
    await mongoose.connect(db_url)
    await loadModels()
    log.info('successfully connected to database and loaded models')

    /**
     * if we need to seed, split the string into individal vars
     * and seed each model in the forEach callback
     */
    if (process.env.SEED) process.env.SEED.split(/,?\s+/g).forEach(seed)
  } catch (e) {
    log.error('could not connect to mongodb: ', { errorMessage: e.message })
  }

  return log.info(`successfully connected to db at: ${db_url}`)
}

const initializeDB = async () => {
  await launchContainer()
  await waitFor(startupOpts, establishConnection)
}

const teardownDB = async () => {
  await execa('docker-compose', ['down'], { cwd: dockerFile })
  await waitFor(shutdownOpts, (err) => {
    if (err) {
      log.error('database docker container could not be stopped: ', { err })
    }
  })
  log.info('database container has been stopped.')
}

module.exports = {
  initializeDB,
  teardownDB,
}
