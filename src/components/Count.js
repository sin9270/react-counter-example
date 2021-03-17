import React, { Component } from "react";

class Count extends Component {
  render() {
    return <span>Clicked: {this.props.count} times</span>
  }
}

export default Count;
