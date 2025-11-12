import { useState } from "react";



function One(){
let [counter, setCounter] = useState(15);

/*      **** USESTATE HOOK ******

let counter =20
here counter is a normal variable in usestate hook
while setCounter is a function to update the value of counter.
*/
    const add = ()=>{
        //counter = counter +1
        setCounter(counter + 1)
        console.log(counter);
    }

    const decrease = ()=>{
        //counter = counter - 1
        setCounter(counter - 1)
    }
    
    return(
        <>
        <h1>chai aur react </h1>
        <h2>counter variable : {counter}</h2>
        <button onClick={add}>increase value {counter}</button>
        <br></br>
        <button onClick ={decrease}>decrease value {counter} </button>
        </>
    )
}

export default One;
