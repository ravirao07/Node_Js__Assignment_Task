const express = require('express');
const { createBlog, updateBlog, deleteBlog, getAllBlogs, getSingleBlogPost,} = require('../Controller/blog.Controller');
const authenticate = require('../middleware/authMIddleware');
const blogRoutes = express.Router();

blogRoutes.get('/getAllBlogs', getAllBlogs);
blogRoutes.get('/getSingle',getSingleBlogPost)
blogRoutes.post('/postBlog', authenticate, createBlog); 
blogRoutes.put('/updateBlog/:id', authenticate, updateBlog);
blogRoutes.put('/updateBlog/:id',  updateBlog); /// demmo
blogRoutes.delete('/deleteBlog/:id', authenticate, deleteBlog)

module.exports = blogRoutes;
