import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoApp from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TodoApp />
    <TodoApp />
    <TodoApp />
    <TodoApp />
  </React.StrictMode>
);
