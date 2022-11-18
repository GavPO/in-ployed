import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="page-footer">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12 py-5">
          <div className="mb-5 flex-center">
          <img src={logo}width="50" height="50" className="d-inline-block align-top" alt=""/>
          <h1>In-coded</h1>
            <ul>
              <li>
              <a href="https://github.com/GavPO" target="_blank">Gavin</a>
              </li>
              <li>
              <a href="https://github.com/johnathanmann" target="_blank">Johnny</a>
              </li>
              <li>
              <a href="https://github.com/tierney7" target="_blank">Matt</a>
              </li>
              <li>
              <a href="https://github.com/SteveWeed79" target="_blank">Steve</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
