// Dependencies
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

// Server / Port
const PORT = process.env.PORT || 9898
const Server = express()

// Routes
const UserRoutes = require('./routes/User')

// Database
mongoose.Promise = global.Promise
mongoose
  .connect(process.env.DB_HOST, { useNewUrlParser: true })
  .then(() => console.log(`Connected to DB ${process.env.DB_HOST}`))
  .catch((err) => console.log(`DB Error:${err}`))

// Middleware
Server.use(logger('dev'))
Server.use(cors())
Server.use(bodyParser.json())
Server.use('/user', UserRoutes)
Server.use(passport.initialize())

// Start Server
Server.listen(PORT, () => console.log(`Server running on ${PORT}`))