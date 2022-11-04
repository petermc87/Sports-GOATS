// const Goat = require('../models/goat')
const RESOURCE_PATH = '/goats'

const viewController = {
  index (req, res, next) {
    res.render('goats/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('goats/New')
  },
  edit (req, res, next) {
    res.render('goats/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('goats/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const goatId = req.params.id || res.locals.data.goat._id
    res.redirect(`${RESOURCE_PATH}/${goatId}`)
  }

}

module.exports = viewController
