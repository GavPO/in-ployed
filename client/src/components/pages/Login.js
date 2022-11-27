import React, { useState, useEffect } from "react";
import "../../styles/Login.css";
import auth from "../../utils/auth";
import { signupAction } from "../../utils/signup";
import { loginAction } from "../../utils/login";

export default function Login() {
  const [signupData, setSignupData] = useState({
    password: "",
    email: "",
    username: "",
  });
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleInputChangeSignup = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await signupAction(signupData);
      const data = await response.json();
      auth.login(data.token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await loginAction(loginData);
      const data = await response.json();
      auth.login(data.token);
    } catch (err) {
      console.error(err);
    }
  };


// export default function Login(props) {
//   const [loginState, setLoginState] = useState({ email: "", password: "" });

//   // async function loginUser() {
//   //   const response = await fetch("/login", {
//   //     method: "POST",
//   //     body: JSON.stringify(loginState),
//   //   });
//   //   return response.json();
//   // }

//   // const handleFormSubmit = async (event) => {
//   //   event.preventDefault();
//   //   // console.log(loginState);
//   //   try {
//   //     const { token, currentUser } = await loginUser();
//   //     console.log(token, currentUser);

//   //     Auth.login(token);
//   //   } catch (e) {
//   //     console.error(e);
//   //   }

//     // clear form values
//     setLoginState({
//       email: "",
//       password: "",
//     });
//   };

//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setLoginState({
//       ...loginState,
//       [name]: value,
//     });
//   };

// const signUp = function (props) => {
//   const [signUpState, setSignUpState] = useState({ email: "", password: "",  });

//   async function loginUser() {
//     const response = await fetch("/login", {
//       method: "POST",
//       body: JSON.stringify(loginState),
//     });
//     return response.json();
//   }

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(loginState);
//     try {
//       const { token, currentUser } = await loginUser();
//       console.log(token, currentUser);

//       Auth.login(token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setLoginState({
//       email: "",
//       password: "",
//     });
//   };

//   const onSignUpChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setLoginState({
//       ...signUpState,
//       [name]: value,
//     });
//   };
// }

  return (
    <div className="row" id="login">
      <div className="col-md-6 registration">
        <h2>Login</h2>


        <form onSubmit={handleLogin} className="form login-form">

          <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-login"
              onChange={handleInputChangeLogin}
              value={loginData.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-login"
              onChange={handleInputChangeLogin}
              value={loginData.password}
              name="password"
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
              onChange={handleInputChangeSignup}
              value={signupData.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-signup">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={handleInputChangeSignup}
              value={signupData.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={handleInputChangeSignup}
              value={signupData.password}
              name="password"
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
