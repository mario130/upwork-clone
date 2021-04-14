const express = require('express');
const router = express.Router();
const userControl = require('../controllers/userController');


router.post('/register', userControl.register);
router.get('/getAll',userControl.getAll);
router.get('/getById/:id',userControl.getById);
router.put('/update/:id',userControl.update);
router.delete('/delete/:id',userControl.delete);
router.post('/auth',userControl.authenticate);
router.get('/checkMail',userControl.authMail);
router.get('/checkEmail/:email',userControl.getByEmail);


module.exports = router;