 
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <div className="navbar">
     
     <Link to="/" className="navbar-items">Proizvodi  </Link>
      
     <Link to="/korpa" className="navbar-items">
       <p>Korpa</p>
        
     </Link>

     
     

       <Link to="/kontakt" className="navbar-items"> Kontakt </Link>
   </div>
    
  );
}

export default Navbar;
