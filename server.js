// // --- ---//
// // --- REQUIRE MODULES---//
require('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
// Create our express app
const app = express()
const PORT = process.env.PORT || 3002
// const cors = require('cors')

/* Start config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
// specify the views directory. If you want to change the folder later, you will need to specify the path
app.use((req, res, next) => {
  res.locals.data = {} // <-- all routes can store in static (local) storage
  next()
})
app.use(express.json())
app.set('view engine', 'jsx') // register the jsx engine
app.engine('jsx', require('jsx-view-engine').createEngine())
// mongo connection
db.once('open', () => {
  console.log('connected to mongoDB Atlas')
})
/* END config */

/* Start middleware */

app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static('public')) // <-- you do not add public to the path
app.use('/goats', require('./controllers/routeControllers.js'))
// app.use('/user', require('./controllers/authController.js'))
// app.use(cors())
/* END middleware */

// Tell the app to listen to dev port 3001
app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
