import React, { Component } from "react";
import { connect } from 'react-redux';

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
    const { value, onDecrement, onOverride, onChangeNum } = this.props;
    return (
      <p>
        <input
          style={{ width: 50 }}
          value={value.inputNum}
          onChange={(e) => onChangeNum(+e.target.value)}
        />{" "}
        <button onClick={() => onDecrement()}>-</button>{" "}
        <button onClick={() => onOverride()}>Override</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onOverride: () => dispatch({ type: "OVERRIDE" }),
    onChangeNum: (num) => dispatch({ type: "CHANGE_NUM", payload: num }),
  };
};

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default ConnectedCounter;
