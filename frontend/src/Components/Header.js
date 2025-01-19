import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'login' or 'signup'
  const [user, setUser] = useState(null); // Holds logged-in user data
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };

  const closeModal = () => {
    setShowModal(false);
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalType === 'signup') {
        const response = await axios.post('http://localhost:5000/auth/signup', formData);
        setUser(response.data.user);
        closeModal();
        alert(response.data.message);
      } else {
        const response = await axios.post('http://localhost:5000/auth/login', formData);
        setUser(response.data.user);
        closeModal();
        alert(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="circle"></div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workshops">Workshops</Link></li>
          <li><Link to="/professional-help">Professional Help</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <div className="user-profile">{user.name.charAt(0).toUpperCase()}</div>
        ) : (
          <>
            <button className="login-btn" onClick={() => openModal('login')}>Login</button>
            <button className="signup-btn" onClick={() => openModal('signup')}>SignUp</button>
          </>
        )}
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>{modalType === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              {modalType === 'signup' && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="modal-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="modal-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="modal-input"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="modal-login-btn">
                {modalType === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
