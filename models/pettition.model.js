const mongoose = require("mongoose");


const petitionSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true},
  creator: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },   
  upvoteCount: {type: Number, default: 0}
});


const petitionModel = mongoose.model("petitions",petitionSchema)

module.exports = petitionModel