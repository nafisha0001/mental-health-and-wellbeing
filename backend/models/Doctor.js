const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fees: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true }, // Store image URLs or paths
  specialization: { type: String, required: true }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;