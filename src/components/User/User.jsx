import './User.css';
function User({id,name,username,email,setUserId}){
    return(
        <li className='user' onClick={()=>setUserId(id)}>
            <h3>
                {name}
            </h3>
            <p>@{username}</p>
            <p>{email}</p>
        </li>
    )
}
export default User;
