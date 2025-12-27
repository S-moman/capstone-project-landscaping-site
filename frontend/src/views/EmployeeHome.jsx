import { useNavigate, Link } from "react-router";
import logo from "../images/Logo.png";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";
import { useState, useContext } from "react";
import { UserProvider, UserContext } from "../context/UserProvider";

export default function EmployeeHome() {
  const user = useContext(UserContext);
  //   const [customers, setCustomers] = useState([]);
  console.log("User Context in EmployeeHome:", user);
  const navigate = useNavigate();

  function handleclick() {
    console.log("Editing...");
    forms = document.getElementsByClassName("user-form");
    for (let form of form) {
      let inputs = form.getElementsByTagName("input");
      for (let input of inputs) {
        input.type = "text";
      }
    }
  }

  return (
    <>
      <UserProvider value={user}>
        <main className="user-home min-h-screen">
          <header className="user-home__header">
            <div className="user-home__welcome">
              <h1>
                Welcome{" "}
                {user.isLoggedIn
                  ? `${user.employee.name.firstName || user.given_name}`
                  : "User"}
                !
              </h1>
              <p className="muted">What is on the schedule for today?</p>
            </div>
            <button onClick={handleclick} className="btn btn--primary">
              Edit
            </button>
          </header>

          <section
            className="card user-home__card"
            aria-labelledby="user-info-title"
          >
            <h2 id="user-info-title" className="card__title">
              Your Information
            </h2>

            <form className="user-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <label>
                  First name
                  <input
                    type="readonly"
                    name="firstName"
                    defaultValue={
                      user
                        ? user.employee.name.firstName || user.given_name
                        : ""
                    }
                    placeholder="First name"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="readonly"
                    name="email"
                    defaultValue={user ? user.employee.email : ""}
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Phone
                  <input
                    type="readonly"
                    name="phone"
                    defaultValue={user ? user.employee.phone : ""}
                    placeholder="(555) 555-5555"
                  />
                </label>
              </div>

              <fieldset className="address">
                <legend>Address</legend>
                <div className="row">
                  <label>
                    Line 1
                    <input
                      type="readonly"
                      name="addressLine1"
                      defaultValue={
                        user ? user.employee.address?.addressLine1 : ""
                      }
                      placeholder="Street address"
                    />
                  </label>

                  <label>
                    City
                    <input
                      type="readonly"
                      name="city"
                      defaultValue={user ? user.employee.address?.city : ""}
                      placeholder="City"
                    />
                  </label>

                  <label>
                    State
                    <input
                      type="readonly"
                      name="state"
                      defaultValue={user ? user.employee.address?.state : ""}
                      placeholder="State"
                    />
                  </label>

                  <label>
                    ZIP
                    <input
                      type="readonly"
                      name="zipCode"
                      defaultValue={user ? user.employee.address?.zipCode : ""}
                      placeholder="ZIP"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="project">
                <div className="row"></div>
              </fieldset>

              <div className="form-actions">
                <button type="submit" className="btn btn--secondary invisible">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => console.log("Cancel")}
                  className="btn invisible"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
          <section></section>
        </main>
      </UserProvider>
    </>
  );
}
