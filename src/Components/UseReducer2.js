import React, { useReducer } from 'react'

const initialState = {
 firstCount: 0,
 secondCount: 0
}

function reduce(state, action){
 switch(action.type){
   case "increment":
    return {...state, firstCount: state.firstCount + action.value }
    case "decrement":
     return {...state, firstCount: state.firstCount + action.value }
     case "reset":
      return initialState
      case "inc5":
       return{...state, firstCount: state.firstCount + action.value}
     default: return state
    }
}

function UseReducer2() {
   const [state, dipatch] = useReducer(reduce, initialState)
 return (
  <div>
   <h1> Count Value {state.firstCount}</h1>
   <button onClick={() => dipatch({type: "increment", value: 1})}>Increment</button>
   <button onClick={() => dipatch({type: "decrement", value: 1})}>Decrement</button>
   <button onClick={() => dipatch({type: "reset"})}>reset</button>
   <button onClick={() => dipatch({type: "inc5", value: 5})}>Inc 5</button>
  </div>
 )
}

export default UseReducer2
