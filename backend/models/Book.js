const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true }, // Store image URLs
  readLink: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
