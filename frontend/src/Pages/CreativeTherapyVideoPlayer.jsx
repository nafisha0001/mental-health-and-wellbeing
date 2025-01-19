import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CreativeTherapyVideoPlayer.css';

// Sample video data for Creative Therapy
const therapyVideosData = [
  {
    title: 'Creative Art Therapy',
    videoLink: 'https://www.youtube.com/embed/YRJ6xoiRcpQ',
    description: 'Explore the benefits of creative art therapy in enhancing mental well-being through artistic expression. Learn how creating art can help you process emotions and improve mental health.',
  },
  {
    title: 'Music for Mental Wellness',
    videoLink: 'https://www.youtube.com/embed/YRJ6xoiRcpQ',
    description: 'Discover how music therapy can uplift your mood and promote relaxation. This video provides insights on using music as a tool for emotional regulation and mental well-being.',
  },
  {
    title: 'Dance Movement Therapy',
    videoLink: 'https://www.youtube.com/embed/YRJ6xoiRcpQ',
    description: 'Learn how dance movement therapy can help you express emotions, relieve stress, and improve your overall mental health through physical movement and body awareness.',
  },
  // Add more videos here
];

const CreativeTherapyVideoPlayer = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const video = therapyVideosData[id]; // Find the video based on the ID

  // Feedback state
  const [feedback, setFeedback] = useState('');

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback(''); // Clear the feedback box after submission
  };

  return (
    <div className="page-container">
      <h2>{video.title}</h2>

      <div className="video-and-description">
        {/* Video Player */}
        <div className="video-container">
          <iframe
            src={video.videoLink}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <p>{video.description}</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="feedback-form">
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default CreativeTherapyVideoPlayer;
