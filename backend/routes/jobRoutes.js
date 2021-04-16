const express = require('express');
const router = express.Router();
const jobControl = require('../controllers/jobController');


router.get('/getAll',jobControl.getAll);
router.get('/:jobId', jobControl.getById);
router.post('/add-job', jobControl.addJob);

module.exports = router;