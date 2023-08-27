import { useParams } from "react-router-dom";
import Usefetch from './Usefetch';
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const {id}= useParams();
    const {data: blog, ispending, error}=Usefetch('http://localhost:8000/blogs/'+id);
    const history = useNavigate();
    const handleDelete=() =>
    {
        fetch('http://localhost:8000/blogs/'+ blog.id, 
        {
            method: "DELETE"

        }
        ).then(()=>
        {
            history('/');
        })
    }
    return ( 
        <div className="blog-details">
        
         {ispending && <div>Loading...</div>}
         {error && <div> { error }</div>}
         {blog && (
           <article>
            <h2>{blog.title}</h2>
            <p className="blog-author">Written by {blog.author}</p>
            <div className="blog-body">{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
           </article>
          
         ) }
        </div>
     );
}
 
export default BlogDetails;