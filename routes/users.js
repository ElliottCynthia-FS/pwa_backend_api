const express = require('express');
const router = express.Router();
// const userValidator = require('../middlewares/users');
const userValidator = require('@cynelliott-fs/pwa-validations');
const userCtlr = require('../controllers/users');

router.post("/signup", 
    userValidator.validateEmail, 
    userValidator.validatePhone, 
    userValidator.validateBirthday, 
    userValidator.validatePassword, 
    userCtlr.signup
);

module.exports = router;