const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isDeleted: { type: Boolean, required: true ,default:false},
  createdId: { type: String, required:false },//admin
  createdDate: { type: String, required: true  },
});

module.exports.Role = mongoose.model("Role", roleSchema);