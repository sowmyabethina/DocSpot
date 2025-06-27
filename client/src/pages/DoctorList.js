import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(res => {
        console.log("Doctors fetched:", res.data); // ✅ Debug log
        setDoctors(res.data);
      })
      .catch(err => {
        console.error("Error fetching doctors:", err); // ✅ Log error
      });
  }, []);

  const handleBook = (doctor) => {
    navigate('/book', { state: { doctor } });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Doctors</h2>
      {doctors.length === 0 ? (
        <div className="alert alert-info">No approved doctors available</div>
      ) : (
        <div className="row">
          {doctors.map((doc, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Dr. {doc.name}</h5>
                  <p className="card-text"><strong>Email:</strong> {doc.email}</p>
                  <button className="btn btn-success w-100" onClick={() => handleBook(doc)}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;
