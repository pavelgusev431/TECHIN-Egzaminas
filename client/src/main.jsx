import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import MainContextProvider from "./contexts/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </Router>
  </StrictMode>
);
