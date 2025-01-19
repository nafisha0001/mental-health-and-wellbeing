import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CalmBreathing.css';

function CalmBreathing() {
  const [timeLeft, setTimeLeft] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef(new Audio(require('../Data/calmBreathing.mp3'))); // Load audio file

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      audioRef.current.play(); // Play audio
    } else {
      audioRef.current.pause(); // Pause audio
    }

    if (timeLeft === 0) setIsRunning(false); // Stop if timer finishes

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [isRunning, timeLeft]);

  // Restart audio if it finishes playing
  useEffect(() => {
    const audio = audioRef.current;
    const handleAudioEnd = () => {
      audio.currentTime = 0; // Reset audio time
      audio.play(); // Restart audio
    };

    audio.addEventListener('ended', handleAudioEnd); // Listen for audio end
    return () => audio.removeEventListener('ended', handleAudioEnd); // Cleanup listener
  }, []);

  const handleStartStop = () => setIsRunning((prevIsRunning) => !prevIsRunning);

  const handleRestart = () => {
    setIsRunning(false);
    setTimeLeft(600);
    audioRef.current.pause(); // Pause audio
    audioRef.current.currentTime = 0; // Reset audio to beginning
  };

  return (
    <div>
      <div className='mindful-movement-yoga'>
        <button id='meditation-button-2'>
          <Link id='back-meditation' to='/meditation'>Meditation</Link>
        </button>
        <button id='calmBreating-button-2'>Calm-Breathing</button>
      </div>

      <div className='calm-breathing-container'>
        <div className="clock">
          <h2>Close your eyes and breath calmly.</h2>
          <h3 className='timer'>{formatTime(timeLeft)}</h3>
        </div>

        <div className='button-text'>
          <button className='start-stop-button' onClick={handleStartStop}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className='restart-button' onClick={handleRestart}>
            Restart
          </button>
        </div>

        <p className='button-text'>
          {isRunning ? 'Counting down...' : 'Press Start to begin countdown'}
        </p>
      </div>
    </div>
  );
}

export default CalmBreathing;
