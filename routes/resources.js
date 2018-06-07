/**
 * Created by suzanne on 5/21/18.
 */
const express= require('express'),
   router = express.Router(),
  Resource = require('../models/resource')

router.get('/', function(req,res){
  Resource.find({}, function (err, resources){
    if (err) console.log(err)
    res.json({resources})
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


router.post('/', function(req,res){
  console.log(req.body)
  res.send("Post function")

})




module.exports =router
