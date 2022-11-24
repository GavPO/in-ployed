import React, { useState, useEffect } from "react";
import "../../styles/Login.css";
import { signupAction } from "../../utils";
// import Auth from "../utils/auth";

export default function Login() {
  const [formData, setFormData] = useState([]);
  const [signupData, setSignupData] = useState([]);
  const [loginData, setLoginData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    setSignupData(formData);
    try {
      const response = await signupAction(signupData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row" id="login">
      <div className="col-md-6 registration">
        <h2>Login</h2>

        <form className="form login-form">
          <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-login"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-login"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6 registration">
        <h2>Signup</h2>

        <form onSubmit={handleSignup} className="form signup-form">
          <div className="form-group">
            <label htmlFor="name-signup">Name:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="name-signup"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-signup">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
