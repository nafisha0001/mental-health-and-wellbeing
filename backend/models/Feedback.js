const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: String,
    review: String,
    rating: Number,
    imageUrl: String, // Store image URL instead of binary data
});

module.exports = mongoose.model("Feedback", feedbackSchema);
