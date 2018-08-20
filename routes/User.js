const Router = require('express').Router()

const UserController = require('../controllers/User')

Router.get('/list', UserController.listUsers)

module.exports = Router