const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

router.post('/login', userCtrl.login, userCtrl.respondWithToken)

router.post('/')

// router.delete('/:id', user)

router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmarksByUser, userCtrl.respondWithBookmarks)


module.exports = router