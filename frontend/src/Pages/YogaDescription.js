import React from 'react';
import { useLocation } from 'react-router-dom';
import './YogaDescription.css';

function YogaDescription() {
  const location = useLocation();
  const { image, heading, steps } = location.state || {};

  // console.log('Steps:', steps); 

  return (
    <div className='yoga-description-container'>
      {image && <img src={image} alt={heading} />}
    <div className='yoga-steps'>
      <h2>Steps:</h2>
      {steps && steps.length > 0 && (
        <ol className='yoga-steps'>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}
    </div>
    </div>
  );
}

export default YogaDescription;
