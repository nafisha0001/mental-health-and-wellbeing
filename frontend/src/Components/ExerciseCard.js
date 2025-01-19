import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';

function ExerciseCard(props) {
  return (
    <div className='excercise-name'>
      <img src={props.image} alt="Exercise Pose" />
      <div className='Exercise-content'>
        <h1>{props.heading}</h1>
        <p>Sanskrit Meaning: {props.Meaning}</p>
        <p>Yoga Level: {props.Level}</p>
        <p>Pose Type: {props.Type}</p>
        <p>Benefits: {props.Benefits}</p>
        <button id='exercise-start-button'>
          <Link id='exercise-start' to='/exercise-description' state={{image: props.image,heading:props.heading, steps: props.steps}}>
            Let's Start
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ExerciseCard