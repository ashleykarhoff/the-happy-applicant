import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "@reach/router";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

class Task extends Component {
  state = {};
  render() {
    return (
      <Link to={`card/${this.props.card.id}`}>
        <Draggable
          draggableId={this.props.card.id.toString()}
          index={this.props.index}
        >
          {(provided, snapshot) => (
            <Container
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.card.job_title}
            </Container>
          )}
        </Draggable>
      </Link>
    );
  }
}

export default Task;
