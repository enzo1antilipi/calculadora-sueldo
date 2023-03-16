import App from "./App";
import "./pages.css";

import Institucion2 from "./Institucion2";
import { useState } from "react";
import Institucion1 from "./Institucion1";
import { useBearStore } from "./store/EstadoGlobal";

export const Pages = () => {
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

  //Formato para pesos
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <div>
      <div>
        {/* classname contenedor */}
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
        </div>
        {/* CALCULADORAS */}
        <div className="contenu-onglets">
          <div
            className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
          >
            <App />
          </div>

          <div
            className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
          >
            <Institucion1 />
          </div>

          <div
            className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
          >
            <Institucion2 />
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
              <td className="tablatotal">
                {formatter.format(getnetoglobal())}
              </td>
              <td className="tablatotal">
                {formatter.format(getDescuentoGlobal())}
              </td>
              <td className="tablatotal">{formatter.format(getBruto())}</td>
              <td className="tablatotal">{formatter.format(getRetencion())}</td>
              <td className="tablatotal">
                {formatter.format(getAsignacion())}
              </td>
              <td className="tablatotal">{formatter.format(getNetoPagar())}</td>
            </tr>
          </table>
        </div>
        <div className="cartel">
          <h2 className="letras">
            La calculadora se encuentra en período de prueba, si encontrás algún
            error o diferencia por favor comunicate con nosotros.
          </h2>
        </div>
      </div>
    </div>
  );
};