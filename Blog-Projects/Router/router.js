const express = require('express')
const {createPost, getAllPosts,updatePost,deletePost, getSingleUser} = require('../Controller/user.Controller')
const UserRouter = express.Router()

UserRouter.get('/single/:id',getSingleUser)
UserRouter.get('/getall',getAllPosts)
UserRouter.post('/create',createPost)
UserRouter.patch('/update/:id',updatePost)
UserRouter.delete('/delete/:id',deletePost)



module.exports=UserRouter