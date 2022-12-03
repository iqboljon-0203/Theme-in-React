import './Post.css';
const Post=({id,title,body})=>{
    return(
        <li className='user'>
            <h4>{title}</h4>
            <p>
                {body}
            </p>
        </li>
    )
}
export default Post;