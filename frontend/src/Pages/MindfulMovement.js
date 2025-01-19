import React from 'react';
import { Link } from 'react-router-dom';
import './MindfulMovement.css';
import YogaCard from '../Components/YogaCard';
import YogaData from '../Components/YogaData';

function MindfulMovement() {
  return (
    <div>
      <div className='mindful-movement-yoga'>
        <button className='yoga-button'>Yoga</button>
        <button className='exercise-button'>
          <Link id='back-exercise' to='/mindful-movement-2'>Exercise</Link>
        </button>
      </div>
      <div className='yoga-card-container'>
        {YogaData.map((yoga, index) => (
          <YogaCard
            key={index}
            image={yoga.image}
            heading= {yoga.heading}
            Meaning={yoga.Meaning}
            Level={yoga.Level}
            Type={yoga.Type}
            Benefits={yoga.Benefits}
            steps={yoga.steps}
          />
        ))}
      </div>
    </div>
  );
}

export default MindfulMovement;
