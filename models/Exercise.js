const mongoose = require('mongoose')
const { Schema } = mongoose

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscles: { type: [String], required: true }
})

const Exercise = module.exports = Model('Exercise', ExerciseSchema)