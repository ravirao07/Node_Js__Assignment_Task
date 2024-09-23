import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      <div className="body">
      <div class="contact-container">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required/>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" required/>

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>
  </div>
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

export default Contact