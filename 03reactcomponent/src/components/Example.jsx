
import { useState } from "react"
import { EXAMPLES } from "../data"
import Tabbutton from "./Tabbutton"
import Section from "./Section"



function Example(){


let [selected , setselected] = useState('components')

  function handleSelect(selectedArgument){
    console.log("selectedArgument:", selectedArgument)
    setselected(selectedArgument)
  }
    return(
      
   <Section title= "Select Example" id="example">
        <menu>
          <Tabbutton onClick={()=>handleSelect('components')}>Components</Tabbutton>
          <Tabbutton onClick={()=>handleSelect('jsx')}>JSX</Tabbutton>
          <Tabbutton onClick={()=>handleSelect('props')}>props</Tabbutton>
          <Tabbutton onClick={()=>handleSelect('state')}>state</Tabbutton>
        </menu>
  
      <div>
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
        <code>
        {EXAMPLES[selected].code}
         </code>
        </pre>
      </div>
    </Section>
    


    )
}

export default Example;
