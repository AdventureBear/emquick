/**
 * Created by suzanne on 5/21/18.
 */

const passport = require('passport'),
      mongoose = require('mongoose'),
      express = require('express'),
      dotenv = require('dotenv'),
      morgan = require('morgan'),
      seedDB = require('./seed'),
      app = express()

const Resource  = require('./models/resource'),
resources = require('./src/data/resources.json')

//Routes
const resourceRoutes = require('./routes/resources')

//Setup app
dotenv.config()
//app.use(express.static('public'))



//SERVER
const port = process.env.PORT || 8080
const mongo_url = process.env.MONGO_URI
mongoose.connect(mongo_url)



//ROUTES
app.use('/api/resources/', resourceRoutes)

//seedDB()



app.get("/", function (req,res){
  res.send("Hello from ROOT route")
})

app.get("/api", function (req,res){
  res.json({api: "This is your api"})
})


const server = app.listen(port, function(req,res){
  console.log("EMQuick server started on port " + port + "...")
})



app.use(morgan('dev'))