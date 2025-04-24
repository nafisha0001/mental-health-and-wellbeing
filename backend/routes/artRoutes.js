const express = require("express");
const router = express.Router();
const Art = require("../models/Art"); // Adjust model import if necessary

// GET all arts
router.get("/", async (req, res) => {
  try {
    const arts = await Art.find();
    res.json(arts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching arts" });
  }
});

router.get("/:id", async (req, res) => {
    try {
      const art = await Art.findById(req.params.id);
      if (!art) {
        return res.status(404).json({ message: "Art not found" });
      }
      res.json(art);
    } catch (error) {
      res.status(500).json({ message: "Error fetching art" });
    }
  });
  

module.exports = router;
