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
      path = require('path'),
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
//app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//SET STATIC ROUTE

// Priority serve any static files.



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'build')));
} else {
  app.use(express.static('public'))
}

//SERVER & DB
const port = process.env.PORT || 8080
// const db_url = process.env.MONGO_URI
const db_url = process.env.MLAB_URI
mongoose.connect(db_url)

//ROUTES
app.use('/api/resources/', resourceRoutes)

//seedDB()




// app.get("/api", function (req,res){
//   res.json({api: "This is your api"})
// })


// app.get("/api/resources/*", function (req,res){
//   console.log("Index page sent")
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'), function(err) {
//     if(err) {
//       res.status(500).send(err)
//     }
//   })
// })


app.get("/*", function (req,res){
  console.log("Index page sent")
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'), function(err) {
    if(err) {
      res.status(500).send(err)
    }
  })
})

const server = app.listen(port, function(req,res){
  console.log("EMQuick server started on port " + port + "...")
  console.log(process.env.NODE_ENV)

})



