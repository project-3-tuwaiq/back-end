const mongoose = require("mongoose");
const {User} = require('../../models/userDB')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
/* -------------------------------------------------------------------------- */
/*                                save the user                               */
/* -------------------------------------------------------------------------- */
async function saveUser(req, res) {
    console.log("Inside create user")
    const newUser = new User({
      nationalId: req.body.nationalId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 10),
    });
    try{
        await newUser.save();
        res.status(201).send(newUser);
    }catch(err)
    {
        console.log(err.message)
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                get all user                                */
  /* -------------------------------------------------------------------------- */
  const getAllUsers = (req, res) =>{
      const token = req.user;
      User.find({}, (err, user) => res.json({user: user, token: token }))
  }
  /* -------------------------------------------------------------------------- */
  /*                             get data for login                             */
  /* -------------------------------------------------------------------------- */
  const getDataForLogIn = (req, res) => {
      console.log(req.body);
      
    User.findOne({ nationalId: req.body.nationalId }, async (err, result) => {
      if (result === null) {
        return res
          .status(400)
          .send("NationalId or Password Wrong!");
      }
      try {
        if (await bcrypt.compare(req.body.password, result.password)) {
          const payload = {
            nationalId: result.nationalId,
            firstName: result.firstName,
            lastName: result.lastName,
            age: result.age,
            role: result.role,
          };
          const token = jwt.sign(payload, process.env.SECRET_KEY);
          res.json({ message: "user logged in", token: token });
        } else {
          res.json({ message: "data is incorrect" });
        }
      } catch (error) {
        res.status(500).send();
      }
    });
  };





  // function to update user
  const changeUserInfo = (req, res) => {
    User.findOneAndUpdate(
      {_id: req.params.id},
      { firstName: req.body.firstName ,
      lastName: req.body.lastName,
      lastName: req.body.lastName,
      age: req.body.age,
      role: req.body.role,
      password: req.body.password
      },
      (err, result) => res.json(result)
    );
  };

  function getUserDataFromToken (req, res){
    const token = req.user
    res.json({token: token})
  }
module.exports = {saveUser, getAllUsers, getDataForLogIn, changeUserInfo, getUserDataFromToken}