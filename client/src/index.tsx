import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppThemeProvider } from "./providers/index.ts";
import { BrowserRouter as Router, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Router>
  </React.StrictMode>
);
