import React from 'react';
import '../styles/Navbar.css';
import { Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/logo.png';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect  expand="lg">
      <Nav.Link className="navbar-brand" href="#about"onClick={() => handlePageChange('Homepage')}>
        <img src={logo} width="32" height="32" className="d-inline-block align-top" alt=""/>
        In-coded
          </Nav.Link>
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
        </ul>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavTabs;
