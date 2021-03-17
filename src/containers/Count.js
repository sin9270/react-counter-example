import React, { Component } from "react";
import { connect } from 'react-redux';

class Count extends Component {
  render() {
    return <span>Clicked: {this.props.count} times</span>
  }
}

const mapStateToProps = (state) => {
  return {count: state.count};
};

// こう書くこともできる
// const mapStateToProps = ({count}) => {
//   return { count };
// };

const ConnectedCount = connect(
  mapStateToProps,
  null,
)(Count);

export default ConnectedCount;
