import { useState } from "react" 

function App() {
  const [color, setColor] = useState("black");

  function onChangeGreen(){
    setColor("green")
  }

  function onChangePink(){
    setColor("pink")
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center" style={{backgroundColor: color}}>
      <div className="w-auto fixed flex flex-wrap bottom-12 gap-4 p-3 bg-gray-500 rounded-lg">
        <button onClick={()=>{setColor("red")}} className="text-black" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>{setColor("yellow")}} className="text-black" style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={()=>{setColor("blue")}} className="text-black" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={onChangeGreen} className="text-black"   style={{backgroundColor: "green"}}>Green</button>
        <button onClick={onChangePink} className="text-black" style={{backgroundColor: "pink"}}>Pink</button>
        
        {/* <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button>
        <button>Red</button> */}
      </div>
    </div>
  )
}

export default App
