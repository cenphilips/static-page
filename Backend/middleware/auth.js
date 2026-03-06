const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = {
  verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1] // Bearer <token>
    if (!authHeader?.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ message: 'Authorization header is missing or malformed' })
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = decoded
      next()
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' })
      }
      return res.status(403).json({ message: 'Invalid token' })
    }
  },
}

module.exports = authMiddleware
