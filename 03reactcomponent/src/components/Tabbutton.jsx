

function Tabbutton({children, onSelect}){
    return(
        <button onClick={onSelect}>{children}</button>
    )
}

export default Tabbutton;


// function Tabbutton(props){
//     return(
//         <button>{props.label}</button>
//     )
// }

// export default Tabbutton;

