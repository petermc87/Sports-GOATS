// --- IMPORT DEPENDENCIES ---//

const mongoose = require('mongoose')

// --- DEFINE MODEL ---//
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make goats schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likes: Boolean,
  disLikes: Boolean,
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true, timestamps: true },
    like: { type: Number, required: true },
    dislike: { type: Number, required: true }
  }]
})

// make goats model
const User = model('User', userSchema)

// --- EXPORT MODEL ---//

module.exports = User
