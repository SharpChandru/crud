import {useState} from 'react';
function  Task1(){
    const [text,setText]=useState(`""`);
    function True(){
        setText("true");
    }
    function False(){
        setText("false");
    }

    return(
        <>
        <button style={{backgroundColor:"red"}} onClick={True}>True</button>
        <button style={{backgroundColor:"yellow"}} onClick={False} >False</button>
        <h1>{text}</h1>
        </>
    )
}
export default Task1;