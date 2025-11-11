import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './one.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Ankita react + vite project</h1>
      <One/>
    </>
    //fragment jsx sentax jsx

  )
}

export default App
