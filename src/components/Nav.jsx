import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar className="bg-primary-custom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-title-custom">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-main-custom nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="text-main-custom nav-link-custom">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-main-custom nav-link-custom">Contact</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="text-main-custom nav-link-custom">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;