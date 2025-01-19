import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import './MindfulMovement2.css';
import YogaCard from '../Components/ExerciseCard';
import YogaData from '../Components/ExerciseData';

function MindfulMovement2() {
  return (
    <div>
      <div className='mindful-movement-exercise'>
        <button className='yoga-button-2'>
           <Link id='back-yoga' to='/mindful-movement'>Yoga</Link>
        </button>
        <button className='exercise-button-2'>Exercise</button>
      </div>
      <div className='exercise-card-container'>
        {YogaData.map((exercise, index) => (
          <YogaCard
            key={index}
            image={exercise.image}
            heading={exercise.heading}
            Meaning={exercise.Meaning}
            Level={exercise.Level}
            Type={exercise.Type}
            Benefits={exercise.Benefits}
            steps={exercise.steps}
          />
        ))}
      </div>
    </div>
  );
}

export default MindfulMovement2;
