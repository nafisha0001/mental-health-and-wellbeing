
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Music.css'; // Add appropriate styling

const videosDataCreative = [
  {
    title: 'Mindfulness Meditation ',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  // Add more video data...
];

// VideoCard Component
const VideoCard = ({ video, index }) => {
  return (
    <Link to={`/video/${index}`} className="video-card">
      <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
      <div className="video-title">{video.title}</div>
    </Link>
  );
};

const CreativeTherapy1 = () => {
  const [visibleRows, setVisibleRows] = useState(4);

  const showMoreVideos = () => {
    setVisibleRows((prevRows) => prevRows + 4); // Show 4 more rows when clicked
  };

  const visibleVideos = videosDataCreative.slice(0, visibleRows * 4); // Calculate visible videos based on rows

  return (
    <div className="videos-page">
      {/* Navigation buttons */}
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
      {/* Videos Grid */}
      <div className="videos-grid">
        {visibleVideos.map((video, index) => (
          <VideoCard key={index} video={video} index={index} />
        ))}
      </div>

      {/* More Button */}
      {visibleRows * 4 < videosDataCreative.length && (
        <div className="more-button">
          <button onClick={showMoreVideos}>More...</button>
        </div>
      )}
    </div>
  );
};

export default CreativeTherapy1;



