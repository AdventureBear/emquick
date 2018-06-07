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
  Resource.create(req.body)
    .then(function(newResource) {
      res.status(201).json(newResource)
    })
    .catch(function(err){
      res.send(err)
    })
})

// exports.createTodo = function(req,res){
//   db.Todo.create(req.body)
//     .then(function(newTodo){
//       res.status(201).json(newTodo)
//     })
//     .catch(function(err){
//       res.send(err)
//     })
// }



module.exports =router
