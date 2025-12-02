import { useEffect, useRef, useState } from "react";
import FooterNav from "../components/FooterNav";
import NavBar from "../components/NavBar";
import { BASE_URL } from "../components/App";
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
      <main className="quote-page container" aria-labelledby="get-quote-heading">
        <section className="quote-card card" aria-labelledby="get-quote-heading">
          <header className="quote-card__header card__header">
            <h1 id="get-quote-heading" className="card__title">
              Get a Free Quote
            </h1>
            <p id="get-quote-sub" className="card__subtitle">
              Tell us about your project and we'll get back to you with a custom estimate.
            </p>
          </header>

          <form
            className="quote-form card__body"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="get-quote-sub"
          >
            <fieldset className="form-section">
              <legend className="form-section__title">Contact information</legend>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    ref={firstNameRef}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    required
                    className="input"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    ref={lastNameRef}
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="input"
                    aria-required="true"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email">Email</label>
                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="input"
                    aria-describedby="email-help"
                  />
                  <small id="email-help" className="form-help">
                    We'll only use this to contact you about your quote & invoices.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmEmail">Confirm email</label>
                  <input
                    ref={cEmailRef}
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    required
                    minLength={8}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    ref={cPasswordRef}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    minLength={8}
                    className="input"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="phone">Phone</label>
                  <input
                    ref={phoneRef}
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="(412) 555-5555"
                    pattern="[\d\(\)\-\s]+"
                    className="input"
                    aria-label="Phone number"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="form-section">
              <legend className="form-section__title">Address</legend>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="streetAddress">Street address</label>
                  <input
                    ref={addressLine1Ref}
                    id="streetAddress"
                    name="addressLine1"
                    type="text"
                    placeholder="123 Main St."
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    ref={cityRef}
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Pittsburgh"
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    ref={stateRef}
                    id="state"
                    name="state"
                    type="text"
                    placeholder="PA"
                    maxLength={2}
                    className="input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">Zip code</label>
                  <input
                    ref={zipCodeRef}
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="15213"
                    pattern="\d{5}(-\d{4})?"
                    className="input"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="form-section">
              <legend className="form-section__title">Project details</legend>

              <div className="form-group full-width">
                <label htmlFor="project-details">Tell us about your project</label>
                <textarea
                  ref={projectRef}
                  id="project-details"
                  name="projectDetails"
                  rows={4}
                  placeholder="Describe the work you'd like done (lawn, hardscaping, planting, timeline, budget, etc.)"
                  className="textarea"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Target start date</label>
                  <input ref={startDateRef} id="date" name="startDate" type="date" className="input" />
                </div>
              </div>
            </fieldset>

            <div className="form-actions">
              <button type="submit" className="button button--primary">
                Request Quote
              </button>

              <Link to={"/login"} id="login-link" className="button button--link">
                Already have an account? Log in
              </Link>
            </div>
          </form>
        </section>
      </main>

      <FooterNav />

      <style>{`
        /* Layout */
        .quote-page.container {
          display: flex;
          justify-content: center;
          padding: 2.5rem 1rem;
          background: linear-gradient(180deg, #f7f9fb 0%, #ffffff 100%);
        }

        .quote-card {
          width: 100%;
          max-width: 920px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(20, 30, 40, 0.08);
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.04);
        }

        .card__header {
          padding: 1.6rem 2rem;
          border-bottom: 1px solid rgba(15, 23, 42, 0.04);
          background: linear-gradient(90deg, rgba(245,247,250,0.6), rgba(255,255,255,0));
        }

        .card__title {
          margin: 0 0 0.25rem 0;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.2px;
        }

        .card__subtitle {
          margin: 0;
          color: #475569;
          font-size: 0.95rem;
        }

        .card__body {
          padding: 1.5rem 2rem 2rem 2rem;
        }

        /* Form sections */
        .form-section {
          border: none;
          margin: 0 0 1.25rem 0;
          padding: 0;
        }

        .form-section__title {
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.9rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        label {
          font-size: 0.88rem;
          margin-bottom: 0.4rem;
          color: #0f172a;
          font-weight: 600;
        }

        .input,
        .textarea {
          background: #fff;
          border: 1px solid #e6e9ee;
          padding: 0.7rem 0.9rem;
          border-radius: 8px;
          font-size: 0.95rem;
          color: #0f172a;
          transition: box-shadow 0.15s ease, border-color 0.15s ease;
          outline: none;
        }

        .input:focus,
        .textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 4px 14px rgba(37,99,235,0.12);
        }

        .textarea {
          min-height: 110px;
          resize: vertical;
        }

        .form-help {
          display: block;
          margin-top: 0.4rem;
          color: #64748b;
          font-size: 0.85rem;
        }

        .form-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          justify-content: flex-end;
          margin-top: 1rem;
        }

        .button {
          padding: 0.7rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.06s ease, box-shadow 0.12s ease;
        }

        .button--primary {
          background: linear-gradient(90deg,#0ea5e9,#2563eb);
          color: #fff;
          box-shadow: 0 6px 20px rgba(37,99,235,0.12);
        }

        .button--primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 30px rgba(37,99,235,0.16);
        }

        .button--link {
          background: transparent;
          color: #2563eb;
          padding: 0.5rem 0.6rem;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 760px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .button--link {
            justify-content: center;
          }

          .card__header {
            padding: 1.2rem 1rem;
          }

          .card__body {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
}