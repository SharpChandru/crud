import { useState } from "react";
import Tablelist from "./TableList";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

function App() {
const userData=[
  {id:1,name:'mohan',username:'mohanraj'},
  {id:2,name:'prathap',username:'spooky'},
  {id:3,name:'chandru',username:'sharpchandru'}
];

const[users,setUsers]=useState(userData);
const initialFormState={id:null,name:'',username:''};
const [editUser,setEditUser]=useState(initialFormState);
const [editing,setEditing]=useState(false);

function adduser(newUser){
  newUser.id=users.length+1;
  setUsers([...users,newUser])
}

function edit(editdata){
setEditing(true);
  setEditUser({id:editdata.id,name:editdata.name,username:editdata.username});

}
function updateUser(updateUser){
  setEditing(false);
  setUsers(users.map((user)=>user.id===updateUser.id?updateUser:user));

}

function deleteUser(id){
setUsers(users.filter((user)=>user.id!==id));
setEditing(false);
}

  return (
    <>
    <div>
      <h1>crud app with hooks</h1>
    </div>
    {editing? (<div>
      <h1>Edit user</h1>
      <EditUserForm setEditing={setEditing} edit={edit} editUser={editUser} updateUser={updateUser}/>
    </div>):
               ( <div>
                 <h1>Add user</h1>
                <AddUserForm adduser={adduser}/>
              </div>
                )}
   
    <div>
   <h1>view user</h1>
    <Tablelist users={users} edit={edit} deleteUser={deleteUser}/>
    </div>
    </>
  );
}

export default App;
