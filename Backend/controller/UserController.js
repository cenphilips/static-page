const User = require('../model/User')
const bcrypt = require('bcryptjs')

class UserController {
  static async createUser(req, res) {
    try {
      const { firstname, lastname, phone, email, password } = req.body
      if (!firstname || !lastname || !phone || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
      }
      const checkEmail = await User.getByEmail(email)
      if (checkEmail) {
        return res.status(409).json({ message: 'Email already exists' })
      }
      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = await User.create({
        firstname,
        lastname,
        phone,
        email,
        password: hashedPassword,
      })
      res
        .status(201)
        .json({ message: 'User created successfully', user: newUser })
    } catch (error) {
      console.error('Error creating user:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await User.getAll()
      res
        .status(200)
        .json({ message: 'Users fetched successfully', users: users })
    } catch (error) {
      console.error('Error fetching users:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params
      const user = await User.getById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      res.status(200).json({ message: 'User fetched successfully', user: user })
    } catch (error) {
      console.error('Error fetching user by id:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async updateUserById(req, res) {
    try {
      const { id } = req.params
      const { firstname, lastname, phone, email } = req.body
      const user = await User.getById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      const updatedUser = await User.updateById(id, {
        firstname,
        lastname,
        phone,
        email,
      })
      res
        .status(200)
        .json({ message: 'User updated successfully', user: updatedUser })
    } catch (error) {
      console.error('Error updating user by id:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async deleteUserById(req, res) {
    try {
      const { id } = req.params
      const user = await User.getById(id)
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }
      await User.deleteById(id)
      res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      console.error('Error deleting user by id:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async getUserStats(req, res) {
    try {
      const stats = await User.getStats()
      res
        .status(200)
        .json({ message: 'User stats fetched successfully', stats: stats })
    } catch (error) {
      console.error('Error fetching user stats:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}

module.exports = UserController
