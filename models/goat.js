const mongoose = require('mongoose')

// Create schema for GOAT post
const goatSchema = new mongoose.Schema({
  image: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  name: { type: String, required: true },
  trait: { type: String, required: true },
  sport: { type: String, required: true },
  description: { type: String, required: true },
  nameOfPoster: { type: String, required: true, timestamps: true },
  comments: [{
    commentName: { type: String, required: true },
    commentBody: { type: String, required: true },
    like: { type: Number, required: true },
    dislike: { type: Number, required: true }
  }]
},
{ timestamps: true }
)

const Goat = mongoose.model('Goat', goatSchema)

module.exports = Goat
