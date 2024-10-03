const express = require('express');
const router = express.Router();
const userValidator = require('../middlewares/users');
const userCtlr = require('../controllers/users');

router.post("/signup", 
    userValidator.email, 
    userValidator.phone, 
    userValidator.birthday, 
    userValidator.password, 
    userCtlr.signup
);

module.exports = router;