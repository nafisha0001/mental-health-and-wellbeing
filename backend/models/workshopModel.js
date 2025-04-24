const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: String, required: true },
  imageURL: { type: String, required: true },
  description: { type: String, required: true }
});

const Workshop = mongoose.model('Workshop', workshopSchema);
module.exports = Workshop;
