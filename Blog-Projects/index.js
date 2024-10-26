const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors');
const UserRouter = require('./Router/router');
const connecting = require('./db');
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/user',UserRouter)


app.listen(process.env.PORT, async () => {
    try {
        await connecting;
        console.log(`Server is running on port ${process.env.PORT || 5001}`);
        console.log('>>>>>>>>>>> db connected <<<<<<<<<');
    } catch (error) {
        console.log(error);
    }
});

