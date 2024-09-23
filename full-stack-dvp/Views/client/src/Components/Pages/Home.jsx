import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className="componets">
      <h1 className="title-slider" style={{fontSize:'80px',backgroundColor:'#021526',fontStyle:'oblique'}}>Wellcom To<br /><span style={{color:'#C40C0C'}}>Food</span><span style={{color:'#f3ec78'}}>Shop</span></h1>
      </div>
      <footer class="animated-footer">
        <div class="footer-content">
            <p style={{fontStyle:'italic'}}>© 2024 My Foods Shop. All Rights Reserved.</p>
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

export default Home