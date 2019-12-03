import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-size: 32px;
`;

const Text = styled.div`
  font-size: 18px;
  max-width: 650px;
`;

const SubHeader = styled.h4`
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;

const Input = styled.input`
  border: solid 0.5px lightgrey;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  border: solid 0.5px lightgrey;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  font-size: 16px;
  background-color: #03176a;
  color: white;
`;

class SignupContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      confirm_password
    } = this.state;

    return (
      <Container>
        <Header>Become a Happy Applicant!</Header>
        <Text>
          Gone are the dark days of Excel spreadsheets and copy and pasting to
          organize your job search. Join the Happy Applicant community for
          access.
        </Text>
        <SubHeader>Sign up for a free account</SubHeader>
        <Form action="">
          <Input
            type="text"
            placeholder="First name"
            name="first_name"
            value={first_name}
          />
          <Input
            type="text"
            placeholder="Last name"
            name="last_name"
            value={last_name}
          />
          <Input
            type="text"
            placeholder="Email address"
            name="email"
            value={email}
          />
          <Input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
          />
          <Input
            type="text"
            placeholder="Confirm password"
            name="confirm_password"
            value={confirm_password}
          />
          <Button>Create Account</Button>
        </Form>
        <div>
          <p>
            Already have an account? <span>Sign in</span>
          </p>
          <p>Terms and Conditions</p>
        </div>
      </Container>
    );
  }
}

export default SignupContainer;
