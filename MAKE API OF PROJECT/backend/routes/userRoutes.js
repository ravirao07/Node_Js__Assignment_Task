const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authenticator = require('../middlewares/authenticator');
const validator = require('../middlewares/validator');

const router = express.Router();

// These routes are only accessible to logged-in users (authenticated)
router.get('/', authenticator, getAllUsers);  // Only Admin can access this route
router.get('/:id', authenticator, getUserById); // Accessible by all authenticated users
router.put('/:id', authenticator, validator, updateUser); // Only Admin can update users
router.delete('/:id', authenticator, validator, deleteUser); // Only Admin can delete users

module.exports = router;
