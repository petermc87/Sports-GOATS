// --- IMPORT DEPENDENCIES ---//

const mongoose = require('mongoose')

// --- DEFINE MODEL ---//
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make goats schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

// make goats model
const User = model('User', userSchema)

// --- EXPORT MODEL ---//

module.exports = User
