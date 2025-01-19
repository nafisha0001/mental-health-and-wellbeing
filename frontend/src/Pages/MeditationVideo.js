import React from 'react';
import { useParams } from 'react-router-dom';
import './MeditationVideo.css';

const videos = {
  '1': { title: 'Guided Meditation for Positive Energy, Relaxation, Peace', videoId: '86m4RC_ADEY' },
  '2': { title: '5-Minute Meditation You Can Do Anywhere', videoId: 'inpok4MKVLM' },
  '3': { title: '10-Minute Meditation For Anxiety', videoId: 'O-6f5wQXSu8' },
  '4': { title: 'Guided Meditation for Positive Energy, Relaxation, Peace', videoId: '86m4RC_ADEY' },
  '5': { title: '5-Minute Meditation You Can Do Anywhere', videoId: 'inpok4MKVLM' },
  '6': { title: '10-Minute Meditation For Anxiety', videoId: 'O-6f5wQXSu8' }
};

function MeditationVideo() {
  const { id } = useParams();
  const video = videos[id];

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
}

export default MeditationVideo;
