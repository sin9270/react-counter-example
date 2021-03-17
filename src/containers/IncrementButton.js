import React, { Component } from "react";
import { connect } from 'react-redux';

class IncrementButton extends Component {
  render() {
    return <button onClick={() => this.props.test()}>+</button>
  }
}

const mapDispatchToProps = dispatch => {
  return { test: () => dispatch({ type: "INCREMENT" }) };
};

const connectedIncrementButton = connect(
  null,
  mapDispatchToProps,
)(IncrementButton);

export default connectedIncrementButton;
