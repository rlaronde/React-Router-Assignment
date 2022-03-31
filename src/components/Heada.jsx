/* imports */
import {Link} from "react-router-dom";


/*content */
export default function Heada() {
    return (          
      <header>
          <img src={require('../assets/images/logo.png')} alt="logo"/>
          <h1>Robert LaRonde</h1>
          <h4>Digital Designer <span> | </span> Writer <span> | </span> Podcast Producer {" "} </h4>
          <nav>
            <Link to="/home">Home</Link> |{" "} 
            <Link to="/about">About</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/contact">Contact</Link> |{" "}
          </nav>
      </header>     
    );
  }