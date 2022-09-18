import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: ["#03045e", "#023e8a", "#0096c7", "#48cae4", "#90e0ef"]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => <Box colors={this.props.allColors} />);
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
