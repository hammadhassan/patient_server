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

app.get('/', function(req, res, next) {
  console.log('/ path success')
    res.send('/ pathe success')
})

app.get('/details', function(req, res, next) {
    PatientsData.find({})
    .then((data)=>{
        res.send(data)
    })
})

app.post('/addpatient', function(req, res, next) {
    PatientsData.create(req.body)
    .then((data)=>{
        console.log(req.body)
        res.send('success ==>'+ data);
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports  = app