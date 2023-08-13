import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState(""); // Correctly destructuring the useState hook
    const [body, setBody] = useState(""); // Add state for content
    const [author, setAuthor] = useState(""); 
    const [ispending, setIspending] = useState(false);
    const history = useNavigate();

    const  handleSubmit=(event)=>
    {
      event.preventDefault(); 
      const blog = {title, body, author};

      setIspending(true);
      fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(blog)

      }).then(()=>
      {
          setIspending(false);
          //history.go(-1);
          history('/');
      })

    }

    return (
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <label>Blog Content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => {
                        setBody(event.target.value);
                    }}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(event)=>
                {
                    setAuthor(event.target.value)
                }}>
                    <option value="Hari">Hari</option>
                    <option value="Sathish">Sathish</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;
