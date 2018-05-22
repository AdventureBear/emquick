/**
 * Created by suzanne on 5/21/18.
 */
const mongoose = require('mongoose'),
      Resource  = require('./models/resource'),
      resources = require('./src/data/resources.json')


function seedDB() {
  console.log("hello")
    Resource.remove({}, function(err){
    console.log("Database cleared")
      if (err) console.log(err)
      //Create each resource

      function createResource (resource){
        Resource.create(resource, function(err, createdResource){
          if (err) console.log(err)
          console.log("Created Resource, "+ resource.name)
        })
      }

      createResource(resources[0])
      createResource(resources[1])
      createResource(resources[2])
    })
}

module.exports = seedDB