const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUserById);
router.delete('/users/:id', UserController.deleteUserById);
router.get('/users/stats', UserController.getUserStats);

module.exports = router;