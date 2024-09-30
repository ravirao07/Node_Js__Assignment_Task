import { Box, Typography } from "@mui/material";
import React from "react";
import './About.css'

const About = () => {
  return (
    <div>
      <section class="about-section text-center">
        <div class="container">
          <h1>About Us</h1>
          <p class="lead mb-4">
            Welcome to our Bookshop! We are dedicated to offering a diverse range of books for readers of all ages. Whether you’re seeking the latest bestsellers or timeless classics, you’ll find them here.
          </p>
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4">
              <img src="https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?t=st=1727524243~exp=1727527843~hmac=3ae1b33b9776420bae9c8f54a4a0ab2b28a5836da7acdedac5da6f666cf552b8&w=826" alt="Bookshop Interior" class="about-image" />
            </div>
            <div class="col-lg-6">
              <h3>Our Story</h3>
              <p>
                Established in 1990, our bookshop has been a haven for book lovers. We started with a small collection of titles and have grown into a beloved community space for readers. Our mission is to foster a love for reading and to create a welcoming environment for everyone.
              </p>
              <h3>Our Mission</h3>
              <p>
                We aim to inspire and nurture the joy of reading. Our dedicated team is here to help you discover books that will open your mind and heart. Join us in our mission to spread the love of literature!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer  */}
  <footer class="footer">
    <div class="container-fluid">
      <p class="mb-0">&copy; 2024 Bookshop. All rights reserved.</p>
    </div>
  </footer>
    </div>
  );
};

export default About;
