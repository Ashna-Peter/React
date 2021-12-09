import {Link} from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
          <h2>sorry</h2>
          <p>That page is not avaliable</p>  
          <Link to="/">Baclk to the homepage...</Link>
        </div>
        
     );
}
 
export default NotFound;