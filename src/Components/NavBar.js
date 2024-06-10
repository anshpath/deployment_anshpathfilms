import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Type from "./Type";

function NavBar() {
  return (
<Navbar fixed = "top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <h1>
            Ansh Pathapadu
          </h1>
          <div>
            <Type />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/narrativefilms">Narrative Films</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/experimentalfilms">
                Experimental Films
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
