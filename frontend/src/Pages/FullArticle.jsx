// src/pages/FullArticle.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesData } from '../Data/articlesData';
import './FullArticle.css'; // Add CSS for styling the full article page
import ReactMarkdown from 'react-markdown';

const FullArticle = () => {
  const { id } = useParams();
  const article = articlesData.find((art) => art.id === parseInt(id));

  return (
    <div className="full-article-page">
      <h1>{article.title}</h1>
      
      <p><ReactMarkdown>{article.fullText}</ReactMarkdown></p>
   
      <div className="feedback-section">
        <textarea placeholder="Your feedback..." className="feedback-input"></textarea>
        <button className="submit-feedback-btn">Submit Feedback</button>
      </div>
    </div>
  );
};

export default FullArticle;
