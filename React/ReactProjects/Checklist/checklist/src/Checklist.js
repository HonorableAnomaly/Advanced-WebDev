import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import "./Checklist.css";

export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTasks = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      tasks: updatedTasks
    });
  }
  toggleCompletion(id) {
    const updatedTasks = this.state.tasks.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({
      tasks: updatedTasks
    });
  }
  render() {
    const tasks = this.state.tasks.map((todo) => {
      return (
        <ToDo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          complete={todo.complete}
          removeToDo={this.remove}
          updateToDo={this.update}
          toggleToDo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="Checklist">
        <h1>
          React Checklist <span>A simple React checklist</span>
        </h1>
        <ul>{tasks}</ul>
        <NewToDoForm createTask={this.create} />
      </div>
    );
  }
}
