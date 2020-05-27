import React, { Component } from "react";
import Input from "./Components/Input/Input";
import "./App.css";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      toDoState: {
        text: "",
        key: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      toDoState: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = this.state.toDoState;
    if (newItem.text !== "") {
      this.setState({
        items: [...this.state.items, newItem],
        toDoState: {
          text: "",
          key: "",
        },
      });
    }
  };

  taskComplete = (key) => {
    let updatedItem = this.state.items.filter(ele => ele.key !== key);
    this.setState({
      items: updatedItem
    })
  }

  updateToDo = (text, key) => {
    let updatedItem = this.state.items;
    updatedItem.map(ele => {
      if(ele.key === key){
          ele.text = text
    
      }
    })
    this.setState({
      items: updatedItem
    })
  }

  today = new Date();

  render() {
    return (
      <div className="toDoContainer">
        <h4>To Do List</h4>
        <h5>
          Date:{" "}
          {` ${this.today.getDate()} / ${this.today.getMonth()} / ${this.today.getFullYear()}`}{" "}
        </h5>
        <Input toDoItem={this.state.items} taskComplete={this.taskComplete} updateToDo={this.updateToDo}/>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add Item"
            type="text"
            value={this.state.toDoState.text}
            onChange={this.handleChange}
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default App;
