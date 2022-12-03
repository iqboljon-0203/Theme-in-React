import './Users.css'
import User from '../User/User';
import { useEffect, useState } from 'react';
function Users({setUserId}){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`).then((res)=>res.json()).then((data)=>setUsers(data));
    },[])
    return (
        <>
            {users.length > 0 && (<ol>
                {
                    users.map(user=>(
                        <User setUserId={setUserId} key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
                    ))
                }    
                
            </ol>)}
        </>
    )
}
export default Users;