import { useState, useRef } from "react";
import { BASE_URL, EMPLOYEE_URL } from "./App";
import { useNavigate } from "react-router";
import { Link } from "react-router";


export default function EmployeeLogin({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleLogin(e) {
      e.preventDefault();
      if (!email || !password) return postMessage("Please fill all the fields");
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      try {
        const response = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userLoggedin = await response.json();
        console.log(userLoggedin);
        if (userLoggedin.email == user.email) {
          setUser(userLoggedin);
          navigate("/home");
        } else {
          return postMessage("Invalid credentials");
        }
      } catch (e) {
        console.log(e.message);
      }
      setEmail("");
      setPassword("");
    }

  return (
    <>
      <main className="login-page" aria-live="polite">
        <div className="login-wrapper">
          <div
            className="login-card"
            role="region"
            aria-labelledby="login-title"
          >
            <div className="login-card-content">
              <h2 id="login-title" className="login-title">
                Employee Sign in
              </h2>
              <p className="login-sub">
                Welcome back — please enter your details to continue.
              </p>

              <form onSubmit={handleLogin} className="login-form" noValidate>
                <label className="form-group">
                  <span className="form-label">Email</span>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="form-input"
                    aria-required="true"
                  />
                </label>

                <label className="form-group">
                  <span className="form-label">Password</span>
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    minLength={6}
                    className="form-input"
                    aria-required="true"
                  />
                </label>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                  <Link
                    to={"/getquote"}
                    className="btn btn-ghost"
                    aria-label="Create an account"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
