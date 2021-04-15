const express = require('express');
const router = express.Router();
const jobControl = require('../controllers/jobController');


router.get('/getAll',jobControl.getAll);

module.exports = router;