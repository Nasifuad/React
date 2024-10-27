import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./comp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
  </React.StrictMode>
);
