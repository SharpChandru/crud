import { useEffect, useState } from "react";

function EditUserForm(props){


    const [editUser,setEditUser]=useState(props.editUser);
    useEffect(()=>{
        setEditUser(props.editUser)
    },[props])
function handleChange(e){
const {name,value}=e.target;
setEditUser({...editUser,[name]:value})

}
return(

<form onSubmit={(e)=>{

e.preventDefault();
props.updateUser(editUser);


}
}>
    <label>name</label>
    <input type='text' name='name' onChange={handleChange} value={editUser.name} />
    <label>username</label>
    <input type='text' name='username' onChange={handleChange} value={editUser.username}/>
    <button>Update User</button>
    <button onClick={()=>{props.setEditing(false)}}>cancel</button>
</form>

)

}
export default EditUserForm;