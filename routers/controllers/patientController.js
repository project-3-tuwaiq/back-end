require("dotenv").config();
const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  Patient = mongoose.model("Patient");
  
exports.register = function (req, res) {
  const newPatient = new Patient(req.body);
  newPatient.hash_password = bcrypt.hashSync(req.body.password, 10);
  newPatient.save(function (err, patient) {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      patient.hash_password = undefined;
      return res.json(patient);
    }
  });
};
