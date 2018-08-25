const Passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtraxtJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const Bcrypt = require('bcrypt')

const User = require('../models/User')

// Local Strategy
const options = { usernameField: 'username' }
const localLogin = new LocalStrategy(options, (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if(err) { return done(err) }

    if(!user) { return done(null, false) }

    Bcrypt.compare(password, user.password, (err, isMatch) => {
      if(err) { return done(err) }

      if(!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })
})

// JWT Options
const jwtOptions = {
  jwtFromRequest: ExtraxtJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'SECRETKEY'
}

// JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, { password: 0 }, (err, user) => {
    if(err) { return done(err, false) }

    if(user) { return done(null, user) }

    return done(null, null)
  })
})

// Tell passport to use theses strategies
Passport.use(jwtLogin)
Passport.use(localLogin)