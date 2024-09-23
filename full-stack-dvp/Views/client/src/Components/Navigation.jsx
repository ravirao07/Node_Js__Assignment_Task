import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark"  >
        <Container>
          <Navbar.Brand href="#home"><img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="" width={100} height={50}/></Navbar.Brand>
          <Nav className="me-5" >
            <Nav.Link><Link  to="/">Home</Link></Nav.Link>
            <Nav.Link><Link  to="/about">About</Link></Nav.Link>
            <Nav.Link><Link  to="/contact">Contact</Link></Nav.Link>
            <Nav.Link><Link  to="/registration">Registra</Link></Nav.Link>
            <Nav.Link><Link  to="/login">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;