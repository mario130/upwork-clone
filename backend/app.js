const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter')
const freelanceProfileRouter = require('./routes/freelanceProfileRouter')
const jobRoutes = require('./routes/jobRoutes')
const passport = require('passport')
require('dotenv').config();
require('./middleware/passportConfig')

const app = express()
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Couldn\'t connect to mongodb!'));

// HEADERS FOR HEROKU
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next()
})

// MIDDLEWARE
app.use(passport.initialize());
app.use(bodyParser.json());

// ADD ROUTES
app.use('/users',userRouter)
app.use('/profile',freelanceProfileRouter)
app.use('/jobs',jobRoutes)

// ERROR HANDLER
app.use((err,req,resp,next) =>{
  if(err.name == 'ValidationError'){
    var valErrors =[];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    resp.status(422).send(valErrors);
  }
  else if(err.path == "_id"){
    resp.status(422).send('User ID is incorrect!!')
  }
  else{
    resp.status(400).send(err);
  }
})

const PORT = process.env.PORT || 4001
app.listen(PORT, ()=>console.log(`Now listening on port ${PORT}`))