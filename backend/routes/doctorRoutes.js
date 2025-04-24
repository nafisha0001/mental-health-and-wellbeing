const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// Fetch all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors' });
  }
});

// Add a new doctor
router.post('/', async (req, res) => {
  try {
    const { name, fees, rating, image, specialization } = req.body;
    const newDoctor = new Doctor({ name, fees, rating, image, specialization });
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor added successfully', newDoctor });
  } catch (error) {
    res.status(500).json({ message: 'Error adding doctor' });
  }
});

module.exports = router;
