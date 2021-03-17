import React, { Component } from "react";

class IncrementButton extends Component {
  render() {
    return <button onClick={() => this.props.onIncrement()}>+</button>
  }
}

export default IncrementButton;
