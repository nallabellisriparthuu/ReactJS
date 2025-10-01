import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { Card } from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
        username: "Sai",
        age: 10
    }

    let myArra = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
       <Card username="JavaScript" someObj={myObj} someArr={myArra} btn="Click me"/>
       <Card />
    </>
  )
}

export default App
