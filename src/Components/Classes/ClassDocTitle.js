import React, { Component } from "react";

class ClassDocTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  incCount = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 1 };
    });
  };

  componentDidMount() {
    document.title = `Doc Count ${this.state.count}`;
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.count !== this.state.count) {
      console.log("Updating the count");
      document.title = `Doc Count ${this.state.count}`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.incCount}>
          {" "}
          Count Value is {this.state.count}{" "}
        </button>
      </div>
    );
  }
}

export default ClassDocTitle;
