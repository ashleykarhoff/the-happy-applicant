import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  margin-left: 200px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const Company = styled.h2`
  margin-bottom: 3px;
  font-size: 22px;
`;

const Location = styled.h3`
  margin-top: 3px;
  font-size: 18px;
`;

const Description = styled.div`
  max-width: 800px;
  font-size: 18px;
`;

// const CompanyLink = styled.h5`
//   font-size: 18px;
//   font-weight: 500;
// `;

const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: #03176a;
  font-size: 22;
  color: white;
`;

const imgStyle = {
  width: "100px"
};

class CardPage extends Component {
  state = {
    job: []
  };

  componentDidMount() {
    this.getJob();
  }

  async getJob() {
    const jobId = this.props.id;
    const response = await fetch(`http://localhost:3000/api/v1/cards/${jobId}`);
    const job = await response.json();

    this.setState({ job: job });
  }

  render() {
    const {
      company,
      company_logo,
      company_url,
      description,
      job_title,
      location,
      url
    } = this.state.job;
    return (
      <Container>
        <Company>{company}</Company>
        <Title>{job_title}</Title>
        <Location>{location}</Location>
        <Description>{description}</Description>
        {/* <Link to={company_url}>
          <CompanyLink>Learn more about {company}</CompanyLink>
        </Link> */}
        <Button>Apply</Button>
        <img src={company_logo} alt={`${company} logo`} style={imgStyle} />
      </Container>
    );
  }
}

export default CardPage;
