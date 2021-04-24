const express = require('express');
const router = express.Router();
const proposalControl = require('../controllers/proposalController');
const jwtHelper = require('../middleware/jwtHelper');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, 'assets/uploads/files');
    },
    filename: function(req,file,cb) {
        cb(null,Date.now() + file.originalname);
    }
});
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats' || file.mimetype === 'application/pdf'){
        cb(null,true);
    }else{
        cb(new Error(),false);
    }
}
const upload = multer({storage:storage, limits:{
    fileSize: 1024 * 1024 * 10
},fileFilter:fileFilter});


router.get('/getFreelancerProposals',jwtHelper.verifyJwtToken,proposalControl.getFreelancerProposoal);
router.get('/getJobProposals/:jobId',jwtHelper.verifyJwtToken,proposalControl.getJobProposals);
router.post('/add/:jobId',upload.single('imgPath'),jwtHelper.verifyJwtToken, proposalControl.addProposal);
// router.post('/add/:jobId',jwtHelper.verifyJwtToken, proposalControl.addProposal);

module.exports = router;