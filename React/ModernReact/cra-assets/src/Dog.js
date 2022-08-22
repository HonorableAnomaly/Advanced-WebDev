import React, { Component } from "react";
import "./Dog.css";
import pup from "./pup.jpg";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>I'm just a baby doggy!</h1>
        <img className="Dog-img" src={pup} alt="pup" />
      </div>
    );
  }
}

export default Dog;
