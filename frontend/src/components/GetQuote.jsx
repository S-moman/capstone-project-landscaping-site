import { useEffect, useRef, useState } from "react";
import FooterNav from "./FooterNav";
import NavBar from "./NavBar";
import { BASE_URL } from "./App";
import { Link } from "react-router";

export default function GetQuote() {
  const [customers, setCustomers] = useState([]);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const cEmailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);
  const phoneRef = useRef(null);
  const addressLine1Ref = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);
  const projectRef = useRef(null);
  const startDateRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const customer = {
      name: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
      },
      email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      address: {
        addressLine1: addressLine1Ref.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zipCode: zipCodeRef.current.value,
      },
      projectDetails: projectRef.current.value,
      projectStartDate: startDateRef.current.value,
    };
    try {
      const response = await fetch(`${BASE_URL}/customers`, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newCustomer = await response.json();
      console.log(newCustomer);
      setCustomers([...customers, newCustomer]);
    } catch (e) {
      console.log(e.message);
    }
    (firstNameRef.current.value = ""),
      (lastNameRef.current.value = ""),
      (emailRef.current.value = ""),
      (cEmailRef.current.value = ""),
      (passwordRef.current.value = ""),
      (cPasswordRef.current.value = ""),
      (phoneRef.current.value = ""),
      (addressLine1Ref.current.value = ""),
      (cityRef.current.value = ""),
      (stateRef.current.value = ""),
      (zipCodeRef.current.value = ""),
      (projectRef.current.value = ""),
      (startDateRef.current.value = "");
  }

  return (
    <>
      <NavBar />
      <div className="new-cust-container">
        <form className="new-cust-form" onSubmit={handleSubmit}>
          <h2>Name:</h2>
          <div id="cust-input">
            <input
              ref={firstNameRef}
              type="text"
              name="name"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div id="cust-input">
            <input
              ref={lastNameRef}
              type="text"
              name="name"
              id="lastName"
              placeholder="Last name"
            />
          </div>
          <h2>Email:</h2>
          <div id="cust-input">
            <input
              ref={emailRef}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div id="cust-input">
            <input
              ref={cEmailRef}
              type="text"
              name="email"
              id="confirmEmail"
              placeholder="Confirm your Email"
            />
          </div>
          <h2>Password:</h2>
          <div id="cust-input">
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <div id="cust-input">
            <input
              ref={cPasswordRef}
              type="password"
              name="password"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <h2>Phone:</h2>
          <div id="cust-input">
            <input
              ref={phoneRef}
              type="number"
              name="name"
              id="phone"
              placeholder="(412)555-5555"
            />
          </div>
          <h2>Address:</h2>
          <div id="cust-input">
            <input
              ref={addressLine1Ref}
              type="text"
              name="address"
              id="streetAddress"
              placeholder="Address Line 1"
            />
          </div>
          <div id="cust-input">
            <input
              ref={cityRef}
              type="text"
              name="city"
              id="city"
              placeholder="City"
            />
          </div>
          <div id="cust-input">
            <input
              ref={stateRef}
              type="text"
              name="state"
              id="state"
              placeholder="State"
            />
          </div>
          <div id="cust-input">
            <input
              ref={zipCodeRef}
              type="number"
              name="zip-code"
              id="zipCode"
              placeholder="Zip Code"
            />
          </div>
          <h2>Tell us about your project.</h2>
          <div id="cust-input">
            <input ref={projectRef} type="text" id="project-details" />
          </div>
          <h2>Project Start Date:</h2>
          <div id="cust-input">
            <input ref={startDateRef} type="date" id="date" />
          </div>
          <br />
          <button id="cust-submit-button">Submit</button>
          <Link to={"/login"} id="login-link">
            <p>Already have account? Click here!</p>
          </Link>
        </form>
      </div>
      <FooterNav />
    </>
  );
}