import React from 'react'
import Features from '../Components/Features'
import UserFeedback from '../Components/UserFeedback'
import './Home.css'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Define keyword-to-route mapping
    const routes = {
      books: '/wellness-library-books',
      wellness: '/wellness-library',
      meditation: '/meditation',
      therapy: '/creative-therapy',
      yoga: '/yoga-description',
      article:'/wellness-library-article',
    };

    const lowerQuery = query.toLowerCase();
    
    if (routes[lowerQuery]) {
      navigate(routes[lowerQuery]); // Navigate to the matched route
    } else {
      alert('No matching page found.');
    }
  };

  return (
    <div>
      <div className="image-container">
        <div className="header-content">
          <h1>Your Home for Mental Fitness</h1>
          <p className="web-des">
            In every storm, there's a place of calm. Let us help you find it within yourself and shine in your own strength.
          </p>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="e.g.:Books"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search </button>
          </div>
        </div>
      </div>
      <h1>Our Features</h1>
      <Features />
      <h1>Happy users</h1>
      <UserFeedback />
    </div>
  );
}

export default Home;
