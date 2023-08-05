import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Pages } from "./Pages";
import MesAnte from "./calcPasada/MesAnte";
import MesSig from "./calSiguiente/MesSig";
import "./rutas.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li className="lista1">
            <Link to="/mesante" className="letraslink">
              <FaArrowLeft
                style={{
                  marginRight: "5px",
                }}
              />{" "}
              Mayo
            </Link>
          </li>
          <li className="lista2">
            <Link to="/actual" className="letraslink">
              Junio
            </Link>
          </li>
          <li className="lista3">
            <Link to="/" className="letraslink">
              Julio
              <FaArrowRight
                style={{
                  marginLeft: "5px",
                }}
              />
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/mesante" element={<MesAnte />} />
          <Route path="/actual" element={<Pages />} />
          <Route path="/" element={<MesSig />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
