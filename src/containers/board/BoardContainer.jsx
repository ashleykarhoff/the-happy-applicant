import React, { Component } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

class BoardContainer extends Component {
  onDragEnd = () => {
    // TODO
  };

  render() {
    const columns = this.props.board;
    return (
      <div id="board">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {columns !== undefined ? (
            // ? columns.map(column => <Column column={column} />)
            <Column column={columns[0]} />
          ) : null}
        </DragDropContext>
      </div>
    );
  }
}

export default BoardContainer;
