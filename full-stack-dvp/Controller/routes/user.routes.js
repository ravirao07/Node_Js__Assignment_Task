const express = require('express');
const { getAlluserController, RegisterController, LoginController, PrivateController } = require('../user.controller');


const userRoute = express.Router();

// gat Route
userRoute.get('/allroutes',getAlluserController)
// post Route Register
userRoute.post('/register',RegisterController)
// post Route Login
userRoute.post('/login',LoginController) 
// Private Routes
userRoute.get('/private',PrivateController)

module.exports=userRoute