const express = require("express");

const patientRouter = express.Router();
const {
  createPatient,
  getPatient,
  deletepatient,
  searchPatient,
  addVisit,
  updatePatientByDate,
  updateDrByDate,
  getAllVisits,
  getAllVisitsDr,
  getVisitsDrById
} = require("../../routers/controllers/patientController");


patientRouter.get("/", getPatient);
patientRouter.post("/create-patient", createPatient);
patientRouter.put("/delete-patient/:id", deletepatient);
patientRouter.get("/searchPatient/:id", searchPatient)
patientRouter.get("/addVisit/:id", addVisit)
patientRouter.get("/Visits", getAllVisits)
patientRouter.get("/Visits/Dr", getAllVisitsDr)
patientRouter.get("/Visits/Dr/:id", getVisitsDrById)
patientRouter.put("/addNursingDeptDetails/:id", updatePatientByDate)
patientRouter.post("/addDrsDeptDetails", updateDrByDate)


module.exports = { patientRouter };