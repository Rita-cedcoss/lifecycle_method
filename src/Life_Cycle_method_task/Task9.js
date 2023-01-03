import React, { Component } from "react";

export class Task9 extends Component {
  componentWillUnmount() {
    alert("component did unmount");
  }
  render() {
    return <div>Task6</div>;
  }
}

export default Task9;
