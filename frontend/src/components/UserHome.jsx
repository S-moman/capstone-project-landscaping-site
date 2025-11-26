import { googleLogout } from "@react-oauth/google";
import { useNavigate, Link } from "react-router";
import logo from "../images/Logo.png";

function UserNav() {
  function handleLogOut() {
    googleLogout();
    navigate("/login");
    console.log("Logging out...");
  }

  return (
    <nav>
      <Link to="/" id="nav-link">
        <img id="logo" src={logo} alt="M.I Logo" />
      </Link>
      <Link to="/schedule" id="nav-link">
        <div className="nav-bar">Schedule Service</div>
      </Link>
      <Link to="/Careers" id="nav-link">
        <div className="nav-bar">Join the Team</div>
      </Link>
      {/* <div className="nav-bar">Contact</div> */}
      <Link to="/contact" id="nav-link">
        <div className="nav-bar">Contact Us</div>
      </Link>
      <Link to="/login" id="nav-link">
        <button onClick={handleLogOut} className="login-button">
          Log Out
        </button>
      </Link>
    </nav>
  );
}

export default function UserHome({ user }) {
  const navigate = useNavigate();

  //   function handleLogOut() {
  //     googleLogout();
  //     navigate("/login");
  //   }

  return (
    <>
      <UserNav />
      <h1>Welcome {user ? user.name.firstName : "User"}!</h1>
      <br />
      <h1>Schedule your sercive today!!!</h1>
      <br />
      <h1>Page Under Contruction...</h1>
      {/* <button onClick={handleLogOut}>Log Out</button> */}
    </>
  );
}
