const express = require('express')
const multer = require('multer')
const app = express()
const formData = multer({dest: 'temp'}) //temp storage of csv files

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/csv', formData.single('csv') ,function (req, res) {
  console.log(req.file.size)
  res.send('Ack')
})

app.post('/dimension', formData.single('dim') ,function (req, res) {
  console.log(req.file.size)
  res.send('Ack Dimension')
})

app.listen(3001)