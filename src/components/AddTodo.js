import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
      title: ""
  }

  change = (e) => {
    this.setState({
        title: e.target.value
    })
  }

  submit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title.trim());
      this.setState({
          title : ""
      });
  }

  render() {
    return (
      <div style={addTodoStyle}>
        <form
            style={formStyle}
            onSubmit={this.submit}>
          <input
            type="text"
            value={this.state.title}
            style={inputStyle}
            placeholder = "Add todo..."
            onChange = {this.change}
            />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const addTodoStyle = {
  minHeight: "8vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px 0",
  borderRadius: "5px",
};

const formStyle = {
  display: "flex",
  borderRadius: "10px",
  boxShadow: "gray 0 0 20px 0"
};

const inputStyle = {
  border: "0"
};

export default AddTodo;
