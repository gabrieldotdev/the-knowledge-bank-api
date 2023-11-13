const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get an user by Id
router.get('/users/:Id', userController.getUserById);

// Route to create an user
router.post('/users', userController.createUser);

// Route to update an user
router.put('/users/:Id', userController.updateUser);

// Route to delete an user
router.delete('/users/:Id', userController.deleteUser);

module.exports = router;
