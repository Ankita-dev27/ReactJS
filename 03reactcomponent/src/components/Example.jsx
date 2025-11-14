
import { useState } from "react"
import { EXAMPLES } from "../data"
import Tabbutton from "./Tabbutton"



function Example(){


let [selected , setselected] = useState('components')

  function handleSelect(selectedArgument){
    console.log("selectedArgument:", selectedArgument)
    setselected(selectedArgument)
  }
    return(
<>

   <section id="example">
        <h2>Example</h2>
        <menu>
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
    
</>

    )
}

export default Example;
