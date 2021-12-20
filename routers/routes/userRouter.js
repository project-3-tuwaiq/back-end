const express = require('express')
const userRouter = express.Router();
// const {userAuth} = require('../../auth/userAuth')
const {saveUser, getAllUsers, getDataForLogIn, changeUserInfo} = require('../controllers/userController')


userRouter.post("/", getDataForLogIn)
userRouter.get("/", getAllUsers)
userRouter.post("/save", saveUser)
userRouter.put("/:id", changeUserInfo)


module.exports= {userRouter};