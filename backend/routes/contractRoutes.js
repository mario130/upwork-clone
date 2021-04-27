const express = require('express');
const router = express.Router();
const contractControl = require('../controllers/contractController');
const jwtHelper = require('../middleware/jwtHelper');


router.post('/hired/:jobId',jwtHelper.verifyJwtToken,contractControl.hireFreelancer);
router.post('/end/:jobId',jwtHelper.verifyJwtToken,contractControl.endContract);
router.get('/getActiveContract',jwtHelper.verifyJwtToken,contractControl.activeContracts);



module.exports = router;