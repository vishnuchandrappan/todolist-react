import React, { Component } from "react";
import uuid from 'uuid';
import AddTodo from "./components/AddTodo.js";
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import "./styles/App.css";

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn Rails",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Learn React",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Learn Redux",
        completed: false
      }
    ]
  };

  // Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    let newTitles = title.split(",");
    let newTodos = [];
    newTitles.forEach(newTitle => {
      if (newTitle.trim()) {
        newTodos.push({
          id:uuid.v4(),
          title: newTitle,
          completed: false
        });
      }
    });
    this.setState({
      todos: this.state.todos.concat(newTodos)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
