
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/blog/getAllBlogs', { withCredentials: true }); // Ensure cookies are sent
        setBlogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  // Function to handle deletion of a blog
  const handleDelete = async (id) => {
    {
      try {
        await axios.delete(`http://localhost:8000/blog/deleteBlog/${id}`, { withCredentials: true }); // Send delete request
        setBlogs(blogs.filter(blog => blog._id !== id)); // Update state to remove the deleted blog
        alert('Blog deleted successfully');
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleDelete(blog._id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

