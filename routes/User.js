const Router = require('express').Router()

const UserController = require('../controllers/User')

Router.get('/list', UserController.getUsers)
Router.post('/create', UserController.createUser)

module.exports = Router