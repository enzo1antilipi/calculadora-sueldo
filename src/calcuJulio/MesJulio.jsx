import React, { useState } from "react";
import Institucion31 from "./Institucion31";
import Institucion32 from "./Institucion32";
import Institucion33 from "./Institucion33";
import Institucion34 from "./Institucion34";
import Institucion35 from "./Institucion35";
import { useBearStore } from "../store/EstGloSig";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function calculadora() {
  const [
    getnetoglobal,
    getDescuentoGlobal,
    getBruto,
    getRetencion,
    getAsignacion,
    getNetoPagar,
  ] = useBearStore((state) => [
    state.getnetoglobal,
    state.getDescuentoGlobal,
    state.getBruto,
    state.getRetencion,
    state.getAsignacion,
    state.getNetoPagar,
  ]);
  const [toggleTabs, setToggleTabs] = useState(1);
  const toggleTab = (index) => {
    setToggleTabs(index);
  };
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return (
    <div div className="animate__animated animate__pulse">
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li className="lista1">
          <Link to="/mesante" className="letraslink">
            {/* <FaArrowLeft
              style={{
                marginRight: "5px",
              }}
            /> */}
            Abril
          </Link>
        </li>
        <li className="lista2">
          <Link to="/mesactual" className="letraslink">
            Mayo
          </Link>
        </li>
        <li className="lista3">
          <Link to="/mesSiguiente" className="letraslink">
            Junio
            {/* <FaArrowRight
              style={{
                marginLeft: "5px",
              }}
            /> */}
          </Link>
        </li>
        <li className="lista3">
          <Link to="/" className="letraslink">
            Julio
            {/* <FaArrowRight
              style={{
                marginLeft: "5px",
              }}
            /> */}
          </Link>
        </li>
      </ul>
      <div className="bloc-onglets">
        <div
          className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Institución 1
        </div>
        <div
          className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Institución 2
        </div>
        <div
          className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Institución 3
        </div>
        <div
          className={toggleTabs === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Institución 4
        </div>
        <div
          className={toggleTabs === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Institución 5
        </div>
      </div>
      {/*  */}
      <div className="contenu-onglets">
        <div
          className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion31 />
        </div>
        <div
          className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion32 />
        </div>
        <div
          className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion33 />
        </div>
        <div
          className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion34 />
        </div>
        <div
          className={toggleTabs === 5 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion35 />
        </div>
      </div>
      <div>
        <table className="tabla4">
          <tr>
            <th className="tablatotal">TOTAL HABERES</th>
            <th className="tablatotal">TOTAL DESCUENTO LEY</th>
            <th className="tablatotal">NETO BRUTO</th>
            <th className="tablatotal">RETENC VOLUNTARIA</th>
            <th className="tablatotal">ASIGNACION FAMILIAR</th>
            <th className="tablatotal">NETO A PAGAR </th>
          </tr>
          <tr>
            <td className="tablatotal">{formatter.format(getnetoglobal())}</td>
            <td className="tablatotal">
              {formatter.format(getDescuentoGlobal())}
            </td>
            <td className="tablatotal">{formatter.format(getBruto())}</td>
            <td className="tablatotal">{formatter.format(getRetencion())}</td>
            <td className="tablatotal">{formatter.format(getAsignacion())}</td>
            <td className="tablatotal">{formatter.format(getNetoPagar())}</td>
          </tr>
        </table>
      </div>
      <div className="cartel">
        <h2 className="letras">
          La Calculadora de Haberes es para uso exclusivo de afiliadas/os y
          permite corroborar si el sueldo se ha liquidado correctamente. Dado
          que está en fase experimental, te pedimos que si encuentras algún
          error nos lo hagas saber por correo electrónico a
          secorganizacion@atech.org.ar
        </h2>
      </div>
      <div className="cartel" style={{ marginTop: "40px", width: "50%" }}>
        <h2 className="letras">*Ley de Profesionalidad Docente</h2>
      </div>
    </div>
  );
}