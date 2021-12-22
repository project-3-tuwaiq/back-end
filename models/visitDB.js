const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
      patientId:{type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
      date: String,
      nurseId:String,
      doctorId: String,
      temperature: Number,
      bp: String,
      weight: String,
      heartRate: String,
      nurseNotes: String,
      drTreatment: String,
      diagnose: String,
      drNotes: String,
      checkedByNurse: Boolean,
      checkedByDr: Boolean,
})

module.exports.Visit = mongoose.model("Visit", visitSchema);
