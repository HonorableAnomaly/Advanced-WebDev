import React, { Component } from "react";
import "./ToDo.css";

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeToDo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }
  handleToggle(evt) {
    this.props.toggleToDo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="ToDo">
          <form className="ToDo-edit-form" onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="ToDo ToDo-buttons">
          <li className={this.props.complete ? "ToDo-task complete" : "ToDo-task"} onClick={this.handleToggle}>
            {this.props.task}
          </li>
          <button onClick={this.toggleForm}>
            <i class="fa-regular fa-pen"></i>
          </button>
          <button onClick={this.handleRemove}>
            <i class="fa-regular fa-trash"></i>
          </button>
        </div>
      );
    }
    return result;
  }
}
