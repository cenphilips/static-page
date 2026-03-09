const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const AuthController = {
  async register(req, res) {
    try {
      const { firstname, lastname, phone, email, password } = req.body
      if (!firstname || !lastname || !phone || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
      }
      const userEmailExists = await User.getByEmail(email)
      if (userEmailExists) {
        return res.status(409).json({ message: 'Email already in use' })
      }
        const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({
        firstname,
        lastname,
        phone,
        email,
        password: hashedPassword,
        role: 'user',
      })
      // Generate JWT token
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email, role: newUser.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN },
      )
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
          user: newUser,
          token: token,
        },
      })
    } catch (err) {
      console.error('Error during registration:', err)
      res.status(500).json({
        success: false,
        message: 'An error occurred during registration',
        error: err.message,
      })
    }
  },

  //login user
  async login(req, res) {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Email and password are required' })
      }
      const user = await User.getByEmail(email)
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' })
      }
      // Generate JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN },
      )
      delete user.password // Remove password from user object before sending response
      res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: {
          user: user,
          token: token,
        },
      })
    } catch (err) {
      console.error('Error during login:', err)
      res.status(500).json({
        success: false,
        message: 'An error occurred during login',
        error: err.message,
      })
    }
  },

    //get user profile
    async getProfile(req, res) {
        try {
            const user = await User.getById(req.user.id)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            delete user.password // Remove password from user object before sending response
            res.status(200).json({
                success: true,
                message: 'User profile fetched successfully',
                data: {
                    user: user,
                },
            })
        } catch (err) {
            console.error('Error fetching user profile:', err)
            res.status(500).json({
                success: false,
                message: 'An error occurred while fetching user profile',
                error: err.message,
            })
        }
    }
}

module.exports = AuthController