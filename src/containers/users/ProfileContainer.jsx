import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 200px;
  padding: 25px;
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 800px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
`;

const EditButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #03176a;
`;

const Bottom = styled.div`
  display: flex;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.div`
  font-size: 18px;
  padding: 15px 0;
`;

const Item = styled.div`
  fonts-size: 24px;
`;

class ProfileContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    num_cards: 0
  };

  handleProfile = () => {
    if (this.props.userData.board_columns) {
      this.setState({
        num_cards: this.props.userData.board_columns[0].cards.length
      });
    }

    this.setState({
      first_name: this.props.userData.first_name,
      last_name: this.props.userData.last_name,
      email: this.props.userData.email
      // num_cards: this.props.userData.board_columns[0].cards
    });

    console.log(this.props);
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
        <Top>
          <Name>
            {this.state.first_name} {this.state.last_name}
          </Name>
          <EditButton>Edit Profile</EditButton>
        </Top>
        <Bottom>
          <ProfileDetails>
            <SubHeader>Profile Details</SubHeader>
            <Item>{this.state.email}</Item>
            <Item>Account created at {this.props.userData.created_at}</Item>
            <Item>{this.state.num_cards} saved jobs!</Item>
          </ProfileDetails>
        </Bottom>
      </Container>
    );
  }
}

export default ProfileContainer;
