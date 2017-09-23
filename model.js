var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    problem: String,
    gender: String,
    doc: String,
    day: String
})

var PatientsData = mongoose.model("Patient", userSchema)
module.exports = PatientsData;