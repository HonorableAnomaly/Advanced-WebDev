import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTask({ ...this.state, id: uuidv4(), complete: false });
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Task</label>
          <input type="text" placeholder="New ToDo" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}
