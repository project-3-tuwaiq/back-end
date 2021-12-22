const express = require("express");

const patientRouter = express.Router();
const {
  createPatient,
  getPatient,
  deletepatient,
  searchPatient,
  addVisit,
  updatePatientByDate,
  updateDrByDate
} = require("../../routers/controllers/patientController");


patientRouter.get("/", getPatient);
patientRouter.post("/create-patient", createPatient);
patientRouter.put("/delete-patient/:id", deletepatient);
patientRouter.get("/searchPatient/:id", searchPatient)
patientRouter.get("/addVisit/:id", addVisit)
patientRouter.post("/addNursingDeptDetails", updatePatientByDate)
patientRouter.post("/addDrsDeptDetails", updateDrByDate)


module.exports = { patientRouter };