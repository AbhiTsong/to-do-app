import React, {useState, useEffect} from 'react'

function FuncMouseLog() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  let logMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect((e) => {
    window.addEventListener("mousemove", logMousePosition)
    return () => window.removeEventListener("mousemove", logMousePosition)
  }, [])

  return (
    <div>
      <h1>X Mouse Position {x}</h1>    
      <h1>Y Mouse Position {y}</h1>    
    </div>
  )
}

export default FuncMouseLog
