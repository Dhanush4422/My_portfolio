import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';


const MyNavbar = () => {
  return (
    <Navbar expand="md" bg="light" variant="light" fixed="top" className="custom-navbar-shadow desktop-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center">
        
          <img src="assets/images/dhanush.jpg.png" alt="Dhanush" className="rounded-circle me-2" width="40" height="40" /> 
          Dhanush
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="menu-item">Home</Nav.Link>
            <Nav.Link href="#about" className="menu-item">About</Nav.Link>
            <Nav.Link href="#education" className="menu-item">Education</Nav.Link>
            <Nav.Link href="#skills" className="menu-item">Skills</Nav.Link>
            <Nav.Link href="#projects" className="menu-item">Projects</Nav.Link>
            <Nav.Link href="#contact" className="menu-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;