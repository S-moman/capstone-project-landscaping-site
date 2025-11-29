import { Link } from "react-router";
import logo from "../images/Logo.png";
import { useContext } from "react";
import { UserContext } from "./App";
export default function NavBar() {
  const { user, setUser } = useContext(UserContext);

  function handleLogOut() {
    setUser(null);
    console.log("Logging out...");
  }

  return (
    <header>
      <UserContext.Provider value={{ user, setUser }}>
        <Link to={!user ? "/" : "/home"} id="nav-link">
          <h1>Moment Investors Landscaping LLC</h1>
        </Link>
        <nav>
          <Link to={!user ? "/" : "/home"} id="nav-link">
            <img id="logo" src={logo} alt="M.I Logo" />
          </Link>
          <Link to={user ? "/schedule" : "/services"} id="nav-link">
            <div className="nav-bar">
              {user ? "Schedule Service" : "Services"}
            </div>
          </Link>
          <Link to="/Careers" id="nav-link">
            <div className="nav-bar">Careers</div>
          </Link>
          {/* <div className="nav-bar">Contact</div> */}
          <Link to="/getquote" id="nav-link">
            <div className="nav-bar">{user ? null : "Get Quote"}</div>
          </Link>
          <Link to="/login" id="nav-link">
            <button onClick={handleLogOut} className="login-button">
              {user ? "Log Out" : "Log In"}
            </button>
          </Link>
        </nav>
      </UserContext.Provider>
    </header>
  );
}
