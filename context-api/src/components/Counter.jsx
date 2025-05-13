import React, {useContext} from 'react'
import {CounterContext} from '../context/CounterCoontext.jsx';



function Counter() {
    const counterContext = useContext(CounterContext);
    console.log('counterContext', counterContext)
  return (
    <div>
      <button onClick={()=> counterContext.setCount(counterContext.count+1)}>Increment</button>
      <button onClick={()=> counterContext.setCount(counterContext.count-1)}>Decrement</button>
      <button onClick={()=> counterContext.setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
 