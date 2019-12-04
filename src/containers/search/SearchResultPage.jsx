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
  width: "100px"
};

class SearchResultPage extends Component {
  onJobSave = () => {
    const job =
      this.props.jobs.filter(job => job.id === this.props.id)[0] || {};
    this.props.handleJobSave(job);
  };

  render() {
    const job =
      this.props.jobs.filter(job => job.id === this.props.id)[0] || {};
    return (
      <Container>
        {/* {console.log(job)} */}
        <Company>{job.company}</Company>
        <Title>{job.title}</Title>
        <Location>{job.location}</Location>
        <Description>{job.description}</Description>
        <img
          src={job.company_logo}
          alt={`${job.company} logo`}
          style={imgStyle}
        />
        <Link to={job.company_url}>
          <CompanyLink>Learn more about {job.company}</CompanyLink>
        </Link>
        <div onClick={this.onJobSave}>Save to Board</div>
        <Link to={job.url}>
          <Button>Apply</Button>
        </Link>
      </Container>
    );
  }
}

export default SearchResultPage;
