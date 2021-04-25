const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');
const jwtHelper = require('../middleware/jwtHelper');

router.post('/send',jwtHelper.verifyJwtToken , mailController.sendMail);

module.exports = router;