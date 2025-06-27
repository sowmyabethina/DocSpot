const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('report'), async (req, res) => {
  const { patientId, patientName, email, doctorId, doctorName, date } = req.body;
  try {
    const appt = new Appointment({ patientId, patientName, email, doctorId, doctorName, date, reportFile: req.file?.filename });
    await appt.save();
    res.json({ message: 'Appointment booked with file' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving appointment', error: err.message });
  }
});

router.get('/doctor/:id', async (req, res) => {
  const appts = await Appointment.find({ doctorId: req.params.id });
  res.json(appts);
});

router.get('/patient/:id', async (req, res) => {
  const appts = await Appointment.find({ patientId: req.params.id });
  res.json(appts);
});

module.exports = router;
