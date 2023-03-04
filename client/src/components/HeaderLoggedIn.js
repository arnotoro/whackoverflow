import {Nav, Navbar, Container, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/header.css'
import { LinkContainer } from 'react-router-bootstrap';

const HeaderLoggedIn = () => {


    const signOut = () => {
        localStorage.clear()
        window.location.href = '/'
    }

  return (
    <Navbar collapseOnSelect bg="success" variant="dark" expand="md">
        <Container fluid>
            <LinkContainer to="/home">
                <Navbar.Brand id="home-title">
                    <img src={require('../assets/images/logo.png')} alt="" width="32" height="32"/> {' '}
                    CodeSnipper
                 </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className='me-auto'
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
            </Nav>
            <Nav>
                <Form className="d-flex" role="search">
                    <FormControl type="search" placeholder="Search for snippets" className="me-2" aria-label="Search" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <LinkContainer onClick={signOut} to="/">
                <Nav.Link>Sign Out</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default HeaderLoggedIn