const express = require('express')

const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

// ---API ROUTES---//

// INDEX
router.get('/api', dataController.index, apiController.index)
// DELETE
router.delete('/api/:id', dataController.destroy, apiController.show)
// UPDATE
router.put('/api/:id', dataController.update, apiController.show)
// CREATE
router.post('/api', dataController.create, apiController.show)
// SHOW
router.get('/api/:id', dataController.show, apiController.show)

// ---REGULAR ROUTES---//

// INDEX
router.get('/', dataController.index, viewController.index)
// NEW
router.get('/new', viewController.newView)
// DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// UPDATE
router.put('/:id', dataController.update, viewController.redirectShow)
router.put('/:id/comments', dataController.updateComment, viewController.redirectShow)
// CREATE
router.post('/', dataController.create, viewController.redirectShow)
// SHOW
router.get('/:id', dataController.show, viewController.show)

module.exports = router
