import { Link } from "react-router";
import { UserContext } from "./App";
import { useContext } from "react";

export default function FooterNav() {
  const { user, setUser } = useContext(UserContext);
  return (
   
      <footer className="footer-nav">
        <UserContext.Provider value={{ user, setUser }}>
        {/* <img id='logo' src={logo} alt="M.I Logo" /> */}
        <Link to={user ? "/schedule" : "/services"} id="nav-link">
          {" "}
          <div className="nav-bar">{user ? "Schedule Service" : "Services"}</div>
        </Link>
        <Link to="/Careers" id="nav-link">
          <div className="nav-bar">Careers</div>
        </Link>
        <Link to="/contact" id="nav-link">
          <div className="nav-bar">Contact</div>
        </Link>
        <Link to="/getquote" id="nav-link">
            <div className="nav-bar">{user ? null : "Get Quote"}</div>
          </Link>
        </UserContext.Provider>
      </footer>
  
  );
}
