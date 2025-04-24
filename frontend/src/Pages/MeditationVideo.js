import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MeditationVideo.css';

const MeditationVideo = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/meditation/${id}`);
        if (!response.ok) throw new Error('Failed to fetch video');
        
        const data = await response.json();
        setVideo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!video) return <p>Video not found</p>;

  return (
    <div className='video-page'>
      <h2>{video.title}</h2>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MeditationVideo;
