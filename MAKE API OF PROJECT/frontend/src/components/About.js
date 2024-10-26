import React from 'react';

function About() {
  return (
    <div>
      <h1>About This Project</h1>
      <p>This project is a full-stack web application built with React on the frontend and Node.js/Express on the backend, connected to MongoDB for data storage. Here are some of the features:</p>
      <ul>
        <li>User Registration with role-based access control (Admin, Explorer)</li>
        <li>Login Authentication using JSON Web Tokens (JWT)</li>
        <li>Middleware to handle user validation and logging</li>
        <li>CRUD operations for user data (accessible only to Admin users)</li>
        <li>Dynamic Navbar showing the current logged-in user</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Frontend: React, Axios</li>
        <li>Backend: Node.js, Express, JWT</li>
        <li>Database: MongoDB with Mongoose</li>
      </ul>
      <h3>Screenshots:</h3>
      <p>Here are some screenshots of the project:</p>
      <img src="https://via.placeholder.com/600x400" alt="Screenshot" />
    </div>
  );
}

export default About;
