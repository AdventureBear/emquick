const log = require('./logger')

const levels = {
  trace: 0,
  debug: 1,
  log: 2,
  info: 3,
  warn: 4,
  error: 5,
}

const level = process.env.REACT_APP_DEBUG_LEVEL
const namespaces = process.env.REACT_APP_DEBUG.split(/,?\s+/g)

const filterLevel = ns =>
  Object.keys(levels).reduce((str, nextLevel) => {
    if (levels[nextLevel.toLowerCase()] >= levels[level]) {
      return `${str} ${ns}:${nextLevel}`
    }
    return str
  }, '')

const enableDebug = () => {
  // if the level isn't set, we can just enable the variable
  if (!level) {
    return log.enable(process.env.REACT_APP_DEBUG)
  }

  /**
   * loop through and create a str variable that is equivalent
   * to a filtered subset. Exclusions are left as is
   *
   * DEBUG_LEVEL=info
   *    server:* app:error -sockjs-client:*
   * >> server:info server:warn server:error app:error -sockjs-client:*
   */
  const filteredNamespaces = namespaces.reduce((str, nextNS) => {
    const namespace = nextNS.split(':')[0]
    const filter = nextNS.split(':')[1]
    const isFiltered = namespace === '*' || filter === '*'
    const isExclusion = nextNS[0] === '-'

    if (isFiltered && !isExclusion) return `${str} ${filterLevel(namespace)}`
    return `${str} ${nextNS}`
  }, '')

  return log.enable(filteredNamespaces)
}

module.exports = enableDebug
