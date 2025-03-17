import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar className="bg-primary-custom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-title-custom">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-main-custom nav-link-custom" activeClassName="active">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="text-main-custom nav-link-custom" activeClassName="active">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-main-custom nav-link-custom" activeClassName="active">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/resume" className="text-main-custom nav-link-custom" activeClassName="active">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;