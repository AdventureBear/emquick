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
  Resource.findById( req.params.id, function (err, resources){
    if (err) console.log(err)
    res.json({resources})
  })
})





module.exports =router
