import { useEffect, useState, createContext, useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
// import "../App.css";
import "../index.css";
import HomePage from "../views/HomePage";
import Services from "../views/Services";
import Careers from "../views/Careers";
import GetQuote from "../views/GetQuote";
import LogIn from "../views/LogIn";
import Contact from "../views/Contact";
import UserHome from "../views/UserHome";
import Schedule from "../views/Schedule";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const EMPLOYEE_URL = import.meta.env.VITE_EMPLOYEE_URL;

export const UserContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// }

function App() {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let currentUser = { user, isLoggedIn };
  console.log(user ? `Current User:, ${user.name.firstName} is logged in: ${isLoggedIn}` : "No user logged in");
  const navigate = useNavigate();

  // Fetching services
  // useEffect(() => {
  //   const getSevices = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/services`);
  //       const service = await response.json();
  //       setServices(service);
  //       console.log(service);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   getSevices();
  // }, []);

  // Fetching users
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await fetch(`${BASE_URL}/login/emploeyee`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const res = await response.json();
          console.log(res);
          setUser(res);
        } catch (e) {
          console.log(e.message);
          localStorage.removeItem("token");
        }
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services"
            element={
              <Services
                services={services}
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            }
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getquote" element={<GetQuote setUser={setUser}/>} />
          <Route path="/login" element={<LogIn setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={!currentUser ? <LogIn /> : <UserHome />} />
          <Route path="/schedule" element={<Schedule  services={services} />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
