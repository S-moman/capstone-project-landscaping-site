import { useState, useRef, useContext } from "react";
import FooterNav from "../components/FooterNav";
import NavBar from "../components/NavBar";
import { Link } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import { BASE_URL } from "../components/App";
import EmployeeLogin from "../components/EmployeeLogin";
import { Mail, RectangleEllipsis } from "lucide-react";
import { UserContext } from "../components/App";

export default function Login({ setUser, setIsLoggedIn }) {
  const currentUser = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {

      return 
    }
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
        localStorage.setItem("token", userLoggedin.token)
        setUser(userLoggedin);
        setIsLoggedIn(true);
        navigate("/home");
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
    <UserContext.Provider value={{ currentUser }}>
      <NavBar />
      <main className="login-page" aria-live="polite">
        <div className="login-wrapper">
          <div
            className="login-card"
            role="region"
            aria-labelledby="login-title"
          >
            <div className="login-card-content">
              <h2 id="login-title" className="login-title">
                Sign in to your account
              </h2>
              <p className="login-sub">
                Welcome back — please enter your details to continue.
              </p>

              <form onSubmit={handleLogin} className="login-form" noValidate>
                <label className="form-group">
                  <span className="form-label">Email<Mail /></span>
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
                  <span className="form-label">Password<RectangleEllipsis /></span>
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

                <div className="form-footer">
                  {/* <span className="divider">or continue with</span> */}
                  {/* If you enable Google login later, replace the button below with <GoogleLogin /> */}
                  {/* <GoogleLogin
                    onSuccess={async (codeResponse) => {
                      console.log(jwtDecode(codeResponse.credential));
                      const userObject = jwtDecode(codeResponse.credential);
                      try {
                        const response = await fetch(`${BASE_URL}/login`, {
                          method: "POST",
                          body: JSON.stringify(userObject),
                          headers: {
                            "Content-Type": "application/json",
                          },
                        });
                        const userLoggedin = await response.json();
                        console.log(userLoggedin);
                        const { given_name, email, picture } = userObject;
                        if (userObject.email == userLoggedin.email) {
                          setUser(userObject);
                          navigate("/home", { given_name, email, picture });
                        } else {
                          return alert("Invalid credentials");
                        }
                      } catch (e) {
                        console.log(e.message);
                      }
                      // setUser(userObject);
                      // navigate("/home", { given_name, email, picture });
                    }}
                    onError={() => console.log("Login failed")}
                  /> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <EmployeeLogin setUser={setUser}/>

      <FooterNav />

      <style>{`
        :root{
          --bg-1: #f6f9ff;
          --card-bg: #ffffff;
          --muted: #6b7280;
          --border: #e6e9ef;
          --primary-1: #2563eb;
          --primary-2: #7c3aed;
          --text: #0f172a;
        }

        .login-page{
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, var(--bg-1) 0%, #eef2ff 100%);
          padding: 40px 20px;
        }

        .login-wrapper{
          width: 100%;
          max-width: 940px;
          display: flex;
          justify-content: center;
        }

        .login-card{
          width: 100%;
          background: var(--card-bg);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
          padding: 28px;
          display: flex;
          align-items: stretch;
          border: 1px solid rgba(16,24,40,0.04);
        }

        .login-card-content{
          width: 100%;
        }

        .login-title{
          font-size: 1.375rem;
          line-height: 1.2;
          color: var(--text);
          margin: 0 0 6px 0;
          font-weight: 600;
        }

        .login-sub{
          margin: 0 0 20px 0;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .login-form{
          display: block;
        }

        .form-group{
          display: block;
          margin-bottom: 14px;
        }

        .form-label{
          display: block;
          margin-bottom: 8px;
          color: #374151;
          font-size: 0.9rem;
        }

        .form-input{
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: #fff;
          font-size: 0.98rem;
          color: var(--text);
          transition: box-shadow 150ms ease, border-color 150ms ease, transform 120ms ease;
        }

        .form-input::placeholder{
          color: #9ca3af;
        }

        .form-input:focus{
          outline: none;
          border-color: rgba(99,102,241,0.9);
          box-shadow: 0 6px 18px rgba(99,102,241,0.08);
          transform: translateY(-1px);
        }

        .form-actions{
          display: flex;
          gap: 12px;
          margin-top: 18px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          font-size: 0.95rem;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }

        .btn:focus{
          outline: 3px solid rgba(37,99,235,0.12);
          outline-offset: 2px;
        }

        .btn-primary{
          background: linear-gradient(90deg, var(--primary-1), var(--primary-2));
          color: #fff;
          box-shadow: 0 6px 18px rgba(124,58,237,0.12);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .btn-primary:hover{
          transform: translateY(-2px);
        }

        .btn-ghost{
          background: transparent;
          color: #0f172a;
          border: 1px solid var(--border);
        }

        .form-footer{
          margin-top: 22px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .divider{
          position: relative;
          color: var(--muted);
          font-size: 0.9rem;
          padding: 0 12px;
        }

        .divider::before,
        .divider::after{
          content: "";
          flex: 1;
          height: 1px;
          background: var(--border);
          display: inline-block;
        }

        .form-footer > *{
          display: inline-flex;
          align-items: center;
        }

        /* Responsive */
        @media (max-width: 640px){
          .login-card{
            padding: 20px;
            border-radius: 10px;
          }
          .login-title{
            font-size: 1.125rem;
          }
          .form-actions{
            flex-direction: column;
            align-items: stretch;
          }
          .btn{
            width: 100%;
          }
          .divider::before,
          .divider::after{
            height: 1px;
          }
        }
      `}</style>
    </UserContext.Provider>
    </>
  );
}
