const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  p1: { type: String, required: true },
  p2: { type: String, required: true },
  score1: { type: Number, required: true },
  score2: { type: Number, required: true },
  draw: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("History", historySchema);
