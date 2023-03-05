import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/header.css'
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
      <Navbar collapseOnSelect bg="success" variant="dark" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand id="home-title">
            <img src={require('../assets/images/logo.png')} alt="" width="32" height="32"/> {' '}
          CodeSnipper
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header