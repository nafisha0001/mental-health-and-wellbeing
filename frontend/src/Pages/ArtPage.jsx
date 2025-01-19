import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtPage.css'; // Custom styles for the ArtPage

const artsData = [
  {
    id: 1,
    title: 'Inspiration Art 1',
    image: require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'Believe in yourself and all that you are.',
  },
  {
    id: 2,
    title: 'Inspiration Art 2',
    image:  require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'Every day is a second chance.',
  },
  {
    id: 3,
    title: 'Inspiration Art 3',
    image:  require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'You are capable of amazing things.',
  },
  {
    id: 4,
    title: 'Inspiration Art 4',
    image:  require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'Dream big and dare to fail.',
  },
  {
    id: 5,
    title: 'Inspiration Art 5',
    image:  require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'Keep going, no matter what.',
  },
  {
    id: 6,
    title: 'Inspiration Art 6',
    image: require('../Images/ArtGallary/image 122.png'),
    motivationalQuote: 'Success is a journey, not a destination.',
  },
  {
    id: 7,
    title: 'Inspiration Art 7',
    image: 'path-to-image-7.jpg',
    motivationalQuote: 'The harder you work, the luckier you get.',
  },
  {
    id: 8,
    title: 'Inspiration Art 8',
    image: 'path-to-image-8.jpg',
    motivationalQuote: 'Stay positive, work hard, make it happen.',
  },
  {
    id: 9,
    title: 'Inspiration Art 9',
    image: 'path-to-image-9.jpg',
    motivationalQuote: 'You are stronger than you think.',
  },
];

const ArtCard = ({ art }) => {
  return (
    <div className="art-card">
      <img src={art.image} alt={art.title} className="art-image" />
      {/* <div className="art-title">{art.title}</div> */}
      <Link to={`/art/${art.id}`}>
        <button className="try-button">Try</button>
      </Link>
    </div>
  );
};

const ArtPage = () => {
  const [visibleArtCount, setVisibleArtCount] = useState(3);

  const showMoreArts = () => {
    setVisibleArtCount((prevCount) => prevCount + 6); // Show 6 more art cards
  };

  return (
    <div className="art-page">
      <div className="navigation">
        <Link to="/creative-theraphy-page-cartoon">
          <button className="nav-button">Cartoons</button>
        </Link>
        <Link to="/creative-theraphy-page-art">
          <button className="nav-button">Art</button>
        </Link>
        <Link to="/creative-theraphy-page-music">
          <button className="nav-button">Music</button>
        </Link>
      </div>
      <h2>Art Inspiration</h2>
      <div className="art-grid">
        {artsData.slice(0, visibleArtCount).map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
      {visibleArtCount < artsData.length && (
        <button className="show-more-button" onClick={showMoreArts}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ArtPage;
