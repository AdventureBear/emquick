/**
 * Created by suzanne on 5/21/18.
 */
//MODEL Resource
const mongoose = require('mongoose')

var resourceSchema = new mongoose.Schema({
  name: String,
  friendly: String,
  description: String,
  type: String,
  field: String,
  condition: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  references: [{
    name: String,
    title: String,
    author: String,
    url: String,
    additional: String,
    accessed: { type: Date, default: Date.now } }],
  questions: [{
    title: String,
    description: String,
    options: [{
      value: Number,
      description: String,
      shortDescription: String
    }]
  }],
  pagebody: String,
})

const Resource = mongoose.model("Resource", resourceSchema)
module.exports = Resource