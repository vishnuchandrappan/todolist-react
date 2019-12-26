import React, { Component } from "react";
import AddTodo from "./components/AddTodo.js";
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import "./styles/App.css";

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn Rails",
        completed: false
      },
      {
        id: 2,
        title: "Learn React",
        completed: true
      },
      {
        id: 3,
        title: "Learn Redux",
        completed: false
      }
    ],
    lastId: 4
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
    let id = this.state.lastId;
    newTitles.forEach(newTitle => {
      if (newTitle.trim()) {
        newTodos.push({
          id,
          title: newTitle,
          completed: false
        });
        id = id + 1;
      }
    });
    this.setState({
      todos: this.state.todos.concat(newTodos),
      lastId: id
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
