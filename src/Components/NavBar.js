import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from react-router-dom
import './NavBar.css';  // Import the CSS file
import Type from './Type';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/'; // Check if on homepage

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={isHomePage ? "navbar-home" : "navbar-other"}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand">
          <h1 className="brand-text">Ansh Pathapadu</h1>
          {isHomePage && <h2 className = "brand-text"><Type /></h2>}
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/narrativefilms" onClick={() => updateExpanded(false)}>
                Narrative
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/experimentalfilms" onClick={() => updateExpanded(false)}>
                Experimental
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                href="/Ansh_Film_ResumeNEW.pdf" 
                target="_blank" 
                onClick={() => updateExpanded(false)}
                className="resume-link"
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
