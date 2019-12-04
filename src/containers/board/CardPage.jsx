import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 200px;
`;

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
    return <Container> {job_title} </Container>;
  }
}

export default CardPage;
