import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
  };
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }
  changeColor(newColor) {
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          const colorObj = { backgroundColor: c };
          return (
            // Two ways to write out this inline bind
            <button style={colorObj} onClick={() => this.changeColor(c)}>
              {/* <button style={colorObj} onClick={this.changeColor.bind(this, c)}> */}
              Color up!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
