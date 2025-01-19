import React from 'react';
import { Link } from 'react-router-dom';

import './YogaCard.css';

function YogaCard(props) {
  return (
    <div className='yoga-name'>
      <img src={props.image} alt="Yoga Pose" />
      <div className='yoga-content'>
        <h1>{props.heading}</h1>
        <p>Sanskrit Meaning: {props.Meaning}</p>
        <p>Yoga Level: {props.Level}</p>
        <p>Pose Type: {props.Type}</p>
        <p>Benefits: {props.Benefits}</p>
        <button id='yoga-start-button'>
          <Link id='yoga-start' to='/yoga-description' state={{image: props.image,heading:props.heading, steps: props.steps}}>
            Let's Start
          </Link>
        </button>
      </div>
    </div>
  );
}

export default YogaCard;
