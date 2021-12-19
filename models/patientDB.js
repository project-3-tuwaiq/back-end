const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nationalId: {type:String,required:true,unique:true},
  age: String,
  gender: String,
  phoneNumber: String,
  // Password: { type: String, required: true },
  visit: [
    {
      date: String,
      nurseId: Object.Id,
      doctorId: ObjectId,
      temperature: Number,
      bp: String,
      weight: String,
      heartRate: String,
      nurseNotes: String,
      drTreatment: String,
      diagnose: String,
      drNotes: String,
    },
  ],
});
const Patient = mongoose.model("Patient", patientSchema);
module.exports = {Patient}
