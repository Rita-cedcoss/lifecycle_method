import React, { Component } from "react";
import Task9 from "./Task9";
export class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      flag: true,
      status: true,
    };
  }
  switchTheme = () => {
    if (this.state.flag) {
      this.setState({
        theme: "light",
        flag: false,
      });
    } else {
      this.setState({
        flag: true,
        theme: "dark",
      });
    }
  };
  //for unmount
  delComponent = () => {
    this.setState({
      status: false,
    });
  };
  render() {
    let comp;
    if (this.state.status) {
      comp = <Task9 />;
    }
    return (
      <div className={`outer ${this.state.theme}`}>
        {/*theme toggle component */}
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button onClick={this.switchTheme}>Toggle Theme</button>
       {/* unmount component */}
        <p>{comp}</p>
        <button onClick={this.delComponent}>Unmount</button>
      </div>
    );
  }
}

export default Task1;
