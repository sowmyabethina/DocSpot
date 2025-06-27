const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  patientName: String,
  email: String,
  doctorId: String,
  doctorName: String,
  date: String,
  status: { type: String, default: 'pending' },
  reportFile: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
