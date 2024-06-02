import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { Rutas } from "./Rutas";
// import { Pages } from "./Pages";
// import { Rutasgeneral } from "./Rutasgeneral";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
);
//Rutas es el componente donde hago la conexion de las demas rutas
