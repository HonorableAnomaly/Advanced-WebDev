import React, { Component } from "react";

// 3 examples of updating existing state - the third is ideal
class KillCount extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
    this.quintKill = this.quintKill.bind(this);
  }
  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }
  tripleKill() {
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
    this.setState((st) => {
      return { score: st.score + 1 };
    });
  }
  incrementScore(curState) {
    return { score: curState.score + 1 };
  }
  quintKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }
  render() {
    return (
      <div>
        <h1>Enemies bodied: {this.state.score}</h1>
        <button onClick={this.singleKill}>Strike!</button>
        <button onClick={this.tripleKill}>Strike x3!!!</button>
        <button onClick={this.quintKill}>MEGABLAST!!!!!</button>
      </div>
    );
  }
}

export default KillCount;
