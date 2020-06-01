import React, {useState, useEffect} from 'react'

function FuncCounter() {
 
 const [count, setCount] = useState(0)

 let tick = () => {
  setCount(prevCount => prevCount + 1)
 }
 
 useEffect(() => {
  let interval = setInterval( tick ,1000)

   return () => clearInterval(interval)
 }, [ ])



 return (
  <div>
   <h3>{count}</h3>  
  </div>
 )
}

export default FuncCounter