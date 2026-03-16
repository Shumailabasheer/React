import React from 'react'
import { useReducer } from 'react';

//====switch(action.type) reducer ko batata haikonsa action perform karna 
// hai(increment, decrement, reset)==//

let initialState={count:0}
const reducer =(state,action)=>{

  switch (action.type) {
    case "INCREAMENT":
      
      return { count: state.count + 1 };
    case "DECREAMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}


const useReducer = () => {
    const[state,dispatch]=useReducer(reducer,initialState)

  return (
  <>
   <h1>Count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREAMENT"})} >Increament</button> 
      <button onClick={()=>dispatch({type:"DECREAMENT"})}>Decreament</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

  
  </>
  )
}

export default useReducer
