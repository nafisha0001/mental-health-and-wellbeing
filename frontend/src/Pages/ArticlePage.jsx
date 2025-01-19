
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { articlesData } from '../Data/articlesData';
import ArticlePreview from '../Components/ArticlePreview';
import './ArticlePage.css'; 

const ArticlePage = () => {
  const [visibleArticles, setVisibleArticles] = useState(5); // Default number of articles to show

  // Function to handle showing more articles
  const showMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 5); // Show 5 more articles when clicked
  };

  const visibleArticleList = articlesData.slice(0, visibleArticles); // Display limited articles

  return (
    <div className="articles-page">
      {/* Navigation Buttons */}
      <div className="navigation">
        <Link to="/wellness-library-books">
          <button className="nav-button">Books</button>
        </Link>
        <Link to="/articles">
          <button className="nav-button">Articles</button>
        </Link>
        <Link to="/wellness-library-videos">
          <button className="nav-button">Videos</button>
        </Link>
      </div>

      {/* Articles with HR separator */}
      {visibleArticleList.map((article, index) => (
        <div key={article.id}>
          <ArticlePreview
            article={article}
            isZigZag={index % 2 === 1} // Alternate for zigzag layout
          />
          {index < visibleArticleList.length - 1 && <hr className="article-separator" />} {/* Decorated HR */}
        </div>
      ))}

      {/* Check More Button */}
      {visibleArticles < articlesData.length && (
        <div className="more-button">
          <button onClick={showMoreArticles}>Check More...</button>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
