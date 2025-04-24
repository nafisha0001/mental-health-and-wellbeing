const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  preview: { type: String, required: true },
  fullText: { type: String, required: true },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
