import axios from 'axios';
import React, { useState } from 'react'
import './Login.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const initialValue={
  userName :'',
  emial : '',
  password :''

}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8000/user/login", { email, password });
        localStorage.setItem("token", response.data.token);  
        alert("Login successful");
        navigate('/about')
    } catch (error) {
        console.error(error);
        alert("Login failed");
    }
};
  return (
    <div>
      <div className="compone">
      <Card border="info" style={{ width: '35rem',marginLeft:'385px',marginTop:'-190px'}}>
      <Card.Header><h2>Login</h2></Card.Header>
      <Card.Body>
        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
      </div>
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
  )
}

export default Login