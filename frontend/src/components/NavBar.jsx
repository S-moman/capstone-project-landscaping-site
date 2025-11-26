import { Link } from "react-router";
import logo from "../images/Logo.png";
export default function NavBar() {
  return (
    <header>
      <Link to="/" id="nav-link">
        <h1>Moment Investors Landscaping LLC</h1>
      </Link>
      <nav>
        <Link to="/" id="nav-link">
          <img id="logo" src={logo} alt="M.I Logo" />
        </Link>
        <Link to="/services" id="nav-link">
          <div className="nav-bar">Services</div>
        </Link>
        <Link to="/Careers" id="nav-link">
          <div className="nav-bar">Careers</div>
        </Link>
        {/* <div className="nav-bar">Contact</div> */}
        <Link to="/getquote" id="nav-link">
          <div className="nav-bar">Get Quote</div>
        </Link>
        <Link to="/login" id="nav-link">
          <button className="login-button">Log In</button>
        </Link>
      </nav>
    </header>
  );
}
