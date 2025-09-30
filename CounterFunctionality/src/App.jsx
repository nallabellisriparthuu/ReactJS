import { useState } from "react"

function App() {

  let [count, setCount] = useState(0);

  function onIncrement(max){
    setCount((num)=>{
      let nextNum = num + 1;
      let myValue = nextNum > max ? max : nextNum;
      return myValue
    })
  }

  function onDecrement(){
    setCount(num => Math.max(0, num -1))
  }
  return (
  <>
    <h3>Counter: {count}</h3>
    <button onClick={() => onIncrement(108)}>Increment</button>
    <br /><br />
    <button onClick={onDecrement}>Decrement</button>
  </>  
  )
}

export default App
