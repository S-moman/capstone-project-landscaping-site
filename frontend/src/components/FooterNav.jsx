import { Link } from "react-router";

export default function FooterNav() {
  return (
   
      <footer className="footer-nav">
        {/* <img id='logo' src={logo} alt="M.I Logo" /> */}
        <Link to="/services" id="nav-link">
          {" "}
          <div className="nav-bar">Services</div>
        </Link>
        <Link to="/Careers" id="nav-link">
          <div className="nav-bar">Careers</div>
        </Link>
        <Link to="/contact" id="nav-link">
          <div className="nav-bar">Contact</div>
        </Link>
        <Link to="/getquote" id="nav-link">
          <div className="nav-bar">Get Quote</div>
        </Link>
      </footer>
  
  );
}
