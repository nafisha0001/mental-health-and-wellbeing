import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './BookSessionDialog.css';

function BookSessionDialog({ open, handleClose, name, availableSlots }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false); // State for second dialog
  const [email, setEmail] = useState(''); // State for email input
  const [emailError, setEmailError] = useState(false); // State for invalid email

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false); // Reset error on input change
  };

  // Function to handle the opening of the second dialog
  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  // Function to handle closing both dialogs
  const handleConfirmClose = () => {
    setConfirmOpen(false);
    handleClose(); // Close the first dialog when done with the second
  };

  // Function to validate the email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true); // Set error if email is invalid
      return false;
    }
    return true;
  };

  // Handle form submission and email validation
  const handleFormSubmit = () => {
    if (validateEmail()) {
      console.log("Email is valid, proceed with booking");
      handleConfirmClose(); // Close the dialogs if email is valid
    }
  };

  return (
    <>
      <Dialog id='doctor-session-slot' open={open} onClose={handleClose}>
        <DialogTitle>Book a Session</DialogTitle>
        <DialogContent>
          <p>Book a session with {name}.</p>
          <FormControl component="fieldset">
            <RadioGroup
              value={selectedSlot}
              onChange={handleSlotChange}
            >
              {availableSlots.map((slot, index) => (
                <FormControlLabel
                  key={index}
                  value={slot}
                  control={<Radio />}
                  label={slot}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions className='session-dialog-buttons'>
          <Button className='session-dialog-cancel' onClick={handleClose}>Cancel</Button>
          <Button
            className='session-dialog-confirm'
            onClick={handleConfirmOpen} // Open the second dialog
            disabled={!selectedSlot}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Second Dialog Box */}
      <Dialog open={confirmOpen} onClose={handleConfirmClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            className={`email-input ${emailError ? 'invalid' : ''}`} 
            placeholder="Enter your email"
            required
          />
          {emailError && <p className="error-message">Please enter a valid email address.</p>}
        </DialogContent>
        <DialogActions>
          <Button className='session-dialog-cancel' onClick={handleConfirmClose}>Cancel</Button>
          <Button className='session-dialog-confirm' onClick={handleFormSubmit}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BookSessionDialog;
