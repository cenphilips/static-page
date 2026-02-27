const express = require('express');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Home Page!' });
});

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

app.get('/about', (req, res) => {
    res.status(200).json({ message: 'This is the About Page.' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Page Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
