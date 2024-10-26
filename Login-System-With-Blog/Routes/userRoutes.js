const exprees = require('express')
const { signup, login } = require('../Controller/authController')
const userRoutes = exprees.Router()

userRoutes.post('/sin',signup)
userRoutes.post('/login',login)




module.exports=userRoutes