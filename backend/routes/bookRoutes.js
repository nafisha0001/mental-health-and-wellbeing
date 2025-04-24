const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add a new book
router.post("/", async (req, res) => {
  const { title, author, image, readLink } = req.body;

  if (!title || !author || !image || !readLink) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBook = new Book({ title, author, image, readLink });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
});

module.exports = router;
