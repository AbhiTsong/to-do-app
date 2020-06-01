import React, { useState, useEffect } from "react";

function FuncDocTitle() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Efffect Called");
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((e) => e + 1)}>
        {" "}
        Number Of Count is {count}
      </button>
    </div>
  );
}

export default FuncDocTitle;
