import React from "react";
import "./ToDoList.css";

function ToDoList({ items, removeTask, updateToDo }) {
  let toDoItems = items.map((item) => {
    return (
      <div className="toDoItems" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => updateToDo(e.target.value, item.key)}
          />

          <span onClick={() => removeTask(item.key)}>&#10008;</span>
        </p>
      </div>
    );
  });
  return <div>{toDoItems}</div>;
}

export default ToDoList;
