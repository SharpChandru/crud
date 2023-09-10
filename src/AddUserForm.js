import { useState } from "react";

function AddUserForm(props){

const initialFormState={id:null,name:'',username:''}
const [newUser,setNewUser]=useState(initialFormState);

function handleChange(e){
const {name,value}=e.target;
setNewUser((oldData)=>{return{...oldData,[name]:value}});
console.log("new",newUser);
}

return(
    <form onSubmit={(e)=>{
    
          e.preventDefault();
            if(!newUser.name&&!newUser.username) return;
            props.adduser(newUser);
            setNewUser(initialFormState);
    }
    }>
        <label>name</label>
        <input type="text" name='name' onChange={handleChange} value={newUser.name}/>
        <label>username</label>
        <input type='text' name='username' onChange={handleChange} value={newUser.username} />
        <button>Add new user</button>
                </form>
)
}
export default AddUserForm;