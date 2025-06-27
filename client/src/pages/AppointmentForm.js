import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const { state } = useLocation();
  const doctor = state?.doctor;
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doctor || !user) return alert('Doctor or user info missing');

    const formData = new FormData();
    formData.append('patientId', user._id);
    formData.append('patientName', user.name);
    formData.append('email', user.email);
    formData.append('doctorId', doctor._id);
    formData.append('doctorName', doctor.name);
    formData.append('date', date);
    if (file) formData.append('report', file);

    try {
      await axios.post('http://localhost:5000/api/appointments/upload', formData);
      setMessage('Appointment booked successfully!');
      setTimeout(() => navigate('/patient-dashboard'), 1500);
    } catch (err) {
      console.error(err);
      setMessage('Booking failed. Try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Booking Appointment with Dr. {doctor?.name}</h3>
      {message && <div className="alert alert-info mt-3">{message}</div>}

      <form onSubmit={handleSubmit} className="mt-4 shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Select Date:</label>
          <input
            type="date"
            className="form-control"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="report" className="form-label">Upload Report (Optional):</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
