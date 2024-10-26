const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

module.exports = app;
