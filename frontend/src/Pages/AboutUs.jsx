import React, { useState } from 'react';
import './AboutUs.css';
import AboutUsHead from '../Images/AboutUsHead.png';
import teampic from '../Images/teampic.png';
import axios from 'axios'; // Import axios for HTTP requests

function AboutUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', query: '' }); // Clear form fields
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('Failed to submit query');
    }
  };

  return (
    <div className="about-us-page">
      <section className="about-content">
        <img src={AboutUsHead} alt="About Us" className="headImg" />
        <div className="section">
          <h2>What We Do</h2>
          <p>
            Our goal is to provide you with the most accurate, up-to-date, and evidence-based information about mental health.
          </p>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={teampic} alt="Dr. Sandra White" />
            <h3>Dr. Sandra White</h3>
            <p>Lead Therapist</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        <div className="contact-form-div">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            <textarea name="query" placeholder="Enter your Query" value={formData.query} onChange={handleChange} required />
            <button type="submit">Send Query</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
