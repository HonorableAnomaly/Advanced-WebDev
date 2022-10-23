import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
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
  render() {
    const tasks = this.state.tasks.map((todo) => {
      return <ToDo key={todo.id} id={todo.id} task={todo.task} removeToDo={this.remove} updateToDo={this.update} />;
    });
    return (
      <div>
        <h1>Checklist</h1>
        <NewToDoForm createTask={this.create} />
        <ul>{tasks}</ul>
      </div>
    );
  }
}
