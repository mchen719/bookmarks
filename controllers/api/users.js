require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user')
const crypto = require('crypto')

const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if(!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).digest('hex').split('').reverse().join('')
        const match = await bcrypt.compare(password, user.password)
        if(!match) throw new Error('password is invalid')
        res.locals.data.user = user
        res.locals.data.token = createJWT(user)
        next()

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getBookmarksByUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: res.locals.data.email }).populate('bookmarks').sort('bookmarks.createdAt').exec()
        console.log(user)
        const bookmarks = user.bookmarks
        res.locals.data.bookmarks = bookmarks.sort().reverse()
        console.log(res.locals.data.bookmarks)
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithToken = (req, res) => {
    res.json(res.locals.data.token)
}
const respondWithUser = (req, res) => {
    res.json(res.locals.data.user)
}

const respondWithBookmarks = (req, res) => {
    res.json(res.locals.data.bookmarks)
}

module.exports = {
    signUp,
    login,
    getBookmarksByUser,
    respondWithToken,
    respondWithUser,
    respondWithBookmarks
}


function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '48h'})
}