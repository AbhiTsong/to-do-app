import React, { useReducer } from "react";

let initialState = 0;

const countReducer = (initState, action) => {
  switch (action) {
    case "increment":
      return initState + 1;
    case "decrement":
      return initState - 1;
    case "reset":
      return initialState;
    default:
      return initState;
  }
};

function UseReducerButton() {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>Count Val : {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducerButton;
