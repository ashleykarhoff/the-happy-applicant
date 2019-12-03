import React, { Component } from "react";
import Column from "./Column";

class BoardContainer extends Component {
  render() {
    const columns = this.props.board;

    return (
      <div id="board">
        {columns !== undefined
          ? columns.map(column => <Column column={column} />)
          : null}
      </div>
    );
  }
}

export default BoardContainer;
