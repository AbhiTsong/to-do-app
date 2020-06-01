import React, {useState, useEffect} from "react";
import FuncMouseLog from "./FuncMouseLog";

function UnmountFunc() {
  const [display, setDisplay] = useState(true)

  // useEffect(() => {

  // }, [])

  let removeMouseLog = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <button onClick={removeMouseLog}>Remove Mouse Position</button>
      { display && <FuncMouseLog />}
    </div>
  );
}

export default UnmountFunc;
