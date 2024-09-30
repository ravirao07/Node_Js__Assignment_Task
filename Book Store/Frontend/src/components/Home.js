import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../components/Book/Home.css'; // Ensure correct import path

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/books');
  };

  return (
    <div>
      <div className="body">
        <h1 className="slider-text">Welcome to <span style={{ color: 'red' }}>Books📚Shop</span></h1>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button onClick={handleNavigate} variant="primary" style={{ marginLeft: '300px', marginTop: '-100px' }}>
            View All Books
          </Button>
        </Box>
      </div>
      {/* Footer  */}
      <footer class="footer">
        <div class="container-fluid">
          <p class="mb-0">&copy; 2024 Bookshop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
