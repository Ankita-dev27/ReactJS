import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Core from './components/Coreconcept.jsx'
import { CORE_CONCEPTS } from './data.js'
import Tabbutton from './components/Tabbutton.jsx'
import { EXAMPLES } from './data.js'


function App() {
  let [count, setCount] = useState(0)

  const add= ()=>{
  count = count + 1
  setCount(count)
  }
 let [selected , setselected] = useState('components')

  function handleSelect(selectedArgument){
    console.log("selectedArgument:", selectedArgument)
    setselected(selectedArgument)
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
      <section id="example">
        <h2>Example</h2>
        <menu>
          {/* <Tabbutton label="Coponents"/>
          <Tabbutton label="JSX"/>
          <Tabbutton label="props"/>
          <Tabbutton label="state"/> */}
          <Tabbutton onSelect={()=>handleSelect('components')}>Components</Tabbutton>
          <Tabbutton onSelect={()=>handleSelect('jsx')}>JSX</Tabbutton>
          <Tabbutton onSelect={()=>handleSelect('props')}>props</Tabbutton>
          <Tabbutton onSelect={()=>handleSelect('state')}>state</Tabbutton>
        </menu>
      </section>
      <div>
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
<pre>
  <code>
{EXAMPLES[selected].code}
  </code>
</pre>
      </div>
    </main>
  
    {/* <h1>first counter in react {count}</h1>
    <button onClick= {add}>click </button> */}
   </>
  )
}

export default App
