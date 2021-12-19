const express = require('express')
const userRouter = express.Router();
const {userAuth} = require('../../auth/userAuth')
const {saveUser, getAllUsers, getDataForLogIn} = require('../controllers/userController')
userRouter.post("/", getDataForLogIn)
userRouter.get("/", userAuth, getAllUsers)
userRouter.post("/save", saveUser)


module.exports= {userRouter};