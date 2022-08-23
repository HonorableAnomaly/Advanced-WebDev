import React, { Component } from "react";

// Binding setState

// class BrokenClick extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicked: false };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     this.setState({ clicked: true });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.clicked ? "Clicked!" : "Not clicked!"}</h1>
//         <button onClick={this.handleClick}>Click me!</button>
//       </div>
//     );
//   }
// }

// export default BrokenClick;

// Alternate syntax for binding using alternate syntax for state

class BrokenClick extends Component {
  state = { clicked: false };
  handleClick = (e) => {
    this.setState({ clicked: true });
  };
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "Not clicked!"}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default BrokenClick;
