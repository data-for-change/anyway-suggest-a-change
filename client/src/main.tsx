import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Main/index.tsx";
import "./index.css";
import { AppThemeProvider } from "./providers/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);
