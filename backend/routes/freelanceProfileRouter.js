const express = require('express');
const router = express.Router();
const freelanceProfileControl = require('../controllers/freelanceProfileController');
const jwtHelper = require('../middleware/jwtHelper');

router.post('/create-profile',jwtHelper.verifyJwtToken,freelanceProfileControl.addProfile);
router.get('/freelance-profile',jwtHelper.verifyJwtToken,freelanceProfileControl.getData);

module.exports = router;