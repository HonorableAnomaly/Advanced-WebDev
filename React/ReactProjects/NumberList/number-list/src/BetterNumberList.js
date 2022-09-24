import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.remove = this.remove.bind(this);
  }
  remove(num) {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num)
    }));
  }
  render() {
    // Don't use idx to make keys if you are going to reorder or change your data
    let nums = this.state.nums.map((n, idx) => <BetterNumberItem key={idx} value={n} remove={this.remove} />);
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
