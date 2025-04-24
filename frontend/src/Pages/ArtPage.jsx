import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './ArtPage.css'; // Custom styles for the ArtPage


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
  const [arts, setArts] = useState([]);
  const [visibleArtCount, setVisibleArtCount] = useState(3);

  useEffect(() => {
    const fetchArts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/art"); // Adjust API URL if needed
        const data = await response.json();
        setArts(data);
      } catch (error) {
        console.error("Error fetching arts:", error);
      }
    };

    fetchArts();
  }, []);

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
        {arts.slice(0, visibleArtCount).map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
      {visibleArtCount < arts.length && (
        <button className="show-more-button" onClick={showMoreArts}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ArtPage;
