const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
nationalId: {type: String, unique: true},
firstName: {type: String},
lastName: {type: String},
age: {type: String},
role: {type: String, required: true},
password: {type: String, required: true}

})


module.exports.User = mongoose.model("User", userSchema);
// module.exports = { user };