import { useState } from "react"

function Task2(){
    const [languages,setLanguages]=useState(['html','css','javascript']);
    const [data,setData]=useState();
    console.log('data',data)
    function Add(){
        setLanguages((pv)=>{return [...pv,data]});
        setData('')
   
    }
    return (
        <>
        <h1>Languages</h1>
        <ul>
            {languages.map((l,index)=><li key={index}>{l}</li>)}
        </ul>
        <input type='text' onChange={(e)=>setData(e.target.value)} value={data}/>
        <button onClick={Add}>Add</button>
        </>
    )
}
export default Task2;