const express = require("express");

const patientRouter = express.Router();
const {
  createPatient,
  getPatient,
  deletepatient,
  searchPatient,
} = require("../../routers/controllers/patientController");


patientRouter.get("/", getPatient);
patientRouter.post("/create-patient", createPatient);
patientRouter.put("/delete-patient/:id", deletepatient);
patientRouter.get("/searchPatient/:id", searchPatient)

module.exports = { patientRouter };
