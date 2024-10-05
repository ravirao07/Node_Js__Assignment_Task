const express = require('express');
const { register, login } = require('../controllers/authController');
const authRoutes = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = authRoutes;
