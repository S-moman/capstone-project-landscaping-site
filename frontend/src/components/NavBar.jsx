import { Link } from "react-router";
import logo from "../images/Logo.png";
import { useContext } from "react";
import { UserContext } from "./App";
import { useNavigate } from "react-router";
import { Moon, SunMoon } from "lucide-react"
export default function NavBar() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogOut() {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    console.log("Logging out...");
    navigate("/login");
  }

  return (
    <>
    <UserContext.Provider value={user}>
      <header className="bg-[#d3eccd] shadow-md border-b border-[#06923e] rounded-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6">
          <Link to={!user ? "/" : "/home"} id="nav-link" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Moment Investors Landscaping logo"
              className="h-16 w-16 rounded-full object-cover shadow-sm"
            />
            <div>
              <h1 className="text-xl font-extrabold text-green-700 leading-tight">
                Moment Investors Landscaping LLC
              </h1>
              <p className="text-sm text-green-600">Quality landscaping & lawn care</p>
            </div>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to={user ? "/schedule" : "/services"}
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 transition"
                >
                  {user ? "Schedule Service" : "Services"}
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 transition"
                >
                  Careers
                </Link>
              </li>

              {!user && (
                <li>
                  <Link
                    to="/getquote"
                    className="px-3 py-2 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 transition"
                    >
                    Get a Quote
                  </Link>
                </li>
              )}

              <li>
                {user ? (
                  <button
                  onClick={() => {
                      handleLogOut();
                    }}
                    className="px-3 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition"
                    aria-label="Log out"
                    >
                    Log Out
                  </button>
                ) : (
                  <Link
                  to="/login"
                  className="px-3 py-2 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition"
                  >
                    Log In
                  </Link>
                )}
              </li>
                    <li>
                      <span>
                      {user ? <SunMoon color="green" /> : ""}
                      </span>
                    </li>
            </ul>
          </nav>
        </div>
      </header>
      </UserContext.Provider>
    </>
  );
}
