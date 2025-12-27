import { useState, useRef, useContext } from "react";
import { BASE_URL } from "./App";
import { useNavigate } from "react-router";
import { Link } from "react-router";

import useAuth from "../hooks/useAuth";

// import { UserProvider, UserContext } from "../context/UserProvider";

export default function EmployeeLogin({ error, setError }) {
  const { setEmployee, setIsLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Employee login function
  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return alert("Please fill all the fields");
    const user = {
      email,
      password,
    };
    try {
      const response = await fetch(`${BASE_URL}/login/employee`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userLoggedin = await response.json();
      if (userLoggedin.email == user.email) {
        setEmployee(userLoggedin);
        setIsLoggedIn(true);
        localStorage.setItem("token", userLoggedin.token);
        console.log(userLoggedin.name, "Signing in...")
        navigate("/employee");
      } else {
        return alert("Invalid credentials");
      }
    } catch (e) {
      console.log(e.message);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      {/* <UserProvider value={employee.employee}> */}
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
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleLogin} className="login-form" noValidate>
                  <label className="form-group">
                    <span className="form-label">Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-input"
                      aria-required="true"
                    />
                  </label>

                  <label className="form-group">
                    <span className="form-label">Password</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
      {/* </UserProvider> */}
    </>
  );
}
