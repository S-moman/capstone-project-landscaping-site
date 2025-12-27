import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

import { Routes, Route, BrowserRouter as Router } from "react-router";
import { UserProvider } from "./context/UserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <UserProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </UserProvider>
      </GoogleOAuthProvider>
    </Router>
  </StrictMode>
);
