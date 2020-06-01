import React, { Component } from "react";
import ClassMouseLog from "./ClassMouseLog";

class ClassUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  handleMouseLog = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const { display } = this.state;
    return (
      <div>
        <button onClick={this.handleMouseLog}>Remove Mouse Log</button>
        { display && <ClassMouseLog />}
      </div>
    );
  }
}

export default ClassUnmount;
