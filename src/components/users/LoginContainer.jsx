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

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header>Welcome back!</Header>
        <Text>
          Gone are the dark days of Excel spreadsheets and copy and pasting to
          organize your job search. Join the Happy Applicant community for
          access.
        </Text>
        <SubHeader>Sign into your account!</SubHeader>
        <Form action="">
          <Input type="text" placeholder="Email address" />
          <Input type="text" placeholder="Password" />
          <Button>Login</Button>
        </Form>
        <div>
          <p>
            Need to create an account? <span>Sign up</span>
          </p>
          <p>Forgot password?</p>
          <p>Terms and Conditions</p>
        </div>
      </Container>
    );
  }
}

export default LoginContainer;
