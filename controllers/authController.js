// --- IMPORT DEPENDENCIES ---//

const express = require('express')
const User = require('../models/user.js')
const bcrypt = require('bcryptjs')


// Create Route
const router = express.Router()

// --- ROUTES ---//
// Singup
router.get('/signup', (req, res) => {
  res.render('user/SignUp.jsx')
})

router.post('/signup', async (req, res) => {
  // encrypt password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  )
  // create a new user
  User.create(req.body)
    .then((user) => {
      // redirect to home page
      res.redirect('/user/login')
    })
    .catch((error) => {
      // send error as json
      console.log(error)
      res.json({ error })
    })
})

// Login
router.get('/login', (req, res) => {
  res.render('user/LogIn.jsx') // <-- rendering the view page so the user can enter info
})

router.post('/login', async (req, res) => {
  // get the data from the request body
  const { username, password } = req.body
  // search for the user in the DB using Mongoose
  User.findOne({ username })

    .then(async (user) => {
      // check if the user exists
      if (user) {
        // compare password
        const result = await bcrypt.compare(password, user.password)
        if (result) {
          //setting the session to the verified user that logged in
          req.session.username = username
          req.session.loggedIn = true
          // redirect to fruits page if successful
          res.redirect('/goats')

          // LINK TO CSS WHERE HAMBURGER MENU AND LOGO CAN BE CLICKED
        }
      } else {
        // send error if the user doesn't exist
        res.json({ error: "user doesn't exist" })
      }
    })
    .catch((error) => {
      console.log(error)
      res.json({ error })
    })
})

// --- EXPORT ROUTER ---//
module.exports = router
