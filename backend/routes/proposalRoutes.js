const express = require('express');
const router = express.Router();
const proposalControl = require('../controllers/proposalController');
const jwtHelper = require('../middleware/jwtHelper');


router.get('/getAll',proposalControl.getAll);
router.post('/add/:jobId',jwtHelper.verifyJwtToken, proposalControl.addProposal);

module.exports = router;