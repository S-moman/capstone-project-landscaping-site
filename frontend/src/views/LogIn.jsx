import { useState, useRef } from "react";
import FooterNav from "../components/FooterNav";
import NavBar from "../components/NavBar";
import { Link } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { BASE_URL } from "../components/App";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
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
      console.log(userLoggedin)
      if (userLoggedin.email == user.email) {
        setUser(userLoggedin);
        navigate("/home");
      } else {
        return;
      }
    } catch (e) {
      console.log(e.message);
    }
    // console.log(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <NavBar />
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div id="login-input">
            <input
              ref={emailRef}
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div id="login-input">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button onClick={handleLogin} className="login-button">
            Sign In
          </button>
          <Link to={"/getquote"} id="login-link">
            <div>No account? Click here to sign up!</div>
          </Link>
          {/* <GoogleLogin
            onSuccess={(codeResponse) => {
              console.log(jwtDecode(codeResponse.credential));
              navigate("/home");
            }}
            onError={() => console.log("Login failed")}
          /> */}
        </form>
      </div>

      <FooterNav />
    </>
  );
}