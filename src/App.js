import axios from "axios";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid";
import AddTodo from "./components/AddTodo.js";
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import "./styles/App.css";

export class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => {
        this.setState({
          todos: response.data
        });
      });
  }
  // Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          toast.info(todo.completed ? "Marked as Done" : "Marked as not complete")
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
    toast.info("Todo Deleted");
  };

  addTodo = title => {
    let newTitles = title.split(",");
    let newTodos = [];
    newTitles.forEach(newTitle => {
      if (newTitle.trim()) {
        newTodos.push({
          id: uuid.v4(),
          title: newTitle,
          completed: false
        });
      }
    });
    this.setState({
      todos: this.state.todos.concat(newTodos)
    });
    toast.info("Todo Added");
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
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
        />
      </React.Fragment>
    );
  }
}

export default App;
