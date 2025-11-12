import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  let [count, setCount] = useState(0)

  const add= ()=>{
  count = count + 1
  setCount(count)
  }

  return (
    <>
    <Header/>
    <h1>first counter in react {count}</h1>
    <button onClick= {add}>click </button>
   </>
  )
}

export default App
