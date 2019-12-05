import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import SvgBackArrow from "../../icons/back-arrow";
import parse from "html-react-parser";

const Container = styled.div`
  margin-top: 80px;
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
  max-width: 350px;
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

class SearchResultPage extends Component {
  onJobSave = () => {
    const job =
      this.props.jobs.filter(job => job.id === this.props.id)[0] || {};
    this.props.handleJobSave(job);
  };

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    const job =
      this.props.jobs.filter(job => job.id === this.props.id)[0] || {};
    const description = parse(job.description) || {};
    return (
      <Container>
        <Top>
          <img
            src={job.company_logo}
            alt={`${job.company} logo`}
            style={imgStyle}
          />
          <JobDetails>
            <Company>{job.company}</Company>
            <Title>{job.title}</Title>
            <Location>{job.location}</Location>
          </JobDetails>
          <CTAs>
            <Button onClick={this.onJobSave}>Save</Button>
            <Link to={job.url}>
              <Button>Apply</Button>
            </Link>
          </CTAs>
        </Top>
        <Link to="/search">
          <SvgBackArrow />
        </Link>
        <SubHeader>Job Description</SubHeader>
        <Description>{description}</Description>
        <Link to={job.company_url}>
          <CompanyLink>Learn more about {job.company}</CompanyLink>
        </Link>
      </Container>
    );
  }
}

export default SearchResultPage;
