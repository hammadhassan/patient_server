var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name: String,
    problem: String,
    gender: String,
    date: String,
    doctor: String,
    day: String
})

var PatientsData = mongoose.model("Patient", patientSchema)
module.exports = PatientsData;