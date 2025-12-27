import { googleLogout } from "@react-oauth/google";
import { useNavigate, Link } from "react-router";
import logo from "../images/Logo.png";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";
import { useState, useContext } from "react";
import { UserProvider, UserContext } from "../context/UserProvider";

export default function UserHome() {
  const user = useContext(UserContext);
  console.log("User Context in UserHome:", user);
  const [hide, toggleHide] = useState(true);
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
        {/* <NavBar /> */}
        <main className="user-home">
          <header className="user-home__header">
            <div className="user-home__welcome">
              <h1>
                Welcome{" "}
                {user.isLoggedIn
                  ? `${user.customer.name.firstName || user.given_name}`
                  : "User"}
                !
              </h1>
              <p className="muted">Schedule your service today</p>
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
                      user.isLoggedIn
                        ? user.customer.name.firstName || user.given_name
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
                    defaultValue={user.isLoggedIn ? user.customer.email : ""}
                    placeholder="you@example.com"
                  />
                </label>

                <label>
                  Phone
                  <input
                    type="readonly"
                    name="phone"
                    defaultValue={user.isLoggedIn ? user.customer.phone : ""}
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
                        user.isLoggedIn ? user.customer.address?.addressLine1 : ""
                      }
                      placeholder="Street address"
                    />
                  </label>

                  <label>
                    City
                    <input
                      type="readonly"
                      name="city"
                      defaultValue={user.isLoggedIn ? user.customer.address?.city : ""}
                      placeholder="City"
                    />
                  </label>

                  <label>
                    State
                    <input
                      type="readonly"
                      name="state"
                      defaultValue={user.isLoggedIn ? user.customer.address?.state : ""}
                      placeholder="State"
                    />
                  </label>

                  <label>
                    ZIP
                    <input
                      type="readonly"
                      name="zipCode"
                      defaultValue={user.isLoggedIn ? user.customer.address?.zipCode : ""}
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
        <article className="user-home">
          <header className="user-home__header">
            <div className="user-home__welcome">
              <h1>
                Your Scheduled Services{" "}
                {user.isLoggedIn
                  ? `${user.customer.name.firstName || user.given_name}`
                  : "User"}
                !
              </h1>
              <p className="muted">Schedule your service today</p>
            </div>
          </header>
          <section
            className="card user-home__card"
            aria-labelledby="user-info-title"
          >
            <h2 id="user-info-title" className="card__title">
              Schedule
            </h2>

            <form className="user-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row"></div>

              <fieldset className="address">
                <legend>Scheduled Sercive</legend>
                <div className="row">
                  <label className="full">
                    Service
                    <input
                      type="readonly"
                      name="date"
                      defaultValue={user.isLoggedIn ? user.customer.projectDetails : ""}
                      placeholder="No scheduled services"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="project">
                <legend>Project Details</legend>
                <div className="row">
                  <label className="full">
                    Project description
                    <input
                      type="readonly"
                      name="projectDetails"
                      defaultValue={user.isLoggedIn ? user.customer.projectDetails : ""}
                      placeholder="No scheduled services"
                    />
                  </label>

                  <label>
                    Scheduled date
                    <input
                      type="readonly"
                      name="projectStartDate"
                      defaultValue={user.isLoggedIn ? user.customer.projectStartDate : ""}
                      placeholder="No scheduled services"
                    />
                  </label>
                </div>
              </fieldset>

              {/* <div className="form-actions">
              <button type="submit" className="btn btn--secondary">Save</button>
              <button type="button" onClick={() => console.log("Cancel")} className="btn">Cancel</button>
            </div> */}
            </form>
          </section>
        </article>

        {/* <FooterNav /> */}

        <style>{`
        .user-home {
          max-width: 1100px;
          margin: 28px auto;
          padding: 0 20px;
        }
        .user-home__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .user-home__welcome h1 {
          margin: 0 0 4px;
          font-size: 1.6rem;
          color: #0b3d91;
        }
        .muted {
          color: #6b7280;
          margin: 0;
        }
        .card {
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(12, 20, 36, 0.06);
          padding: 20px;
        }
        .card__title {
          margin: 0 0 12px;
          font-size: 1.125rem;
          color: #111827;
        }
        .user-form .row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }
        label {
          display: flex;
          flex-direction: column;
          font-size: 0.875rem;
          color: #374151;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"] {
          margin-top: 6px;
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #f9fafb;
          font-size: 0.95rem;
          outline: none;
        }
        input:focus {
          border-color: #0b3d91;
          box-shadow: 0 0 0 3px rgba(11,61,145,0.06);
          background: #fff;
        }
        fieldset {
          border: none;
          padding: 0;
          margin: 14px 0;
        }
        legend {
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }
        .full {
          grid-column: 1 / -1;
        }
        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 14px;
        }
        .btn {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: #f3f4f6;
          cursor: pointer;
          color: #111827;
          font-weight: 600;
        }
        .btn--primary {
          background: #0b3d91;
          color: #fff;
          border-color: #0b3d91;
        }
        .btn--secondary {
          background: #06b6d4;
          color: #0b1723;
          border-color: #06b6d4;
        }

        @media (max-width: 520px) {
          .user-home__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .user-form .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      </UserProvider>
    </>
  );
}
