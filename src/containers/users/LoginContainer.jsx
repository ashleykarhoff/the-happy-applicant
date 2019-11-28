import React, { Component } from "react";

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <div className="login-container">
        <h2>Welcome back!</h2>
        <p>
          Gone are the dark days of Excel spreadsheets and copy and pasting to
          organize your job search. Join the Happy Applicant community for
          access.
        </p>
        <h5>Sign into your account!</h5>
        <form action="">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </form>
        <div>
          <p>
            Need to create an account? <span>Sign up</span>
          </p>
          <p>Forgot password?</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
