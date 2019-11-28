import React, { Component } from "react";

class SignupContainer extends Component {
  state = {};
  render() {
    return (
      <div className="signup-container">
        <h2>Become a Happy Applicant!</h2>
        <p>
          Gone are the dark days of Excel spreadsheets and copy and pasting to
          organize your job search. Join the Happy Applicant community for
          access.
        </p>
        <h5>Sign up for a free account!</h5>
        <form action="">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm password" />
          <button>Create Account</button>
        </form>
        <div>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    );
  }
}

export default SignupContainer;
