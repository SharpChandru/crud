import { useState } from "react";

function Myform(){
    // const [name,setName]=useState('');
    // const [age,setAge]=useState();
    // const [email,setEmail]=useState();
    const [inputs,setInputs]=useState({})

function handlechange(e){
const name=e.target.name;
const value=e.target.value;
setInputs((ps)=>{return {...ps,[name]:value}})
}

    function submit(e){
        e.preventDefault();
        console.log('inputs',inputs)
    }
    return (
        <form onSubmit={submit}>
            <label>name :   <input type='text' name='name'  onChange={handlechange} /> </label><br/>
            <label>age :   <input type='text' name='age' onChange={handlechange}  />  </label><br/>
            <label>email :    <input type='text' name='email' onChange={handlechange}  />  </label><br/>
            <input type='submit' value='submit'/>
        </form>

    )
}
export default Myform;