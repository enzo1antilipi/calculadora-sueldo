import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Rutas } from "./Rutas";
import { Pages } from "./Pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
