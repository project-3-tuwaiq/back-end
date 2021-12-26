const express = require('express')
const userRouter = express.Router();
const {userAuth} = require('../../auth/authUser')
const {saveUser, getAllUsers, getDataForLogIn, changeUserInfo, getUserDataFromToken} = require('../controllers/userController')


userRouter.post("/", getDataForLogIn)
userRouter.get("/", getAllUsers)
userRouter.post("/save", saveUser)
userRouter.put("/:id", changeUserInfo)
userRouter.get("/userAuth",userAuth, getUserDataFromToken)

module.exports= {userRouter, userAuth};