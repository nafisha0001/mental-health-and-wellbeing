// src/components/ArticlePreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css'; // Create CSS for styling

const ArticlePreview = ({ article, isZigZag }) => {
  return (
    <div className={`article-preview ${isZigZag ? 'zigzag' : ''}`}>
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.preview}</p>
        <Link to={`/articles/${article._id}`}>
          <button className="read-more-btn">Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
