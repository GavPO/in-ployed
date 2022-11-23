import React, { useState } from "react";
import "../../styles/Login.css";


// import Auth from "../../utils/auth";


export default function Login(props) {
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  async function loginUser() {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(loginState),
    });
    return response.json();
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginState);
    try {
      const { token, currentUser } = await loginUser();
      console.log(token, currentUser);

      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginState({
      email: "",
      password: "",
    });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

const signUp = function (props) => {
  const [signUpState, setSignUpState] = useState({ email: "", password: "",  });

  async function loginUser() {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(loginState),
    });
    return response.json();
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginState);
    try {
      const { token, currentUser } = await loginUser();
      console.log(token, currentUser);

      Auth.login(token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setLoginState({
      email: "",
      password: "",
    });
  };

  const onSignUpChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginState({
      ...signUpState,
      [name]: value,
    });
  };


  return (
    <div className="row" id="login">
      <div className="col-md-6 registration">
        <h2>Login</h2>

        <form onSubmit={handleFormSubmit} className="form login-form">
          <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <br />
            <input
              className="form-input"
              name="email"
              type="text"
              value={loginState.email}
              id="email-login"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <br />
            <input
              className="form-input"
              name="password"
              type="password"
              value={loginState.password}
              id="password-login"
              onChange={onInputChange}
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

        <form onSubmit={handleFormSubmit} className="form signup-form">
          <div className="form-group">
            <label htmlFor="name-signup">Name:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="name-signup"
              onChange={onSignUpChange}
              value={signUpState.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-signup">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={onSignUpChange}
              value={signUpState.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={onSignUpChange}
              value={signUpState.password}
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
