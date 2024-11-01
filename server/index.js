const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected to Mongo'))
.catch(err => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
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

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
