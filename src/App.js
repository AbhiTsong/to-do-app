import React, { Component } from "react";
import "./App.css";
import ToDo from "./Components/ToDo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      toDoList: {
        text: "",
        key: "",
      },
    };
  }

  handleChange = (eve) => {
    this.setState({
      toDoList: {
        text: eve.target.value,
        key: Date.now(),
      },
    });
  };

  handleSubmit = (eve) => {
    eve.preventDefault();
    let newToDoItem = this.state.toDoList;
    if (newToDoItem.text !== "") {
      this.setState({
        items: [...this.state.items, newToDoItem],
        toDoList: {
          text: "",
          key: "",
        },
      });
    }
  };

  taskDone = (key) => {
    let updatedEvent = this.state.items;
    let newItem = updatedEvent.filter((ele) => ele.key !== key);

    this.setState({
      items: newItem,
    });
  };

  updateToDo = (key, text) => {
    let updatedEvent = this.state.items;
    updatedEvent.map((e) => {
      if (e.key === key) {
        e.text = text;
      }
    });

    this.setState({
      items: updatedEvent,
    });
  };

  render() {
    return (
      <div className="toDoContainer">
        <ToDo
          list={this.state.items}
          handleClick={this.taskDone}
          updateToDo={this.updateToDo}
        />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.toDoList.text}
            onChange={this.handleChange}
            placeholder="Add Task"
          />
          <button> Add Item </button>
        </form>
      </div>
    );
  }
}

export default App;
