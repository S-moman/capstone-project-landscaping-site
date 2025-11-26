import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { GoogleOAuthProvider } from "@react-oauth/google"
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

import { BrowserRouter as Router } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Router>
      <App />
    </Router>
    </GoogleOAuthProvider>
  </StrictMode>
);
