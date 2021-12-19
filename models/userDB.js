const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
nationalId: {type: String, unique: true},
firstName: {type: String},
lastName: {type: String},
age: {type: String},
role: {type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
password: {type: String, required: true}

})


module.exports.User = mongoose.model("User", userSchema);
// module.exports = { user };