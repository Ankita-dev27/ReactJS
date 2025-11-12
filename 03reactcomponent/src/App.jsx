import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Core from './components/Coreconcept.jsx'
import { CORE_CONCEPTS } from './data.js'


function App() {
  let [count, setCount] = useState(0)

  const add= ()=>{
  count = count + 1
  setCount(count)
  }

  return (
    <>
    <Header/>
    <main>
      <section id="core-concept">
        <h2>Core Concept</h2>
        <ul>
      <Core title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
      <Core title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} />
      <Core title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} />
      <Core title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} />
      </ul>
      </section>
    </main>
  
    {/* <h1>first counter in react {count}</h1>
    <button onClick= {add}>click </button> */}
   </>
  )
}

export default App
