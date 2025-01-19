import React, { useState } from 'react';
import './DoctorCard.css';
import BookSessionDialog from './BookSessionDialog';

function DoctorCard({ name,specialization, fees, rating, image }) {

    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
    ));

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const availableSlots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

    return (
        <div className="doctor-card">
            <div className="doctor-card-image-container">
                <img src={image} alt="doctor-img" />
            </div>
            <div className="doctor-card-content">
                <h2>{name}</h2>
                <p className='doctor-specialization'>{specialization}</p>
                <p className='doctor-fee'>{fees}</p>
                <div className="doctor-rating-buttons">
                    <div className="doctor-rating">{stars}</div>
                    <button className="doctor-session" onClick={handleOpen}>Book Session</button>
                    <BookSessionDialog
                        open={open}
                        handleClose={handleClose}
                        name={name}
                        availableSlots={availableSlots}
                    />
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;
