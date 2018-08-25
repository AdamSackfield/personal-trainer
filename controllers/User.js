const express = require('express')
const Bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jwt-simple')

const userToken = user => {
  const timeStamp = new Date().getTime()
  return jwt.encode({ sub: user._id, iat: timeStamp }, 'SECRETKEY')
}

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(!users) {
      res.json({
        success: false,
        message: 'Failed to GET:[USERS]',
        error: err
      })
    }
    res.json({
      success: true,
      users
    })
  })
}

const createUser = (req, res) => {
  let newUser = new User({
    username: req.body.username
  })

  Bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return res.status(400).json({
        success: false,
        message: 'Bcrypt genSalt Error',
        error: err
      })
    }
    console.log('PASSWORD', req.body)
    Bcrypt.hash(req.body.password, salt, (err, hash) => {
      if(err) {
        return res.status(400).json({
          success: false,
          message: 'Bcrypt Hash Error',
          error: err
        })
      }

      newUser.password = hash

      User.register(newUser, (err, user) => {
        if(err) {
          return res.status(400).json({
            success: false,
            message: 'Failed to GET:[USERS]',
            error: err
          })
        }
        res.json({ 
          success: true,
          message: 'Sign Up Success',
          user
        })
      })
    })
  })
}

const signIn = (req, res) => {
  res.json({
    success: true,
    user: req.user,
    message: 'Login Success',
    token: userToken(req.user)
  })
}

module.exports = {
  getUsers,
  createUser,
  signIn
}