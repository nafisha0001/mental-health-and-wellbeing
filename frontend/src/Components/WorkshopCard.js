import React, { useState } from 'react';
import './WorkshopCard.css';

function WorkshopCard({ title, price, date, imageURL, description }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Handle email input and validate it
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  // Handle enrollment button click inside the dialog
  // const handleDialogEnrollClick = () => {
  //   if (isEmailValid && email) {
  //     setIsDialogOpen(false); 
  //     setIsSuccessDialogOpen(true); 
  //   } else {
  //     alert('Please enter a valid email.');
  //   }
  // };
  const handleDialogEnrollClick = async () => {
    if (!isEmailValid || !email) {
      alert('Please enter a valid email.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, workshopTitle: title, workshopDate: date }),
      });
  
      const result = await response.json();
      
      if (response.ok) {
        setIsDialogOpen(false);
        setIsSuccessDialogOpen(true);
      } else {
        alert(result.message || 'Failed to enroll. Please try again.');
      }
    } catch (error) {
      alert('Error enrolling. Please check your network and try again.');
    }
  };
  

  const handleWorkshopDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleWorkshopDialogClose = () => {
    setIsDialogOpen(false);
    setIsSuccessDialogOpen(false);
    setEmail(''); // Reset email on dialog close
  };

  // Handle "View Details" button click
  const handleDetailsDialogOpen = () => {
    setIsDetailsDialogOpen(true);
  };

  // Close the "View Details" dialog
  const handleDetailsDialogClose = () => {
    setIsDetailsDialogOpen(false);
  };

  return (
    <>
      <div className="workshop-card">
        <div className="workshop-card-image-container">
          <img src={imageURL} alt="Workshop" />
        </div>
        <div className="workshop-card-content">
          <h2>{title}</h2>
          <p className='workshop-details'>{price}</p>
          <p className='workshop-details'>{date}</p>
          <div className="workshop-card-buttons">
            <button className="workshop-enroll-button" onClick={handleWorkshopDialogOpen}>Enroll</button>
            <button className="workshop-details-button" onClick={handleDetailsDialogOpen}>View Details</button>
          </div>
        </div>
      </div>

      {/* Enrollment Dialog */}
      {isDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>{title}</h3> 
            <p>Date: {date}</p> 

            <input
              type="email"
              placeholder="Enter your email"
              className={`email-input ${!isEmailValid && email ? 'invalid-input' : ''}`}  // Add invalid class when email is invalid
              value={email}
              onChange={handleEmailChange}
              required
            />
            {!isEmailValid && email && <p className="error-message">Invalid email address</p>}  {/* Error message for invalid email */}
            
            <div className="workshop-dialog-buttons">
              <button className="dialog-cancel-button" onClick={handleWorkshopDialogClose}>Cancel</button>
              <button className="dialog-enroll-button" onClick={handleDialogEnrollClick} disabled={!email || !isEmailValid}>Enroll</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {isSuccessDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>Successfully Enrolled</h3>
            <button className="dialog-ok-button" onClick={handleWorkshopDialogClose}>OK</button>
          </div>
        </div>
      )}

      {/* Details Dialog */}
      {isDetailsDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content details-dialog">
            <button className="close-dialog-button" onClick={handleDetailsDialogClose}>✖</button>
            <h3>Workshop Details</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkshopCard;
