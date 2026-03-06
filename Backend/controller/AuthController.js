const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const AuthController = {
    async register(req, res) {
        try {
            const { firstname, lastname, phone, email, password } = req.body;
            if (!firstname || !lastname || !phone || !email || !password) {
                return res.status(400).json({ message: 'All fields are required' });
            }
            const userEmailExists = await User.getByEmail(email);
            if (userEmailExists) {
                return res.status(409).json({ message: 'Email already in use' });
            }
            const newUser = await User.create({ firstname, lastname, phone, email, password });
            // Generate JWT token
            const token = jwt.sign(
                { id: newUser.id, email: newUser.email }, 
                process.env.JWT_SECRET_KEY, 
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );
            res.status(201).json(
                {
                    success: true,
                    message: 'User registered successfully',
                    data: {
                        user: newUser,
                        token: token
                    }
                }
            );
        } catch (err) {
            console.error('Error during registration:', err);
            res.status(500).json({ 
                success: false,
                message: 'An error occurred during registration',
                error: err.message
            });
        }
    }

    //login user
    
}