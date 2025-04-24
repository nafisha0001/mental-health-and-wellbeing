const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, required: true }, // Store image URLs or file paths
  motivationalQuote: { type: String, required: true }
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
