function Tablelist (props){
  
return (
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    
        {props.users.length>0?
            ( props.users.map(user=>
            
      <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
                < button onClick={()=>{props.edit(user)}} >edit</button>
                <button onClick={()=>{props.deleteUser(user.id)}}>delete</button>
            </td>
            </tr>
            
            )
            ):(
                  <tr>
                 <td colSpan={3}>No User</td>
                 </tr>
        )}
        
      
    </tbody>
</table>

)
            }



 

export default Tablelist;