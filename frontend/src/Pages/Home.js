import React from 'react'
import Features from '../Components/Features'
import UserFeedback from '../Components/UserFeedback'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="image-container">
        <div className="header-content">
          <h1>Your Home for Mental Fitness</h1>
          <p className='web-des'>In every storm, there's a place of calm. Let us help you find it within yourself and shine in your own strength.</p>
          <div className="search-box">
            <input type="text" placeholder="Search Anything"/>
            <button>Search</button>
          </div>
        </div>
      </div>
      <h1>Our Features</h1>
      <Features />
      <h1>Happy users</h1>
      <UserFeedback />
    </div>
  )
}

export default Home