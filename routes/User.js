const Router = require('express').Router()
const passport = require('passport')
const passportService = require('../services/Passport')

const UserController = require('../controllers/User')

// Passport 
const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })

Router.get('/list', UserController.getUsers)
Router.post('/create', UserController.createUser)
Router.post('/login', requireSignin, UserController.signIn)
Router.get('/dashboard', requireAuth, UserController.dashboard)

module.exports = Router