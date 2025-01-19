import React from 'react';
import './Card.css'; 
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageUrl ,target}) => {
    return (
        <div className="card">
            <div>
                <h3 className="card-title"><Link id="linkId" to={target}>{title}</Link></h3>
                <p className="card-description">{description}</p>
            </div>
            <img src={imageUrl} alt={title} className="card-image" />
        </div>
    );
};

export default Card;
