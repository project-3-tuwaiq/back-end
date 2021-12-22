const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nationalId: {type:String,required:true,unique:true},
  age: String,
  gender: String,
  phoneNumber: String,
  isDeleted: {type: Boolean, default: false},
  
});
module.exports.Patient = mongoose.model("Patient", patientSchema);
//module.exports = {Patient}
