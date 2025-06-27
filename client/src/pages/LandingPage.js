// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center px-3">
      <h1 className="mb-3 display-4 text-primary fw-bold">DocSpot</h1>
      <p className="lead text-secondary mb-4">
        Seamless Appointment Booking for Health. Book a doctor without the hassle!
      </p>

      <div className="d-flex gap-3">
        <Link to="/register" className="btn btn-success btn-lg px-4">Get Started</Link>
        <Link to="/login" className="btn btn-outline-primary btn-lg px-4">Login</Link>
      </div>

      <div className="mt-5 text-muted small">
        <p>&copy; 2025 DocSpot. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
