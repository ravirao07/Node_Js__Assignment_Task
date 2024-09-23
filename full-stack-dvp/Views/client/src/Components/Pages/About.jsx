import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css'
const About = () => {
  return (
    <div className='main'>
      <div className='contain'>
        <h1 class="sliding-title">Most Popular Food Dishes </h1>
      </div>
      <div className="components-main">
        <div className='d-flex justify-content-around '>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2P3XNlbkf0hzN4AeNq7sf7QaaB6JstJM-AQ&s" />
            <Card.Body>
              <Card.Title>Chilli Paneer</Card.Title>
              <Card.Text>
              Chilli paneer gravy is one of the perfect Indo Chinese side dish. It is very important to balance the taste.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* second */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQymTHFV66F1IL4BAt-EUUM3cHtUxd_H2iQ&s" />
            <Card.Body>
              <Card.Title>Malai Kofta
              </Card.Title>
              <Card.Text>
              A vegetarian dish of meatballs in a gravy of tomato, cream, and spicesn.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* third */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://minimalistbaker.com/wp-content/uploads/2016/02/EASY-Chana-Masala-SQUARE.jpg" />
            <Card.Body>
              <Card.Title>Chana masala</Card.Title>
              <Card.Text>
                A spicy North Indian curry made with chickpeas, onions, ginger, garlic, and garam masala. It's often served with bhature or kulcha..
              </Card.Text>
            </Card.Body>
          </Card>

          {/* foure */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIvt3-5EGYpsYw1jSydlsVOCOWHnZUA9aU8jNMzYtiXw2Hj9nAHDyxMKwO9nwqS8683I&usqp=CAU" />
            <Card.Body>
              <Card.Title>Butter chicken</Card.Title>
              <Card.Text>
                A modern dish made with tomato-cream sauce, spices, and tandoori chicken..
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='d-flex justify-content-around mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/1d9ce5d3344e6a34/400x400cq70/photo.jpg" />
            <Card.Body>
              <Card.Title>Chole bature</Card.Title>
              <Card.Text>
                A popular street food dish that combines spicy chickpea curry with deep fried fluffy bread..
              </Card.Text>
            </Card.Body>
          </Card>
          {/* second */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.funfoodfrolic.com/wp-content/uploads/2022/03/Matar-Paneer-Blog-500x500.jpg" />
            <Card.Body>
              <Card.Title>Matar paneer
              </Card.Title>
              <Card.Text>
                A dish from northern India made with pureed tomatoes, peas, paneer (farmer's cheese), and garam masala. It goes well with rice, paratha, poori, or naan.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* third */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://sinfullyspicy.com/wp-content/uploads/2023/12/1200-by-1200-images-2.jpg" />
            <Card.Body>
              <Card.Title>Mutton Hyderabadi biryani</Card.Title>
              <Card.Text>
                A flavorful rice meal cooked with spices, saffron, and marinated chicken or mutton..
              </Card.Text>
            </Card.Body>
          </Card>

          {/* foure */}
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_13k3dJE-QV8Hp--1q_lXvp5E32iqrIRR2g&s" />
            <Card.Body>
              <Card.Title>Dal makhani</Card.Title>
              <Card.Text>
              Dal makhani is a North Indian dish of whole black lentils and red kidney beans cooked with spices, butter, and cream.
              </Card.Text>
            </Card.Body>
          </Card>
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

export default About