/**
 * Created by suzanne on 5/21/18.
 */
const express = require('express')
const log = require('../src/helpers/logger')('routes-resources')
const Resource = require('../models/resource')

const router = express.Router()

router.get('/', async (req, res) => {
  log.info('attempting to retrieve "/" route...')
  // Resource.find({}, (err, resources) => {
  //   if (err) console.log(err)
  //   res.json({ resources })
  // })

  try {
    const resources = await Resource.find({})

    const listOfResources = Object.keys(resources).map(r => resources[r].name)
    log.info('fetched these resources from "/"', listOfResources)

    res.json({ resources })
  } catch (e) {
    log.error('could not retrieve resources', e)

    res.json(e)
  }
})

router.get('/:id', (req, res) => {
  console.log(`Im here in the backend API getting ${req.params.id}`)
  Resource.findById(req.params.id, (err, resource) => {
    if (err) console.log(err)
    // console.log(resource.name)
    res.json({ resource })
  })
})

router.post('/', (req, res) => {
  console.log(req.body.resource)

  Resource.create(req.body.resource)
    .then((newResource) => {
      res.status(201).json(newResource)
    })
    .catch((err) => {
      res.send(err)
    })
})

router.get('/:id', function(req,res){
  console.log("Im here in the backend API getting " + req.params.id)
  Resource.findById( req.params.id, function (err, resource) {
    if (err) console.log(err)
    // console.log(resource.name)
    res.json({resource})
  })
})

module.exports = router
