const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const PatientsData = require('./model')

mongoose.connect("mongodb://hammad:123456@ds141514.mlab.com:41514/patientapp-server" ,{
    useMongoClient : true
})

var db = mongoose.connection;

mongoose.Promise = global.Promise

app.use(bodyparser.json())

app.get('/', (req, res, next) => {
  console.log('/ path success')
    res.send('/ path success')
})

app.get('/details', (req, res, next) => {
    PatientsData.find({})
    .then((data)=>{
        res.send(data)
    })
    // 
    .catch((err) => {
        console.log(err)
    })
})

app.post('/addpatient', (req, res, next) => {
    var userData = req.body;
    PatientsData.create(userData)
    .then((response)=>{
        console.log(req.body)
        res.send('success ==>'+ response);
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports  = app