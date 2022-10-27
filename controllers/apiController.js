const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.goats)
  },
  show (req, res, next) {
    res.json(res.locals.data.goats)
  }
}

module.exports = apiController
