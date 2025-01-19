import React from 'react';
import { Link } from 'react-router-dom';
import './Meditation.css'

const videos = [
  { id: '1', title: 'Guided Meditation for Positive Energy, Relaxation, Peace', videoId: '86m4RC_ADEY' },
  { id: '2', title: '5-Minute Meditation You Can Do Anywhere', videoId: 'inpok4MKVLM' },
  { id: '3', title: '10-Minute Meditation For Anxiety', videoId: 'O-6f5wQXSu8' },
  { id: '4', title: 'Guided Meditation for Positive Energy, Relaxation, Peace', videoId: '86m4RC_ADEY' },
  { id: '5', title: '5-Minute Meditation You Can Do Anywhere', videoId: 'inpok4MKVLM' },
  { id: '6', title: '10-Minute Meditation For Anxiety', videoId: 'O-6f5wQXSu8' }
];

function Meditation() {
  return (
    <div>
      <div className='mindful-movement-yoga'>
        <button id='meditation-button'>Meditation</button>
        <button id='calmBreating-button'>
          <Link id='back-calmBreathing' to='/calm-breathing'>Calm-Breathing</Link>
        </button>
      </div>
      <div className='meditation'>
        {videos.map((video) => (
          <div key={video.id} className='video-card'>
            <iframe 
              width="100%" 
              height="200" 
              src={`https://www.youtube.com/embed/${video.videoId}`} 
              title={video.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            {/* <h3>{video.title}</h3> */}
            <Link to={`/meditation-video/${video.id}`}>{video.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meditation;
