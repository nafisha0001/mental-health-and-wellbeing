const express = require('express');
const router = express.Router();
const Workshop = require('../models/workshopModel');

// Fetch all workshops
router.get('/', async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workshops', error });
  }
});

// Fetch a single workshop by ID
router.get('/:id', async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (!workshop) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    res.json(workshop);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workshop', error });
  }
});

// Create a new workshop
router.post('/', async (req, res) => {
  try {
    const { title, price, date, image, description } = req.body;
    const newWorkshop = new Workshop({ title, price, date, image, description });
    await newWorkshop.save();
    res.status(201).json(newWorkshop);
  } catch (error) {
    res.status(500).json({ message: 'Error adding workshop', error });
  }
});

// Delete a workshop by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedWorkshop = await Workshop.findByIdAndDelete(req.params.id);
    if (!deletedWorkshop) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    res.json({ message: 'Workshop deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting workshop', error });
  }
});

module.exports = router;
