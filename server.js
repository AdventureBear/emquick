/**
 * Created by suzanne on 5/21/18.
 */

const bodyParser = require('body-parser'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      express = require('express'),
      dotenv = require('dotenv'),
      morgan = require('morgan'),
      seedDB = require('./seed'),
      cors = require('cors'),
      app = express()

const Resource  = require('./models/resource'),
resources = require('./src/data/resources.json')

//Routes
const resourceRoutes = require('./routes/resources')

//Setup app
dotenv.config()
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//SERVER
const port = process.env.PORT || 8080
//const mongo_url = process.env.MONGO_URI
const mlab_url = 'mongodb://emquickadmin:quickfacts123@ds135750.mlab.com:35750/emquick'
mongoose.connect(mlab_url)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}


//ROUTES
app.use('/api/resources/', resourceRoutes)

//seedDB()



// app.get("/", function (req,res){
//   res.send("Hello from ROOT route")
// })

app.get("/api", function (req,res){
  res.json({api: "This is your api"})
})


const server = app.listen(port, function(req,res){
  console.log("EMQuick server started on port " + port + "...")
})



