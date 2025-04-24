const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// Add a new article
router.post('/', async (req, res) => {
  try {
    const { title, imageUrl, preview, fullText } = req.body;
    const newArticle = new Article({ title, imageUrl, preview, fullText });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add article' });
  }
});




// Get a single article by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const article = await Article.findById(req.params.id);
//     if (!article) return res.status(404).json({ message: 'Article not found' });

//     res.json(article);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

router.get('/:id', async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) return res.status(404).json({ message: 'Article not found' });
  
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
