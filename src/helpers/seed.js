/**
 * Created by suzanne on 5/21/18.
 */
// const mongoose = require('mongoose')
const log = require('./logger')('seeding db')
const mongoose = require('mongoose')
const resources = require('../data/resources.json')

const removeDocs = async (model) => {
  log.info('attempting to remove docs')
  try {
    await model.remove({})
    log.info('Database cleared')
  } catch (e) {
    log.error('error removing resource: ', { e })
  }
}

const createDocs = async (resource, model) => {
  try {
    const createdResource = await model.create(resource)
    log.info(`Created Resource, ${createdResource.name}`)
  } catch (e) {
    log.error('error creating resource ', { e })
  }
}

const seedDB = async (model) => {
  log.info('starting to seed database')

  // retrieve the model instance
  const modelInstance = mongoose.models[model]

  await removeDocs(modelInstance)

  /**
   * iterate over all the resources and seed our db.
   * we use for...of to allow waiting for results,
   * which otherwise would move to the next item.
   * but this throws a syntax error, so we disable it.
   * Usually it's not good, but it's the only way to iterate using async/await
   */
  // eslint-disable-next-line no-restricted-syntax
  for (const resource of resources) {
    /**
     * custom logic to check if this is a resource we want to include.
     * For now we only verify it has an id prop
     */
    if (resource.id >= 0) await createDocs(resource, modelInstance) // eslint-disable-line no-await-in-loop, max-len
  }

  log.info('finished seeding database')
}

module.exports = seedDB
