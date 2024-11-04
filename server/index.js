const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Pragma',
        'Expires',
        'Cache-Control',
        'Content-Type',
        'Accept',
        'Authorization'
    ],
    credentials: true
}));

// Example route (add more routes here as needed)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
