import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(event) {
    alert("Key pressed!");
    if (event.keycode === 56) {
      alert("If you'd like to leave a voicemail press the star key!");
    } else {
      alert("Boo!");
    }
  }
  render() {
    return (
      <div>
        <h3>Try typing here:</h3>
        <textarea onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}

export default AnnoyingForm;
