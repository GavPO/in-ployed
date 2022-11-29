import React from "react";
import "../../styles/Homepage.css";
import jumbotron1 from "../../assets/jumbotron1.png";
import jumbotron2 from "../../assets/jumbotron2.png";
import { Nav, Navbar } from "react-bootstrap";

import Auth from "../../utils/auth";

export default function Homepage({ currentPage, handlePageChange }) {
  return (
    // Depending on screen size a different jumbotron will display
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" id="jumbotron1" src={jumbotron1} />
          <div id="mobile">
            <h1>Looking to share some code?</h1>
            <img className="img-fluid" id="jumbotron2" src={jumbotron2} />
          </div>
        </div>
        <div className="flex-column col-lg-6" id="computer">
          <div id="computer">
            <h2>Lets get connected with In-coded</h2>
            <p className="align-middle">
             On In-coded you can share all things web dev with your fellow developers. Whether its your own code snippets, cool new technologies, or a resource you found helpful. Everyone needs a good friend, and<br/> In-Coded is always here for you! So ask yourself, are you in?
            </p>
            {/* Depending on if the user is logged in or not different navtabs will display */}
            {Auth.loggedIn() ? (
              <></>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handlePageChange("Login")}
                    >
                      Get Started
                    </button>
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
