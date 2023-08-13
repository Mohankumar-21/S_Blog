import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Usefetch from "./Usefetch";


const Home = () => {

const {data : blogs,ispending, error} = Usefetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { ispending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All blogs!" /> }
        
        </div>
     );
}
 
export default Home;