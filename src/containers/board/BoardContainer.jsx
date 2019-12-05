import React, { Component } from "react";
import styled from "styled-components";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  margin-left: 200px;
  display: flex;
`;

class BoardContainer extends Component {
  onDragStart = () => {
    document.body.style.backgroundColor = "lightgrey";
    document.body.style.transition = "background-color 0.2s ease";
  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index /
        this.props.board[update.source.droppableId - 1].cards.length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    document.body.style.transition = "background-color 0.2s ease";
  };

  onDragEnd = result => {
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;
    // console.log(destination, source, draggableId); {droppableId: "3", index: 0} {index: 0, droppableId: "4"} "6"

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.props.board[source.droppableId - 1];
    const finish = this.props.board[destination.droppableId - 1];
    const card = start.cards.filter(
      card => card.id === parseInt(draggableId)
    )[0];

    // console.log(start, finish, card);

    // Moving cards within a column
    if (start === finish) {
      const newCards = Array.from(start.cards);
      newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, card);

      const newColumn = {
        ...start,
        cards: newCards
      };

      this.props.handleCardChange(newColumn, result);
    } else {
      // Moving cards between columns

      const startCards = Array.from(start.cards);
      startCards.splice(source.index, 1);

      const newStart = {
        ...start,
        cards: startCards
      };

      const finishCards = Array.from(finish.cards);
      finishCards.splice(destination.index, 0, card);

      const newFinish = {
        ...finish,
        cards: finishCards
      };

      const obj = this.props.userData;
      obj.board_columns[newStart.id - 1] = newStart;
      obj.board_columns[newFinish.id - 1] = newFinish;

      this.props.handleChangeBetweenColumns(obj, finish, card);
    }
  };

  render() {
    const columns = this.props.board;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
      >
        <Container>
          {columns !== undefined
            ? columns.map(column => <Column key={column.id} column={column} />)
            : null}
        </Container>
      </DragDropContext>
    );
  }
}

export default BoardContainer;
