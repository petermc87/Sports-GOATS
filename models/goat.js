const mongoose = require('mongoose')

// Create schema for GOAT post
const goatSchema = new mongoose.Schema({
  image: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  name: { type: String, required: true },
  trait: { type: String, required: true },
  sport: { type: String, required: true },
  description: { type: String, required: true },
  username: { type: String },
  likes: { type: Number },
  disLikes: { type: Number },
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true, timestamps: true },
    like: { type: Number, required: true },
    dislike: { type: Number, required: true }
  }]
},
{ timestamps: true }
)

const Goat = mongoose.model('Goat', goatSchema)

module.exports = Goat
