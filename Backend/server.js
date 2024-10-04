const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const userRoute = require('./routes/user');
app.use('/api/users', userRoute);

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Connection failed', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from the MERN stack!');
});

// Listen on the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
