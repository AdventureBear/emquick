/**
 * Created by suzanne on 5/21/18.
 */
// set environment variables first
require('dotenv').config()

const bodyParser = require('body-parser')
// const passport = require('passport')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const { initializeDB, teardownDB } = require('./src/helpers/database')
const gracefulExit = require('express-graceful-exit')
const errorHandlers = require('./src/helpers/errorHandlers')
const log = require('./src/helpers/logger')('server')
// Routes
const resourceRoutes = require('./routes/resources')

log.info(
  'configuring server with environment:',
  process.env.NODE_ENV.toUpperCase(),
)

/**
 * Configuration variables
 */
const isDev = process.env.NODE_ENV === 'development'
const staticFilesProd = path.resolve(__dirname, 'build')
const staticFilesDev = 'public'
const staticFiles = isDev ? staticFilesDev : staticFilesProd
const port = process.env.BACKEND_PORT || 8080

// list of middleware and routes in order of preference
const middleware = [
  morgan('dev'),
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  // Priority serve any static files.
  express.static(staticFiles),
  // set resources routes
  ['/api/resources/', resourceRoutes],
]

// placeholder variable for a function to run cleanup tasks on server exit.
let cleanUp

/**
 * BOILERPLATE START
 */

// launch mongo docker instance
if (isDev) {
  log.info('initializing database')
  initializeDB()
}

// START SERVER
const app = express()
if (app) log.info('server started')
/**
 * ensure gracefulExit is always first in the chain of middlewares,
 * and express errorHandlers are last during develoopment
 */
const mdlWare = [gracefulExit.middleware(app), ...middleware, ...errorHandlers]

// install each express middleware
mdlWare.forEach((mw) => {
  if (!Array.isArray(mw)) {
    log.info('installing express middleware: ', mw)
    return app.use(mw)
  }

  log.info(`installing express middleware: ${mw}`)
  return app.use(mw[0], mw[1])
})

// default all routes to the index.html
app.get('/*', (req, res) => {
  log.info('Index page sent')
  res.sendFile('index.html', (err) => {
    if (err) res.status(500).send(err)
  })
})

// return server to pass into graceful exit
const server = app.listen(port, () => {
  log.info(`EMQuick server started on port ${port}...`)
})

// Set up event handlers for any kill signal
const killSignals = ['SIGINT', 'SIGTERM']
const fails = 0

const shutDownServices = async () => {
  if (isDev) {
    try {
      await teardownDB()
    } catch (e) {
      // retry if docker fails to tear down
      if (fails > 5) return log.error('failed to tear down docker container')
      return shutDownServices()
    }
  }

  if (typeof cleanUp === 'function') cleanUp(app, server)
  return gracefulExit.gracefulExitHandler(app, server, {
    log: true,
    logger: log.info,
  })
}

killSignals.forEach(signal => process.on(signal, shutDownServices))
