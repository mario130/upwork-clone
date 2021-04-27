const express = require('express');
const router = express.Router();
const freelanceProfileControl = require('../controllers/freelanceProfileController');
const jwtHelper = require('../middleware/jwtHelper');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, 'assets/uploads/profilePhoto');
    },
    filename: function(req,file,cb) {
        cb(null,Date.now() + file.originalname);
    }
});
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(new Error(),false);
    }
}
const upload = multer({storage:storage, limits:{
    fileSize: 1024 * 1024 * 5
},fileFilter:fileFilter});

router.post('/create-profile',upload.single('profilePhoto'),jwtHelper.verifyJwtToken,freelanceProfileControl.addProfile);
router.get('/freelance-profile',jwtHelper.verifyJwtToken,freelanceProfileControl.getData);
router.put('/profile-update/:id',freelanceProfileControl.updateProfile);
router.post('/add-feedback/:id',freelanceProfileControl.addFeedback);

router.get('/get-all-notifications/:email',jwtHelper.verifyJwtToken,freelanceProfileControl.getAllNotifications);

module.exports = router;