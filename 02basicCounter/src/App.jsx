/*
- What is Hooks:
- 
*/

import { useState } from "react";
function App() {

  // let counter = 50;
  let [counter, setCounter] = useState(0);

  function onIncrement(lastCount){
    // console.log("value added", Math.floor(Math.random()*10)+1); //This is working fine
    
    counter = counter + 1;
    setCounter(counter);
    // console.log("value added", counter);
  }

  function onDecrement(){
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
      <h1>This is counter</h1>
      <h2>Counter: {counter}</h2>
    
      <button onClick={onIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={onDecrement}>Decrement</button>  
    </>
  )
}

export default App
