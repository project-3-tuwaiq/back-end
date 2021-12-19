const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nationalId: {type:String,required:true,unique:true},
  age: String,
  gender: String,
  phoneNumber: String,
  
  visit: [
    {
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
    },
  ],
});
module.exports.Patient = mongoose.model("Patient", patientSchema);
//module.exports = {Patient}
