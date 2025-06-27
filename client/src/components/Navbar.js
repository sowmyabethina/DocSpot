// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <span className="navbar-brand">DocSpot</span>
      <div className="navbar-nav">
        <Link to="/doctor-list" className="nav-link">Doctors</Link>
        <Link to="/patient-dashboard" className="nav-link">My Appointments</Link>
        <Link to="/doctor-dashboard" className="nav-link">Doctor Dashboard</Link>
        <Link to="/" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
}
