import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
        <h2>Sorry !!</h2>
        <p> The page cannot be found</p>
         <Link to ="/">Back to the Home...</Link>
        </div>
     );
}
 
export default Notfound;