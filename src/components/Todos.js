import PropTypes from "prop-types";
import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete = {this.props.toggleComplete}
        deleteTodo = {this.props.deleteTodo}
        />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
