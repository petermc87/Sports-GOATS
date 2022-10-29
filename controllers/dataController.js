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
        foundGoat.postLikes.push(req.body)
        Goat.findByIdAndUpdate(req.params.id, foundGoat, { new: true }, (err, updatedGoat) => {
          if (err) {
            res.status(400).send({
              msg: err.message
            })
          } else {
            res.locals.data.goat = updatedGoat
            next()
          }
        })
      }
    })
  },
  // Create
  create (req, res, next) {
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
        next()
      }
    })
  }
}

module.exports = dataController
