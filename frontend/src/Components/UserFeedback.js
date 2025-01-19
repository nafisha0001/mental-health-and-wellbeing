import React, { useState } from 'react';
import UserFeedbackCard from './UserFeedbackCard';
import './UserFeedback.css'; // CSS for styling the component
import user from '../Images/user.png'

const userFeedbacks = [
    { name: 'Gabriele H.', review: 'WellMind transformed my approach to mental health.', rating: 5, imageUrl: user },
    { name: 'Sunio', review: 'Incredible app for mental wellness and support.', rating: 5, imageUrl: user },
    { name: 'jian', review: 'A must-have app for mental health awareness.', rating: 4, imageUrl: user },
    { name: 'Tom', review: 'WellMind transformed my approach to mental health.', rating: 5, imageUrl: user },
    { name: 'Jerry', review: 'Incredible app for mental wellness and support.', rating: 5, imageUrl: user },
    { name: 'Nobita', review: 'A must-have app for mental health awareness.', rating: 4, imageUrl: user },
    { name: 'Shinchan', review: 'WellMind transformed my approach to mental health.', rating: 5, imageUrl: user },
    { name: 'Hathodi', review: 'Incredible app for mental wellness and support.', rating: 5, imageUrl: user },
    { name: 'Shizuka', review: 'A must-have app for mental health awareness.', rating: 4, imageUrl: user }
];

function UserFeedback() {
    const [index, setIndex] = useState(0);

    const nextFeedback = () => {
        setIndex((prevIndex) => (prevIndex + 1) % userFeedbacks.length); // Loop back to the first card
    };

    const previousFeedback = () => {
        setIndex((prevIndex) => (prevIndex - 1 + userFeedbacks.length) % userFeedbacks.length); // Loop back to the last card
    };

    return (
        <>
            <div className="feedback-container">
                <div className="feedback-cards-container">
                    <UserFeedbackCard {...userFeedbacks[index % userFeedbacks.length]} />
                    <UserFeedbackCard {...userFeedbacks[(index + 1) % userFeedbacks.length]} />
                    <UserFeedbackCard {...userFeedbacks[(index + 2) % userFeedbacks.length]} />
                </div>
                <div>
                    <button className='feedback-movement' onClick={previousFeedback}>&lt;</button>
                    <button className='feedback-movement' onClick={nextFeedback}>&gt;</button>
                </div>
            </div>
        </>
    );
}

export default UserFeedback;
