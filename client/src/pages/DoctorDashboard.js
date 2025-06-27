import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/appointments/doctor/${user._id}`)
        .then(res => setAppointments(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome, Dr. {user?.name}</h2>
      <h4>Your Scheduled Appointments</h4>
      {appointments.length === 0 ? (
        <div className="alert alert-info mt-3">No appointments found</div>
      ) : (
        <table className="table table-bordered mt-3 shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Email</th>
              <th>Status</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i}>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.email}</td>
                <td>
                  <span className={`badge bg-${a.status === 'scheduled' ? 'success' : 'warning'}`}>
                    {a.status}
                  </span>
                </td>
                <td>
                  {a.reportFile ? (
                    <a
                      href={`http://localhost:5000/uploads/${a.reportFile}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </a>
                  ) : (
                    'No file'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorDashboard;
