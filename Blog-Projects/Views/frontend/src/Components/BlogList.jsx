
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/user/getall')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/user/delete/${id}`)
      .then(() => setPosts(posts.filter(post => post._id !== id)))
      .catch(error => console.log(error));
  };

  return (
    <Container>
      <h2>All Blog Posts</h2>
      <Link to="/create" className="btn btn-primary mb-4">Create New Post</Link>
      
      {/* Row with responsive columns */}
      <Row>
        {posts.map(post => (
          <Col key={post._id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <Card className="w-100 h-100 d-flex flex-column" style={{ minHeight: '100%' }}>
              <Card.Img variant="top" src={post.image} alt="Project image" style={{ objectFit: 'auto', height: '300px' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  <Link to={`/details/${post._id}`}>{post.title}</Link>
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  A brief description of Blog
                  <h5>{post.content}</h5>
                </Card.Text>
                <div className="mt-auto">
                  <Link to={`/edit/${post._id}`}>
                    <Button variant="success" className="me-2">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(post._id)}>Delete Blog</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;
