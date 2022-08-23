import React, { Component } from "react";

// Constructor syntax
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
      </div>
    );
  }
}

export default Game;

// Alternate syntax using Babel
// class Game extends Component {
//   state = {
//     score: 0,
//     gameOver: false,
//   };
//   render() {
//     return (
//       <div>
//         <h1>Your score is: {this.state.score}</h1>
//       </div>
//     );
//   }
// }

// export default Game;
