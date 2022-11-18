import React from 'react';
import '../styles/Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
      <a className="navbar-brand"><h1 className="display-4">In-coded</h1></a>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ms-auto d-block">
        <ul>
          <li>
          <Nav.Item>
          <Nav.Link className="nav-link active" href="#about"onClick={() => handlePageChange('Login')}>
           Login
          </Nav.Link>
        </Nav.Item>
        </li>
        <li>
          <Nav.Item>
          <Nav.Link className="nav-link active" href="#about"onClick={() => handlePageChange('Login')}>
           Sign Up
          </Nav.Link>
        </Nav.Item>
        </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#portfolio" onClick={() => handlePageChange('Profile')}>
           Profile
          </Nav.Link>
        </Nav.Item>
          </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#resume" onClick={() => handlePageChange('Dashboard')}>
           Dashboard
          </Nav.Link>
        </Nav.Item>
          </li>
          <li>
          <Nav.Item>
           <Nav.Link className="nav-link active" href="#contact" onClick={() => handlePageChange('Contact')}>
           Contact
          </Nav.Link>
        </Nav.Item>
          </li>
        </ul>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavTabs;
