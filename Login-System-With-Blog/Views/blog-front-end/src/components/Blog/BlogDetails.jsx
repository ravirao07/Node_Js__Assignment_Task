
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Card, Container, Button, Row, Col } from 'react-bootstrap'; 

const BlogDetails = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/single/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/user/delete/${id}`);
      alert("Post deleted successfully!"); 
      navigate('/'); 
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("An error occurred while deleting the post.");  
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-sm">
            {post.image && (
              <Card.Img 
                variant="top" 
                src={post.image} 
                alt="Project image" 
                className="img-fluid"
              />
            )}
            <Card.Body>
              <Card.Title><h2>{post.title}</h2></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">By {post.author}</Card.Subtitle>
              <Card.Text>{post.content}</Card.Text>
              <Card.Text>
                <strong>Tags: </strong>{post.tags.join(', ')}
              </Card.Text>
              <Card.Text>
                <strong>Published on: </strong>{new Date(post.publishedDate).toLocaleDateString()}
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/')}>
                Back to All Posts
              </Button>
              <Button variant="danger" className="ms-3" onClick={handleDelete}>
                Delete Post
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetails;
