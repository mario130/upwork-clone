const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()

mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Could\'nt connect to mongodb!'));

// HEADERS FOR HEROKU
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})


// ADD ROUTES

const PORT = process.env.PORT || 4001
app.listen(PORT, ()=>console.log(`Now listening on port ${PORT}`))