const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  plans: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plan" }]
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.register = (newUser, callback) => {
  newUser.save(callback)
}