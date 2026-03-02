const express = require('express')
const db = require('./config/db')
require('dotenv').config()
const UserRoute = require('./route/UserRoutes')
const User = require('./model/User')
const PostRoute = require('./route/PostRoutes')
const Post = require('./model/Post')

const app = express()
const PORT = process.env.PORT || 8000

// Middleware to parse JSON bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log('\n ===================== New Request =====================');
    console.log(`URL: ${req.url}`);
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log(`User-Agent: ${req.headers['user-agent']}`);
  next();
})

app.use('/api/v1', UserRoute)
app.use('/api/v1', PostRoute)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Home Page!' })
})

app.get('/health', async (req, res) => {
  try {
    await db.query('SELECT 1')
    res
      .status(200)
      .json({
        message: 'Database connection is healthy',
        status: 'OK',
        timestamp: new Date().toISOString(),
      })
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Database connection failed',
        status: 'ERROR',
        database: 'disconnected',
        error: error.message,
      })
  }
})

app.get('/about', (req, res) => {
  res.status(200).json({ message: 'This is the About Page.' })
});

async function startServer() {
  try {
    await User.createTable()
    await Post.createTable()
    console.log('All tables created successfully')
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}
startServer()

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
