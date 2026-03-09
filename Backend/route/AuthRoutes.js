const express = require('express')
const router = express.Router()
const AuthController = require('../controller/AuthController')
const authMiddleware = require('../middleware/auth')

// public routes
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

// protected routes
router.get('/profile', authMiddleware.verifyToken, AuthController.getProfile)

module.exports = router