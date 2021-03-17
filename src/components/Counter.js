import React, { Component } from "react";
import IncrementButton from "./IncrementButton";
import Count from "./Count";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value.count % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement, onOverride, onChangeNum } = this.props;
    return (
      <p>
        <Count count={value.count} />{" "}
        <input
          style={{ width: 50 }}
          value={value.inputNum}
          onChange={(e) => onChangeNum(+e.target.value)}
        />{" "}
        <IncrementButton onIncrement={onIncrement} />{" "}
        <button onClick={() => onDecrement()}>-</button>{" "}
        <button onClick={() => onOverride()}>Override</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
