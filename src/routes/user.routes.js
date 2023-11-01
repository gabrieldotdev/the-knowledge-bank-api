const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get an user by Id
router.get('/:Id', userController.getUserById);

// Route to create an user
router.post('/', userController.createUser);

// Route to update an user
router.put('/:Id', userController.updateUser);

// Route to delete an user
router.delete('/:Id', userController.deleteUser);

module.exports = router;
