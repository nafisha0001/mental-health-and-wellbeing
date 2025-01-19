import React from 'react';
import { useLocation } from 'react-router-dom';
import './EcerciseDescription.css';

function EcerciseDescription() {
  const location = useLocation();
  const { image, heading, steps } = location.state || {};

  // console.log('Steps:', steps); 

  return (
    <div className='exercise-description-container'>
      {image && <img src={image} alt={heading} />}
    <div className='exercise-steps'>
      <h2>Steps:</h2>
      {steps && steps.length > 0 && (
        <ol className='exercise-steps'>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
    </div>
    </div>
  );
}

export default EcerciseDescription