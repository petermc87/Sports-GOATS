// --- ---//
// --- REQUIRE MODULES---//
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
// Create express app
const app = express()
const PORT = process.env.PORT || 3000
// const cors = require('cors')

// ---START CONFIG ---//
app.use((req, res, next) => {
  res.locals.data = {} // <-- storing routes in static/local storage
  next()
})
app.set('view engine', 'jsx') // <-- resgister view engine
app.engine('jsx', require('jsx-view-engine').createEngine())
// connect to mongo
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
// --- END CONFIG---//

// --- START MIDDLEWARE---//
app.use(express.urlencoded({ extended: true })) // <-- allows us to use req.body
app.use(express.json())
app.use(methodOverride('method'))
app.use(express.static('public')) // <-- making the public directory a static folder
app.use('/goats', require('./controllers/routeControllers.js'))
// app.use(cors())
// --- END MIDDLEWARE---//

app.listen(PORT, () => {
  console.log('Alas, we are here!!', PORT)
})
