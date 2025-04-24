import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './VideosPage.css';

const VideoCard = ({ video }) => (
  <Link to={`/video/${video._id}`} className="video-card">
    <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
    <div className="video-title">{video.title}</div>
  </Link>
);

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(8); // Show 8 videos initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/videos');
        setVideos(data);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const showMoreVideos = () => setVisibleVideos((prev) => prev + 4);

  return (
    <div className="videos-page">
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

      {loading && <p>Loading videos...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="videos-grid">
            {videos.slice(0, visibleVideos).map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>

          {visibleVideos < videos.length && (
            <div className="more-button">
              <button onClick={showMoreVideos}>More...</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideosPage;
