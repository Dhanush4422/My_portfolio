import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="md" fixed="top" className="custom-navbar-shadow desktop-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold d-flex align-items-center gap-2">
          <img src={`${process.env.PUBLIC_URL}/assets/images/dhanush.jpg.png`} alt="Dhanush" className="rounded-circle" width="38" height="38" />
          <span style={{ fontFamily:'Syne,sans-serif', fontWeight:800, letterSpacing:'-0.03em'}}>Dhanush<span style={{color:'#ed254e'}}>.</span></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:'rgba(255,255,255,0.1)', color:'#fff'}} />
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
