import React, { useState } from 'react';
import './login.css';
import Logo from '../../assets/logo.png'; // Using your imported logo

// Re-defining the logo graphic component used inside the card
const LogoGraphic = () => (
  <div className="logo-container">
    <img src={Logo} alt="My Budget Logo" className="card-logo-img" />
    <h1 className="logo-text">
      <span className="blue-text">MY</span> <span className="gold-text">BUDGET</span>
    </h1>
  </div>
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    // Add your back navigation logic here
    console.log("Back clicked");
  };

  return (
    <div className="login-root">
      {/* LEFT PANE: Large Image/Branding */}
      <div className="left-pane">
        <img
          src={Logo}
          alt="budget illustration"
          className="left-image"
        />
        <div className="left-overlay">
          <h2>Master Your Finances</h2>
          <p>The gold standard of personal budgeting.</p>
        </div>
      </div>

      {/* RIGHT PANE: Login Form */}
      <div className="login-screen">
        {/* Top-Left Back Button (Relative to the right pane) */}
        <button className="back-btn" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        {/* Main Centered Card */}
        <div className="login-card">
          <LogoGraphic />

          {/* Form Fields */}
          <div className="form-fields">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username" 
              className="login-input"
            />
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password" 
              className="login-input"
            />
          </div>

          <a href="#" className="forgot-link">Forgot password?</a>

          <button className="login-btn">Log In</button>

          <div className="signup-text">
            Don't have account yet? <a href="#" className="signup-link">Create an Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;