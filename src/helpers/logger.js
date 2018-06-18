const { colors, config } = require('debug-logger')
const debug = require('debug')
const isNode = require('detect-node')

/**
 * We hack into the debug package to create specific
 * namespaces according to the method called. This
 * object's methods can be renamed or added to.
 */
const browserDebug = {
  trace(...str) {
    return debug(`${this.namespace}:trace`)(...str)
  },
  debug(...str) {
    return debug(`${this.namespace}:debug`)(...str)
  },
  log(...str) {
    return debug(`${this.namespace}:log`)(...str)
  },
  info(...str) {
    return debug(`${this.namespace}:info`)(...str)
  },
  warn(...str) {
    return debug(`${this.namespace}:warn`)(...str)
  },
  error(...str) {
    return debug(`${this.namespace}:error`)(...str)
  },
}

/**
 * Object.assign clones objects. This allows us to store the
 * methods on the prototype of our custom debug object.
 */
const browserLogger = namespace =>
  Object.assign({}, { namespace }, browserDebug)

/**
 * set the enable prop on the function to equal
 * the debug instance. by attaching it as a prop,
 * we can access it using dot notation instead of as a function
 */
browserLogger.enable = debug.enable

/**
 * Use the debug-logger package in node, since it
 * has very useful additions for logging
 */
const nodeLogger = config({
  // util.inspect options from https://nodejs.org/api/util.html#util_util_inspect_object_options
  inspectOptions: {
    // how many levels to expand an object. Set to the default of 2
    depth: 2,
    colors: true,
  },
  // config options modified from these https://github.com/appscot/debug-logger/blob/master/debug-logger.js
  levels: {
    trace: {
      color: colors.cyan,
      prefix: 'TRACE: ',
      namespaceSuffix: ':trace',
      level: 0,
      fd: 1, // currently only 1 (stdout) is supported. stderr is debug's standard
    },
    debug: {
      color: colors.blue,
      prefix: 'DEBUG: ',
      namespaceSuffix: ':debug',
      level: 1,
      fd: 1,
    },
    log: {
      color: colors.magenta,
      prefix: 'LOG: ',
      namespaceSuffix: ':log',
      level: 2,
      fd: 1,
    },
    info: {
      color: colors.green,
      prefix: 'INFO: ',
      namespaceSuffix: ':info',
      level: 3,
      fd: 1,
    },
    warn: {
      color: colors.yellow,
      prefix: 'WARN: ',
      namespaceSuffix: ':warn',
      level: 4,
    },
    error: {
      color: colors.red,
      prefix: 'ERROR: ',
      namespaceSuffix: ':error',
      level: 5,
    },
  },
})

if (isNode) module.exports = nodeLogger
else module.exports = browserLogger
