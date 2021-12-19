const express = require("express");

const roleRouter = express.Router();
const {
  createRole, getRoles,deleteRole,
} = require("../../routers/controllers/roleController");
roleRouter.get("/", getRoles);
roleRouter.post("/create-role", createRole);

roleRouter.put("/delete-role/:id",deleteRole);
module.exports = {roleRouter };