const express = require('express');//connection à express
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup',  userCtrl.signup);
router.post('/login',  userCtrl.login);

module.exports = router;