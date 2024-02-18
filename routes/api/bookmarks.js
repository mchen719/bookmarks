const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')

// Delete
router.delete('/:id', bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)
// Update
router.put('/:id', bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmark)
// Create
router.post('/', bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router