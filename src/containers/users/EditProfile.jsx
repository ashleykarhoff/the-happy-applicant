import React, { Component } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import SvgBackArrow from "../../icons/back-arrow";

const Container = styled.div`
  margin-left: 200px;
  padding: 25px;
`;

class EditProfile extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Link to="/profile">
          <SvgBackArrow />
        </Link>
      </Container>
    );
  }
}

export default EditProfile;
