import Post from "../Post/Post";
import { useEffect, useState } from 'react';
const Posts=({userId})=>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res)=>res.json()).then((data)=>setPosts(data));
    },[userId])
    return (
        <>
            {posts.length>0 && (<ol>
                
                {posts.map((post)=>(
                    <Post key={post.id} id={post.id} title={post.title} body={post.body} />
                ))  }  
            </ol>)}
        </>
    )
}
export default Posts;