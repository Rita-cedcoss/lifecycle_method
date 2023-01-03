import React, { Component } from 'react'

export class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: "dark",
        };
      }
    //   getDerivedStateFromProps function
    static getDerivedStateFromProps(props, state) {
        return {
          theme: props.bgcolor,
        };
      }
    render() {
    return (
        <div className={`outer ${this.state.theme}`}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    )
  }
}

export default Task2