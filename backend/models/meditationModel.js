const mongoose=require('mongoose');

const meditationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Unique video ID
  title: { type: String, required: true }, // Video title
  videoId: { type: String, required: true } // YouTube video ID
});


module.exports = mongoose.model('MeditationVideo', meditationSchema);