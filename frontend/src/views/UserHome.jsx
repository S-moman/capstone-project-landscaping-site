import { googleLogout } from "@react-oauth/google";
import { useNavigate, Link } from "react-router";
import logo from "../images/Logo.png";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

// function UserNav() {
//   function handleLogOut() {
//     googleLogout();
//     navigate("/login");
//     console.log("Logging out...");
//   }

//   return (
//     <nav>
//       <Link to="/" id="nav-link">
//         <img id="logo" src={logo} alt="M.I Logo" />
//       </Link>
//       <Link to="/schedule" id="nav-link">
//         <div className="nav-bar">Schedule Service</div>
//       </Link>
//       <Link to="/Careers" id="nav-link">
//         <div className="nav-bar">Join the Team</div>
//       </Link>
//       {/* <div className="nav-bar">Contact</div> */}
//       <Link to="/contact" id="nav-link">
//         <div className="nav-bar">Contact Us</div>
//       </Link>
//       <Link to="/login" id="nav-link">
//         <button onClick={handleLogOut} className="login-button">
//           Log Out
//         </button>
//       </Link>
//     </nav>
//   );
// }

export default function UserHome({ user }) {
  const navigate = useNavigate();

  //   function handleLogOut() {
  //     googleLogout();
  //     navigate("/login");
  //   }

  function handleclick() {
    console.log("Editing...");
  }

  return (
    <>
      <NavBar />
      <h1>Welcome {user ? user.name.firstName : "User"}!</h1>
      <br />
      <h1>Schedule your service today!!!</h1>
      <form className="user-info">
        <h2>Your Information:</h2>
        <p>
          {" "}
          Name:{" "}
          <input
            type="text"
            name="first-name"
            id=""
            placeholder={user ? user.name.firstName : ""}
          />
        </p>
        <p>
          {" "}
          Email:{" "}
          <input
            type="text"
            name="email"
            id=""
            placeholder={user ? user.email : ""}
          />
        </p>
        <p>
          {" "}
          Number :{" "}
          <input
            type="text"
            name="phone"
            id=""
            placeholder={user ? user.phone : ""}
          />
        </p>
        <p>
          {" "}
          Address Line 1:{" "}
          <input
            type="text"
            name="addressLine1"
            id=""
            placeholder={user ? user.address.addressLine1 : ""}
          />
        </p>
        <p>
          City:{" "}
          <input
            type="text"
            name=""
            id=""
            placeholder={user ? user.address.city : ""}
          />
        </p>
        <p>
          State:{" "}
          <input
            type="text"
            name=""
            id=""
            placeholder={user ? user.address.state : ""}
          />
        </p>
        <p>
          {" "}
          Zip Code:{" "}
          <input
            type="text"
            name="zipCode"
            id=""
            placeholder={user ? user.address.zipCode : ""}
          />
        </p>
        <h2>Project Details:</h2>
        <p>
          {" "}
          Project Details:{" "}
          <input
            type="text"
            name="projectDetails"
            id=""
            placeholder={user ? user.projectDetails : ""}
          />
        </p>
        <p>
          {" "}
          Project Start Date:{" "}
          <input
            type="text"
            name="projectStartDate"
            id=""
            placeholder={user ? user.projectStartDate : ""}
          />
        </p>
      </form>
      <button onClick={handleclick} id="edit-button">Edit</button>
      <FooterNav />
    </>
  );
}
