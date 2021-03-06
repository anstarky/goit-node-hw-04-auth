const express = require('express');
const router = express.Router();

const { signup, loginUser, validTokenUser, logout } = require('../src/index');

router.post('/register', signup);

router.post('/login', loginUser);

router.post('/logout', validTokenUser, logout);

module.exports = router;
