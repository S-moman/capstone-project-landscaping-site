import { useEffect, useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router";
import "../App.css";
import HomePage from "./HomePage";
import Services from "./Services";
import Careers from "./Careers";
import GetQuote from "./GetQuote";
import LogIn from "./LogIn";
import Contact from "./Contact";
import UserHome from "./UserHome";
import Schedule from "./Schedule";

export const BASE_URL = import.meta.env.VITE_BASE_URL;


function App() {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null)

// Fetching services
  useEffect(() => {
    const getSevices = async () => {
      try {
        const response = await fetch(`${BASE_URL}/services`);
        const service = await response.json();
        setServices(service);
        console.log(service);
      } catch (e) {
        console.log(e.message);
      }
    };
    getSevices();
  }, []);

  // Fetching users
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("password")
  //     if(token) {
  //       try {
  //         const response = await fetch(`${BASE_URL}/login`)
  //         console.log(response)
  //         setUser(response)
  //       } catch (e) {
  //         console.log(e.message)
  //         localStorage.removeItem("password")
  //       }
  //     }
  //   }
  //   fetchUser()
  // })


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={<Services services={services} setServices={setServices} />}
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/getquote" element={<GetQuote />} />
        <Route path="/login" element={<LogIn setUser={setUser}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<UserHome user={user}/>} />
        <Route path="/schedule" element={<Schedule user={user}/>}/>
      </Routes>
    </>
  );
}

export default App;
