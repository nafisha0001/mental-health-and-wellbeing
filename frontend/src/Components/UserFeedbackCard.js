import React from 'react';
import './UserFeedbackCard.css';

function UserFeedbackCard({ name, review, rating, imageUrl }) {
    // Create an array of stars based on the rating
    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star">&#9733;</span> 
    ));

    return (
        <div className="feedback-card">
            <div className="avatar-container">
                <img src={imageUrl} alt={name} className="avatar"/>
            </div>
            <div className="content-container">
                <h3>{name}</h3>
                <div className="rating">{stars}</div>
                <p>{review}</p>
            </div>
        </div>
    );
}

export default UserFeedbackCard;
