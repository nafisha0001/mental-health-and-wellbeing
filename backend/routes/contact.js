const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST request to save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, query } = req.body;
    const newContact = new Contact({ name, email, query });
    await newContact.save();
    res.status(201).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit query' });
  }
});

module.exports = router;
