import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import SvgBackArrow from "../../icons/back-arrow";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 200px;
  padding: 25px;
`;

const BackButton = styled.div`
  padding: 15px;
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const SubHeader = styled.h4`
  font-size: 24px;
  margin: 8px;
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

class EditProfile extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: ""
  };

  handleProfile = () => {
    this.setState({
      first_name: this.props.userData.first_name,
      last_name: this.props.userData.last_name,
      email: this.props.userData.email
    });
  };

  componentDidMount() {
    this.handleProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userData !== this.props.userData) {
      this.handleProfile();
    }
  }

  render() {
    return (
      <Container>
        <BackButton>
          <Link to="/profile">
            <SvgBackArrow />
          </Link>
        </BackButton>
        <FormContent>
          <SubHeader>Edit account</SubHeader>
          <Form action="">
            <Input
              type="text"
              placeholder="First name"
              value={this.state.first_name}
            />
            <Input
              type="text"
              placeholder="Last name"
              value={this.state.last_name}
            />
            <Input type="text" placeholder="Email" value={this.state.email} />
            <Button>Save</Button>
          </Form>
        </FormContent>
      </Container>
    );
  }
}

export default EditProfile;
