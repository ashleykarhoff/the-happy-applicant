import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

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
    );
  }
}

export default Task;
