const express = require('express');
const router = express.Router();
const proposalControl = require('../controllers/proposalController');
const jwtHelper = require('../middleware/jwtHelper');


router.get('/getFreelancerProposals',jwtHelper.verifyJwtToken,proposalControl.getFreelancerProposoal);
router.get('/getJobProposals/:jobId',jwtHelper.verifyJwtToken,proposalControl.getJobProposals);
router.post('/add/:jobId',jwtHelper.verifyJwtToken, proposalControl.addProposal);

module.exports = router;