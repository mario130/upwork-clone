const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter')
const freelanceProfileRouter = require('./routes/freelanceProfileRouter')
const jobRoutes = require('./routes/jobRoutes')
const proposalRoutes = require('./routes/proposalRoutes')
const contractRoutes = require('./routes/contractRoutes')
const io = require('socket.io');

const passport = require('passport')
const cors=require('cors');
require('dotenv').config();
require('./middleware/passportConfig')
const errorHandler = require('./middleware/errorHandler');
const app = express()
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(()=>console.log('Connected to mongodb!'))
.catch(()=> console.log('Couldn\'t connect to mongodb!'));

// HEADERS FOR HEROKU
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
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
app.use('/proposal',proposalRoutes)
app.use('/contract',contractRoutes)
// app.use('/mail',mailRoutes)

app.use('/',errorHandler);

// ERROR HANDLER
// app.use((err,req,resp,next) =>{
//   if(err.name == 'ValidationError'){
//     var valErrors =[];
//     Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
//     resp.status(422).send(valErrors);
//   }
//   else if(err.path == "_id"){
//     resp.status(422).send('User ID is incorrect!!')
//   }
//   else{
//     resp.status(400).send(err);
//   }
// })

const PORT = process.env.PORT || 4001
const listen = app.listen(PORT, ()=>console.log(`Now listening on port ${PORT}`))
// var socket =
//  io.listen(listen);

// require('./routes/routes')(app,socket);