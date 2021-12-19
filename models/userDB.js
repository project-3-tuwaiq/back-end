const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nationalId: String,
  firstName: String,
  latName: String,
  age: String,
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

const user = mongoose.model("user", userSchema);
module.exports = { user };
