const express = require('express');
const router = express.Router();
const jobControl = require('../controllers/jobController');


router.get('/getAll',jobControl.getAll);
router.get('/:jobId', jobControl.getById);

module.exports = router;