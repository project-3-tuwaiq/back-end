const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nationalId: {type: String, unique: true},
firstName: {type: String},
lastName: {type: String},
age: {type: String},
role: {type: mongoose.Schema.Types.ObjectId, ref: 'Role'},
password: {type: String, required: true}

})

const user = mongoose.model("user", userSchema)
module.exports = {user}