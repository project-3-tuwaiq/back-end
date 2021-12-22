 const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const {Patient} = require("../../models/patientDB");



const createPatient = (req, res) => {
  console.log("Inside create patient method")
  // console.log(Patient);
  const { nationalId } = req.body;
  console.log(req.body);
  if (!nationalId) {
    return res.status(422).json({ error: "not found" });
  }
  Patient.findOne({
    nationalId: nationalId,
  })
    .then((savedPatient) => {
      if (savedPatient) {
        return res
          .status(404)
          .json({ error: "patient already exists with that nationalId" });
      }
      const patient = new Patient(req.body);
      // console.log(patient)
      // const patient = new Patient({
      //   firstName:req.body.firstName,
      //   lastName:req.body.lastName,
      //   nationalId,
      //   age,
      //   gender,
      //   phoneNumber,
      //   visit,
      // });


      patient
        .save()
        .then((patient) => {
          res.json({ status: "success", message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};



const getPatient = async (req, res) => {
  await Patient.find({ isDeleted: false })
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      console.log(err);
    });
};



const deletepatient = (req, res) => {
  const Id = req.params.id;

  Patient.findOneAndUpdate({ _id: Id }, { isDeleted: true })
    .then((result) => {
      res.status(202).json({ message: "patient have been updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error can not updated");
    });
};


/* ----------------------------- search patient ----------------------------- */
const searchPatient= (req,res)=>{
  Patient.findOne({nationalId:req.params.id}, (err, result) =>{
    if(err){
      console.log(err)
    }
    else{
    if(!result){
       res
        .status(400)
        .send("not found patient");
        return
    }else {
      //constructor method to create Visit Object and then push the new visit inside visit array
      const newVisit  = new AddVisit(new Date().toString(), false, false);
      result.visit.push(newVisit);
      
        Patient.findByIdAndUpdate(
          result._id,
          {
            visit:result.visit
        }).then(result => {
          res.send("updated")
          return
        }).catch(err => {
          console.log(err)
        })
    }
  }
    res.json({ result: result })
  }
  )
}

function AddVisit(date, checkedByNurse, checkedByDr){
  this.date = date;
  this.checkedByNurse = checkedByNurse;
  this.checkedByDr = checkedByDr;
}

/* ------------------------- update patient by nurce ------------------------ */

const updatePatientByNurce = (req, res) =>{
  Patient.findByIdAndUpdate(
    
  )
}

module.exports = {
  createPatient,
  getPatient,
  deletepatient,
  searchPatient
};
