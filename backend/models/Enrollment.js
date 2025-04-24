const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  workshopTitle: { type: String, required: true },
  workshopDate: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
