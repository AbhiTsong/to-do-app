import React, { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";

function App() {
  const [change, handleChange] = useState("");
  const [items, addItem] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(change)
    if (change !== "") {
      addItem([...items, { text: change, key: Date.now() }]);
      handleChange("");
    }
  };

  let removeTask = (key) => {
    let item = items.filter((ele) => {
      return ele.key !== key;
    });
    console.log(item);
    addItem([...item]);
  };

  let updateToDo = (value, key) => {
    const allItem = items.map(item => {
      const newItem = {...item};
      if (item.key === key) {
        newItem.text = value;
      }
      return newItem;
    });
    console.log(...allItem);
    addItem(allItem);
  };

  return (
    <div className="toDoContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={change}
          placeholder="Add Item"
        />
        <button>Add Item</button>
      </form>
      <ToDoList items={items} removeTask={removeTask} updateToDo={updateToDo} />
    </div>
  );
}

export default App;
