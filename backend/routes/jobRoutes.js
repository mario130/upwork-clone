const express = require('express');
const router = express.Router();
const jobControl = require('../controllers/jobController');
const jwtHelper = require('../middleware/jwtHelper');


router.get('/getAll',jobControl.getAll);
router.get('/:jobId', jobControl.getById);
router.post('/add-job',jwtHelper.verifyJwtToken , jobControl.addJob);

module.exports = router;