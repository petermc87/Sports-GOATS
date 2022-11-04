// Start our router
// Import express
const express = require('express')
// only the router none of the other app stuff
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')
const apiController = require('./apiController')

// API ROUTES
// Index
router.get('/api', dataController.index, apiController.index)
// Delete
router.delete('/api/:id', dataController.destroy, apiController.show)
// Update
router.put('/api/:id', dataController.update, apiController.show)
// Create
router.post('/api', dataController.create, apiController.show)
// Show
router.get('/api/:id', dataController.show, apiController.show)

// STANDARD ROUTES
// Index
router.get('/', dataController.index, viewController.index)
// router.get('/:id', dataController.indexUser, viewController.indexUser)
// New
router.get('/new', viewController.newView)
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
// Update
router.put('/:id/comments', dataController.updateComment, viewController.redirectShow) // <--comments
router.put('/:id/postLikes', dataController.updateLikes, viewController.redirectShow) // <--likes/dislikes
router.put('/:id', dataController.update, viewController.redirectShow)

// Create
router.post('/', dataController.create, viewController.redirectShow)
// Edit
router.get('/:id/edit', dataController.show, viewController.edit)
// Show
router.get('/:id', dataController.show, viewController.show)
// Put for Comments

module.exports = router
