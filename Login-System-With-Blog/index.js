const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Connecting = require('./db');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const blogRoutes = require('./Routes/blogRoutes');
const cookieParser = require('cookie-parser');

dotenv.config();

// Middleware
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);

// Server
app.listen(process.env.PORT, async () => {
    try {
        await Connecting;
        console.log(`Server is running on port ${process.env.PORT}`);
        console.log('>>>>>>>>>> Connected to DB <<<<<<<<');
    } catch (error) {
        console.log(error);
    }
});
