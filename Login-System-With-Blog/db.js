const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const Connecting = mongoose.connect(process.env.MONGOOSE_SERVER_URL)

module.exports=Connecting