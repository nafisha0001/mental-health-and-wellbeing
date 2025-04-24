const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// POST /api/enrollments
router.post('/', async (req, res) => {
  const { email, workshopTitle, workshopDate } = req.body;

  if (!email || !workshopTitle || !workshopDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const existingEnrollment = await Enrollment.findOne({ email, workshopTitle });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'You have already enrolled in this workshop' });
    }

    const newEnrollment = new Enrollment({ email, workshopTitle, workshopDate });
    await newEnrollment.save();

    res.status(201).json({ message: 'Enrollment successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error, try again' });
  }
});

module.exports = router;
