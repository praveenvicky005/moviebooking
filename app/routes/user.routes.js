const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Routes for User Authentication
router.post('/auth/signup', userController.signUp);
router.post('/auth/login', userController.login);
router.post('/auth/logout', userController.logout);

module.exports = router;
