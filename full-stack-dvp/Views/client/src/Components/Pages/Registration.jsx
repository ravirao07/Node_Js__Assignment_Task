import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import './Registration.css'

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const RegistrationForm = () => {
  const [formData, setFormData] = useState(initialValue);
  const {firstName,lastName,email,password} = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API submission logic here
    console.log(formData);
    // post
    axios.post('http://localhost:8000/user/register',formData).then((res)=>console.log(res)).catch((err)=>console.log(err))
  };

  return (
    <div>
      <body className='componet'>
      <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ maxWidth: '500px', width: '100%' }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Header><h2>Register</h2></Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e)=>handleChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mt-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e)=>handleChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e)=>handleChange(e)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e)=>handleChange(e)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
      </body>
      <footer class="animated-footer">
        <div class="footer-content">
          <p style={{ fontStyle: 'italic' }}>© 2024 My Foods Shop. All Rights Reserved.</p>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
      </footer>
      </div>
  );
};

export default RegistrationForm;
