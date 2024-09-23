const mongoose = require('mongoose')
 // Schema

 const userSchema = mongoose.Schema({
   firstName : String,
   lastName : String,
    email: String,
    password: String,
 })


 // Model 

 const userModel = mongoose.model('userdata',userSchema)

 module.exports=userModel