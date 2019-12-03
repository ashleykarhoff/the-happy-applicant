import React, { Component } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

class BoardContainer extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.props.board[source.droppableId - 2];
    const card = column.cards.filter(
      card => card.id === parseInt(draggableId)
    )[0];
    const newCards = Array.from(column.cards);
    newCards.splice(source.index, 1);
    newCards.splice(destination.index, 0, card);

    const newColumn = {
      ...column,
      cards: newCards
    };

    this.props.handleCardChange(newColumn, result);
  };

  render() {
    const columns = this.props.board;
    return (
      <div id="board">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {columns !== undefined
            ? columns.map(column => <Column column={column} />)
            : null}
        </DragDropContext>
      </div>
    );
  }
}

export default BoardContainer;
