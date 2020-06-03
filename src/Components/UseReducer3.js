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

function UseReducerButton3() {
  const [count, dispatch] = useReducer(countReducer, initialState);
  const [count2, dispatch2] = useReducer(countReducer, initialState);
  return (
    <div>
      <h1>Count Val : {count}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <br/>
      <h1>Count2 Val : {count2}</h1>
      <button onClick={() => dispatch2("increment")}>increment</button>
      <button onClick={() => dispatch2("decrement")}>decrement</button>
      <button onClick={() => dispatch2("reset")}>reset</button>
    </div>
  );
}

export default UseReducerButton3;
