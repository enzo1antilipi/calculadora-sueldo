import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Pages from "./Pages";
import MesAnte from "./calcPasada/MesAnte";
import MesSig from "./calSiguiente/MesSig";
import MesJulio from "./calcuJulio/MesJulio"
import MesAgosto from "./calcuAgosto/MesAgosto"
import MesSeptie from "./calcuSeptie/MesSeptie"
import MesOctubre from "./calcuOctubre/MesOctubre"
import "./rutas.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import App from "./App";
import Prueba from "./Prueba";

export const Rutas = () => {
  const handleRedirect = () => {
    window.location.href = "https://atech.org.ar/";
  };
  return (
    <>
      <div className="barraback">
        <button className="botonBack" onClick={handleRedirect}>
          <IoReturnUpBackOutline
            style={{
              marginRight: "6px",
            }}
          />{" "}
          Volver a ATECH
        </button>
      </div>
      <div>
        <BrowserRouter>
          {/* <ul style={{ display: "flex", justifyContent: "space-between" }}>
            <li className="lista1">
              <Link to="/mesante" className="letraslink">
                <FaArrowLeft
                  style={{
                    marginRight: "5px",
                  }}
                />
                Anterior
              </Link>
            </li>
            <li className="lista2">
              <Link to="/app" className="letraslink">
                Actual
              </Link>
            </li>
            <li className="lista3">
              <Link to="/MesSiguiente" className="letraslink">
                Siguiente
                <FaArrowRight
                  style={{
                    marginLeft: "5px",
                  }}
                />
              </Link>
            </li>
          </ul> */}

          <Routes>
            <Route path="/mesSiguiente" element={<MesSig />} />
            <Route path="/mesactual" element={<Pages />} />
            <Route path="/mesante" element={<MesAnte />} />
            <Route path="/mesjulio" element={<MesJulio />} />
            <Route path="/mesagosto" element={<MesAgosto />} />
            <Route path="/mesSeptiembre" element={<MesSeptie />} />
            <Route path="/" element={<MesOctubre />} />
            {/* <Route path="/mesJulio" element={<MesJulio />} /> */}
            {/* <Route path="/MesSiguiente" element={<MesSig />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
