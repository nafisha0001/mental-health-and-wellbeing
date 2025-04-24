const express= require('express');
const MeditationVideo =require('../models/meditationModel.js');

const router = express.Router();

// ✅ Get all meditation videos
router.get('/', async (req, res) => {
  try {
    const videos = await MeditationVideo.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
