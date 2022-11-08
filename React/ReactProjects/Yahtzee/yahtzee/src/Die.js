import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 6
  };
  constructor(props) {
    super(props);

    this.handleIndex = this.handleIndex.bind(this);
  }
  handleIndex() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = `Die fa-solid fa-dice-${numberWords[val - 1]} `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
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
