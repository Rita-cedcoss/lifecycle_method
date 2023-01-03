import React, { Component } from 'react'

export class Task5 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          theme: "dark",
          flag: true,
        };
      }
    // call function on button click
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
    // get Derived state from props function 
      static getDerivedStateFromProps(props, state) {
        return {
          theme:"light",
        };
      }
    // task6:Use shouldComponentUpdate() method to stop re-rendring the  changes.
    shouldComponentUpdate() {
        return false;
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
        <button onClick={this.switchTheme}>Toggle Theme</button>
      </div>   
    )
  }
}

export default Task5