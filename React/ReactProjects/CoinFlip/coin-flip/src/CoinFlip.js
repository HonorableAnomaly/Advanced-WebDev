import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlip.css";
import { choice } from "./helpers";

class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://catalog.usmint.gov/on/demandware.static/-/Sites-usm-master-catalog-us/default/dw1f5f82a9/images/hi-res/coin-programs/Kennedy-Half-Dollar/17kb_b.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinFlip">
        <h1>Let's flip a Coin!</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip the Coin!</button>
        <h2>
          Out of {this.state.nFlips} flips there have been {this.state.nHeads} heads and {this.state.nTails} tails.
        </h2>
      </div>
    );
  }
}

export default CoinFlip;
