const blogModel = require('../Model/blogPost');

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSingleBlogPost = async (req, res) => {
  try {
      const SinglePost = await blogModel.findById(req.params.id);
      if (!SinglePost) {
          return res.status(404).json({ message: 'Blog post not found' });
      }
      res.json(SinglePost);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};


// Create a new blog post
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    const blog = new blogModel({
      title,
      author: req.user.id,
      content,
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await blogModel.findById(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'You are not authorized to update this post' });
    }

    if (title) blog.title = title;
    if (content) blog.content = content;

    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await blogModel.findById(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'You are not authorized to delete this post' });
    }

    await blogModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBlog, updateBlog, deleteBlog, getAllBlogs, getSingleBlogPost};
