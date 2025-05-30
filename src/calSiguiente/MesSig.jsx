import React, { useState } from "react";
import Institucion21 from "./Institucion21";
import Institucion22 from "./Institucion22";
import Institucion23 from "./Institucion23";
import Institucion24 from "./Institucion24";
import Institucion25 from "./Institucion25";
import { useBearStore } from "../store/EstGloSig";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("mesSiguiente");

   const handleMonthChange = (e) => {
    const selected = e.target.value;
    setSelectedMonth(selected);

    // Redireccionar según el mes seleccionado
    if (selected === "mesActual") {
      navigate("/mesactual");
    } else if (selected === "mesSiguiente") {
      navigate("/mesSiguiente");
    } else if (selected === "mesJulio") {
      navigate("/mesjulio");
    } else if (selected === "mesAgosto") {
      navigate("/mesagosto");
    } else if (selected === "mesSeptiembre") {
      navigate("/mesSeptiembre");
    } else if (selected === "mesAnte") {
      navigate("/mesante");
    }else if (selected === "mesOctubre"){
      navigate("/mesOctubre");
    }else if (selected === "mesNoviembre"){
      navigate("/");
    }
  };
  return (
    <div div className="animate__animated animate__pulse">
       <label htmlFor="meses">Mes</label>
      <select
        id="meses"
        value={selectedMonth}
        onChange={handleMonthChange}
        className="dropdown"
        style={{width:"300px",height:"30px", marginBottom:"15px",fontSize:"20px"}}
      >
        <option value="mesNoviembre">Noviembre 2024 - Paritaria 26/9/24</option>
        <option value="mesOctubre">Octubre 2024 - Paritaria 26/9/24</option>
        <option value="mesSeptiembre">Septiembre 2024 - Paritaria 26/9/24</option>
        <option value="mesAgosto" >Agosto 2024</option>
        <option value="mesJulio">Julio 2024</option> 
        <option value="mesSiguiente">Junio 2024</option>
        <option value="mesActual">Mayo 2024</option>
        <option value="mesAnte">Abril 2024</option>
      </select>
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
          <Link to="/mesjulio" className="letraslink">
            Julio
            {/* <FaArrowRight
              style={{
                marginLeft: "5px",
              }}
            /> */}
          </Link>
        </li>
        <li className="lista3">
          <Link to="/mesagosto" className="letraslink">
            Agosto            {/* <FaArrowRight
              style={{
                marginLeft: "5px",
              }}
            /> */}
          </Link>
        </li>
        <li className="lista3">
          <Link to="/" className="letraslink">
            Septiembre
             {/* <FaArrowRight
              style={{
                marginLeft: "5px",
              }}
            /> */}
          </Link>
        </li>
      </ul>