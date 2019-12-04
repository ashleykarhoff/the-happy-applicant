import React, { Component } from "react";
import styled from "styled-components";
// import { Link } from "@reach/router";

const Container = styled.div`
  margin-left: 200px;
  padding: 25px;
`;

const Top = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: 40px auto 80px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const CTAs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
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

const SubHeader = styled.h2`
  font-size: 20px;
  padding-top: 15px;
`;

const Description = styled.div`
  padding-top: 5px;
  max-width: 800px;
  font-size: 18px;
`;

const CompanyLink = styled.h5`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  background-color: #03176a;
  font-size: 22;
  color: white;
`;

const imgStyle = {
  width: "160px",
  alignSelf: "center"
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

  onDelete = () => {
    this.props.handleDeleteCard(this.state.job.id);
  };

  render() {
    const {
      company,
      company_logo,
      // company_url,
      description,
      job_title,
      location
      // url
    } = this.state.job;
    return (
      <Container>
        <Top>
          <img src={company_logo} alt={`${company} logo`} style={imgStyle} />
          <JobDetails>
            <Company>{company}</Company>
            <Title>{job_title}</Title>
            <Location>{location}</Location>
          </JobDetails>
          <CTAs>
            <Button onClick={this.onDelete}>Delete</Button>
            <Button>Apply</Button>
          </CTAs>
        </Top>
        <SubHeader>Job Description</SubHeader>
        <Description>{description}</Description>
        <CompanyLink>Learn more about {company}</CompanyLink>
      </Container>
    );
  }
}

export default CardPage;
