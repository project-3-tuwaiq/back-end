const express = require("express");

const patientRouter = express.Router();
const {
  createPatient, getPatient,deletepatient,
} = require("../../routers/controllers/patientController");
patientRouter.get("/", getPatient);
patientRouter.post("/create-patient", createPatient);

patientRouter.put("/delete-patient/:id",deletepatient);
module.exports = {patientRouter };