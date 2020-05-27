import React from "react";
import "./input.css";

function Input({ toDoItem, taskComplete, updateToDo }) {
  let toDoList = toDoItem.map((ele) => {
    return (
      <div key={ele.key} className="inputContainer">
        <p>
          <input
            type = "text"
            value = {ele.text}
            onChange={(eve) => updateToDo(eve.target.value, ele.key)}
          />
          <span onClick={() => taskComplete(ele.key)} >&#10008;</span>
        </p>
      </div>
    );
  });
  return <>{toDoList}</>;
}

export default Input;
