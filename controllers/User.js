const express = require('express')
const User = require('../models/User')

const responseObject = (success, data = null) => {
  if(!data) {
    return res.json({
      success,
    })
  }
  return res.json({
    success,
    data
  })
}

const listUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(!users) {
      responseObject(false)
    }
    responseObject(true, users)
  })
}

module.exports = {
  listUsers
}