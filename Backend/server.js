const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing application/json

// CORS Middleware - Apply it once
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only requests from localhost:3000
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true  // If your request requires credentials (like cookies)
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Connection failed', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from the MERN stack!');
});

debugger
// Upload paper route
app.post('/upload-paper', (req, res) => {
    // Simulate a paper upload process
    // You can add your logic here
    res.status(200).json({ message: 'Paper uploaded successfully!' });
});

// Listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
