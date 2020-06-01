import React, { Component } from "react";

export class ClassMouseLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (eve) => {
    this.setState({
      x: eve.clientX,
      y: eve.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div>
        <h1>Mouse X position {x}</h1>
        <h1>Mouse Y position {y}</h1>
      </div>
    );
  }
}

export default ClassMouseLog;
