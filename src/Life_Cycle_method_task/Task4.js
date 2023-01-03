import React, { Component } from "react";

export class Task4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        theme: "dark",
      });
    }, 5000);
  }
//   console the current state value before updating the state. 
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
   console.log("Before update state value",prevState.theme);
   return null
  }
//   After changing the theme console the updated value of state.
  componentDidUpdate()
  {
    console.log("after update state value",this.state.theme);
  }

  render() {
    return (
      <>
        <div className={`outer ${this.state.theme}`}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </>
    );
  }
}

export default Task4;
