/**
 * Created by suzanne on 5/21/18.
 */
const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/emquick')

mongoose.Promise = Promise

module.exports.Resource = require("./resource")