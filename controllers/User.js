const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')


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

  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return res.status(400).json({
        success: false,
        message: 'Bcrypt genSalt Error',
        error: err
      })
    }
    console.log('PASSWORD', req.body)
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if(err) {
        return res.status(401).json({
          success: false,
          message: 'Bcrypt Hash Error',
          error: err
        })
      }

      newUser.password = hash

      User.register(newUser, (err, user) => {
        if(err) {
          return res.status(402).json({
            success: false,
            message: 'Failed to GET:[USERS]',
            error: err
          })
        }
        res.json({ 
          success: true,
          user
        })
      })
    })
  })
  
}

module.exports = {
  getUsers,
  createUser
}