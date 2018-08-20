const mongoose = require('mongoose')
const { Schema } = mongoose

const PlanSchema = new Schema({
  name: { type: String, required: true },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }]
})

const Plan = module.exports = Model('Plan', PlanSchema)