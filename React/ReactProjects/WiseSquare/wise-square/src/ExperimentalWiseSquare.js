import React, { Component } from "react";
import "./WiseSquare.css";

class ExperimentalWiseSquare extends Component {
  dispenseWisdom = () => {
    console.log("THIS IS...", this);
    let messages = [
      // Sage advice goes here
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  };
  render() {
    return (
      <div className="ExperimentalWiseSquare" onMouseEnter={this.dispenseWisdom}>
        🙂
      </div>
    );
  }
}

export default ExperimentalWiseSquare;
