const mongoose = require('mongoose')
const fs = require('fs')
const findParentDir = require('find-parent-dir')
const log = require('./logger')('loadModels')

/**
 *
 * @param {array} files
 * @param {string} dir
 * @returns {object} of document models
 */
const bootstrap = (modelsParentDir, listOfModels) => {
  log.info('attempting to bootstrap models: ', listOfModels)

  listOfModels.forEach((schema) => {
    const fileName = schema.split('.')[0]
    require(`${modelsParentDir}/models/${fileName}`) // eslint-disable-line import/no-dynamic-require, global-require

    // mongoose.model(fileName, newSchema) // eslint-disable-line no-param-reassign
  })
}

/**
 * Load all models and attach to mongoose singleton
 * for easier access in other files under:
 *
 * >>> mongoose.models.name_of_model
 */
const loadModels = async () => {
  try {
    const modelsParentDir = findParentDir.sync(__dirname, 'models')
    const listOfModels = fs.readdirSync(`${modelsParentDir}/models`)
    bootstrap(modelsParentDir, listOfModels)

    log.info('successfully bootstrapped models', Object.keys(mongoose.models))
  } catch (err) {
    log.error('could not bootstrap models on app load: ', { err })
  }
}

module.exports = loadModels
