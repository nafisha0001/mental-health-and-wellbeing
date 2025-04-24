const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
      const feedbacks = await Feedback.find();
      res.json(feedbacks);
  } catch (error) {
      res.status(500).json({ message: "Server error", error });
  }
});


module.exports = router;
