import React from 'react';
import '../../styles/Login.css';

export default function Login() {
  return (
    <div className="row" id='login'>
  <div className="col-md-6 registration">
    <h2>Login</h2>

    <form className="form login-form">
      <div className="form-group">
        <label htmlFor="email-login">Email:</label><br/>
        <input className="form-input" type="text" id="email-login" />
      </div>
      <div className="form-group">
        <label htmlFor="password-login">Password:</label><br/>
        <input className="form-input" type="password" id="password-login" />
      </div>
      <div className="form-group">
        <button className="btn" type="submit">Login</button>
      </div>
    </form>
  </div>
  <div className="col-md-6 registration">
    <h2>Signup</h2>

    <form className="form signup-form">
      <div className="form-group">
        <label htmlFor="name-signup">Name:</label><br/>
        <input className="form-input" type="text" id="name-signup" />
      </div>
      <div className="form-group">
        <label htmlFor="email-signup">Email:</label><br/>
        <input className="form-input" type="text" id="email-signup" />
      </div>
      <div className="form-group">
        <label htmlFor="password-signup">Password:</label><br/>
        <input className="form-input" type="password" id="password-signup" />
      </div>
      <div className="form-group">
        <button className="btn" type="submit">Signup</button>
      </div>
    </form>
  </div>
</div>
  );
}
