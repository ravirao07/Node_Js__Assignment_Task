const mongoose = require('mongoose')

const connecting = mongoose.connect('mongodb://127.0.0.1:27017/Blog-Project')


module.exports=connecting