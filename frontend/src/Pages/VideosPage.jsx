
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './VideosPage.css'; // Add appropriate styling

// const videosData = [
//   {
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },
//   {
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },{
//     title: 'Mindfulness Meditation',
//     videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
//     thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
//   },
// ];

// const VideosPage = () => {
//   const [visibleRows, setVisibleRows] = useState(4);

//   const showMoreVideos = () => {
//     setVisibleRows((prevRows) => prevRows + 4); // Show 4 more rows when clicked
//   };

//   const visibleVideos = videosData.slice(0, visibleRows * 4); // Calculate visible videos based on rows

//   return (
//     <div className="videos-page">
//       {/* Navigation buttons */}
//       <div className="navigation">
//       <Link to="/wellness-library-books">
//           <button className="nav-button" >Books</button> {/* Use Link to navigate */}
//       </Link>
//       <Link to="/articles">
//            <button className="nav-button">Articles</button> {/* Use Link to navigate */}
//         </Link>
//         <Link to="/wellness-library-videos">
//           <button className="nav-button">Videos</button> {/* Use Link to navigate */}
//         </Link>
        
//       </div>
//       <div className="videos-grid">
//         {visibleVideos.map((video, index) => (
//           <div key={index} className="video-item">
//             <img
//               src={video.thumbnail}
//               alt={video.title}
//               className="video-thumbnail"
//             />
//             <div className="hover-options">
//               <Link to={`/video/${index}`} className="view-link">
//                 View the Video
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More Button */}
//       {visibleRows * 4 < videosData.length && (
//         <div className="more-button">
//           <button onClick={showMoreVideos}>More...</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideosPage;
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './VideosPage.css'; // Add appropriate styling

const videosData = [
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

const VideosPage = () => {
  const [visibleRows, setVisibleRows] = useState(4);

  const showMoreVideos = () => {
    setVisibleRows((prevRows) => prevRows + 4); // Show 4 more rows when clicked
  };

  const visibleVideos = videosData.slice(0, visibleRows * 4); // Calculate visible videos based on rows

  return (
    <div className="videos-page">
      {/* Navigation buttons */}
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
      
      {/* Videos Grid */}
      <div className="videos-grid">
        {visibleVideos.map((video, index) => (
          <VideoCard key={index} video={video} index={index} />
        ))}
      </div>

      {/* More Button */}
      {visibleRows * 4 < videosData.length && (
        <div className="more-button">
          <button onClick={showMoreVideos}>More...</button>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
