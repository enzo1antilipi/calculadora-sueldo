import React, { useState } from "react";
import Institucion21 from "./Institucion21";
import Institucion22 from "./Institucion22";
import Institucion23 from "./Institucion23";
import Institucion24 from "./Institucion24";
import Institucion25 from "./Institucion25";
import { useBearStore } from "../store/EstadoGlobal";

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
    <div>
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
          <Institucion21 />
        </div>
        <div
          className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion22 />
        </div>
        <div
          className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion23 />
        </div>
        <div
          className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion24 />
        </div>
        <div
          className={toggleTabs === 5 ? "contenu active-contenu" : "contenu"}
        >
          <Institucion25 />
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
            <th className="tablatotal">NETO A PAGAR</th>
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
    </div>
  );
}
