const express = require('express');
const router = express.Router();
const contractControl = require('../controllers/contractController');
const jwtHelper = require('../middleware/jwtHelper');


router.post('/hired/:jobId',jwtHelper.verifyJwtToken,contractControl.hireFreelancer);


module.exports = router;