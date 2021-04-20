const express = require('express');
const router = express.Router();
const proposalControl = require('../controllers/proposalController');


router.get('/getAll',proposalControl.getAll);
router.post('/add', proposalControl.addProposal);

module.exports = router;