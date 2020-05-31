import React from "react";
import "./ToDo.css";

function ToDo(props) {
  const { list, handleClick, updateToDo } = props;

  let toDoItemMap = list.map((ele) => {
    return (
      <div className="listContainer" key={ele.key}>
        <p>
          <input 
            type="text" 
            value={ele.text} 
            onChange={(e) => updateToDo(ele.key, e.target.value)}/>
          <span onClick={() => handleClick(ele.key)}>&#10008;</span>
        </p>
      </div>
    );
  });

  return <div>{toDoItemMap}</div>;
}

export default ToDo;
