// const session = require('express-session')
const Goat = require('../models/goat')

const dataController = {
  // Index,
  index (req, res, next) {
    Goat.find({}, (err, foundGoats) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.goats = foundGoats
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  indexUser (req, res, next) {
    Goat.find({ username: req.session.username }, (err, userGoats) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.userGoats = userGoats
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Goat.findByIdAndDelete(req.params.id, (err, deletedGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.goat = deletedGoat
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  destroyComment (req, res, next) {
    Goat.findByIdAndDelete(req.params.id, (err, deletedGoat) => {
      console.log(req.params)
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.goat = deletedGoat
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Goat.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.goat = updatedGoat
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  },
  updateComment (req, res, next) {
    Goat.findById(req.params.id, (err, foundGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundGoat.comments.push(req.body)
        Goat.findByIdAndUpdate(req.params.id, foundGoat, { new: true }, (err, updatedGoat) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            res.locals.data.goat = updatedGoat
            res.locals.data.loggedIn = req.session
            res.locals.data.commentName = req.session.username

            next()
          }
        })
      }
    })
  },
  updateLikes (req, res, next) {
    Goat.findById(req.params.id, (err, foundGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundGoat.likes += 1
        Goat.findByIdAndUpdate(req.params.id, foundGoat, { new: true }, (err, updatedGoat) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            console.log(updatedGoat)
            res.locals.data.goat = updatedGoat
            next()
          }
        })
      }
    })
  },
  updateDisLikes (req, res, next) {
    Goat.findById(req.params.id, (err, foundGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundGoat.disLikes += 1
        Goat.findByIdAndUpdate(req.params.id, foundGoat, { new: true }, (err, updatedGoat) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            console.log(updatedGoat)
            res.locals.data.goat = updatedGoat
            next()
          }
        })
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.username = req.session.username
    req.body.likes = 0
    req.body.disLikes = 0
    Goat.create(req.body, (err, createdGoat) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.goat = createdGoat
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Goat.findById(req.params.id, (err, foundGoat) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a goat with that ID'
        })
      } else {
        res.locals.data.goat = foundGoat
        res.locals.data.loggedIn = req.session
        next()
      }
    })
  }
}

module.exports = dataController
