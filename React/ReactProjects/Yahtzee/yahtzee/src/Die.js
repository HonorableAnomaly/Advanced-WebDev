import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);

    this.handleIndex = this.handleIndex.bind(this);
  }
  handleIndex() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, locked, val, disabled } = this.props;
    let classes = `Die fa-solid fa-dice-${numberWords[val - 1]} `;
    if (locked) classes += "Die-locked";
    return (
      <i
        className={classes}
        onClick={this.handleIndex}
        disabled={disabled}
      />
    );
  }
}

export default Die;
