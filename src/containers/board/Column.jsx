import React, { Component } from "react";

class Column extends Component {
  render() {
    const { column } = this.props;
    return (
      <div className="column">
        <div className="title">{column.title}</div>
      </div>
    );
  }
}

export default Column;
