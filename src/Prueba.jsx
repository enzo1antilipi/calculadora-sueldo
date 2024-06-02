import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Prueba = () => {
  const [inputValue, setInputValue] = useState("");
  const [foundAfiliado, setFoundAfiliado] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    const inputValue = inputRef.current.value;
    setInputValue(inputValue);
    // Espera la búsqueda del afiliado antes de continuar
    await fetchApi(inputValue);
  };

  //funcion que va a traer los datos

  const fetchApi = async (inputValue) => {
    const response = await axios.get(`http://66.97.47.220:1337/api/afiliados`, {
      params: {
        "pagination[limit]": 6500,
        "pagination[start]": 0,
      },
    });
    const afiliadosData = response.data.data;
    console.log(afiliadosData);

    let found = null;
    console.log("soy el value enviado", inputValue);
    for (const obj of afiliadosData) {
      if (obj && obj.attributes && obj.attributes.DOCUMENTO === inputValue) {
        found = obj;
        break;
      }
    }

    if (found) {
      console.log("Afiliado encontrado:", found.attributes);
      setFoundAfiliado(found.attributes);

      setNotFound(false);
    } else {
      console.log("Afiliado no encontrado.");
      setFoundAfiliado(null);
      setNotFound(true);
    }
  };
  // fetchApi();
  //FUNCION PARA MOSTRAR COMPONENTE
  const handleClick = () => {
    setShowComponent(true);
  };
  return (
    <>
      <div
        style={{
          background: "rgb(198, 152, 100)",
          borderRadius: "10px",
          height: "500px",
          width: "350px",
        }}
      >
        <h1 style={{ color: "white" }}>Login</h1>
        <h2 style={{ color: "white" }}>Ingrese su documento</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              height: "30px",
              borderRadius: "12px",
              background: "white",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              border: "solid 3px gray",
            }}
            type="text"
            ref={inputRef}
            placeholder="Escribir"
          />

          <button
            type="submit"
            style={{
              height: "30px",
              marginLeft: "10px",
              borderRadius: "10px",
              border: "inset",
              cursor: "pointer",
              transition: "background-color 0.8s ease;" /* Transición suave */,
            }}
          >
            Buscar
          </button>
        </form>

        {foundAfiliado ? (
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <h2 style={{ color: "white" }}>Bienvenido</h2>
            <h3 style={{ fontFamily: "cursive" }}>
              Nombre: {foundAfiliado.NOMBRE}
            </h3>
            <h3 style={{ fontFamily: "cursive" }}>
              Apellido: {foundAfiliado.APELLIDO}
            </h3>
            <nav>
              <Link to="/MesSiguiente">
                <button
                  style={{
                    border: "inset",
                    borderRadius: "10px",
                    width: "40%",
                    height: "35px",
                    fontSize: "15px",
                    marginTop: "60px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  Ir a calculadora
                </button>
              </Link>
            </nav>
          </div>
        ) : notFound ? (
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <h3>*Usted no está en la Base de datos*</h3>
            <p>
              Si considera que esta información es errónea, comuníquese con{" "}
            </p>
            <a href="mailto:secorganizacion@atech.org.ar">
              secorganizacion@atech.org.ar
            </a>
            <nav>
              <Link to="/MesSiguiente">
                <button
                  style={{
                    border: "inset",
                    borderRadius: "10px",
                    width: "40%",
                    height: "35px",
                    fontSize: "15px",
                    marginTop: "60px",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                >
                  Ir a calculadora
                </button>
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Prueba;
