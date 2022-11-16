import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context";

import "./reset.css";
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
