import PropTypes from "prop-types";
import React, { Component } from "react";

class Todo extends Component {
  getStyle = () => {
    return {
      border: "none",
      padding: "5px",
      display: "inline",
      width: "50vw",
      boxSizing: "border-box",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className="todo" style={todoStyle}>
        <div className="left">
          <input
            type="checkbox"
            checked={completed}
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          <input style={this.getStyle()} type="text" readOnly value={title}/>
        </div>
        <div className="right">
          <button onClick={this.props.deleteTodo.bind(this, id)}> edit </button>
          <button onClick={this.props.deleteTodo.bind(this, id)}> X </button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

const todoStyle = {
  display: "flex",
  alignItems: "center",
  borderBottom: "solid 1px gray",
  justifyContent: "space-between",
  padding: "10px"
};

export default Todo;
