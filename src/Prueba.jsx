import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Rutas } from "./Rutas";
import  afiliados from "../src/apiafiliados.json"

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
   
    const found = afiliados.data.find(
      (item) => item.DOCUMENTO == parseInt(inputValue) 
    );
    
   console.log("found",found)
    if (found) {
      console.log("Afiliado encontrado:", found.attributes);
      setFoundAfiliado(found);

      setNotFound(false);
    } else {
      console.log("Afiliado no encontrado.");
      setFoundAfiliado(null);
      setNotFound(true);
    }
  };
  // fetchApi(); comentado
  // FUNCION PARA MOSTRAR COMPONENTE
  const handleClick = () => {
    setShowComponent(true);
  };
  return (
    <>
    {/* <div   style={{
          background: "rgb(198, 152, 100)",
          borderRadius: "10px",
          height: "100px",
          width: "600px",
        }}>
      <h3 style={{fontSize:"40px"}}>Esta pagina está en revision</h3>
    </div> */}
      <div
  style={{
    background: "rgb(198, 152, 100)",
    borderRadius: "16px",
    height: "420px",
    width: "360px",
    padding: "25px 20px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  <h2
    style={{
      color: "white",
      fontSize: "22px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "600",
      letterSpacing: "0.5px",
    }}
  >
    Ingrese su documento
  </h2>

  <form
    onSubmit={handleSubmit}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginBottom: "25px",
    }}
  >
    <input
      style={{
        height: "40px",
        width: "200px",
        borderRadius: "10px",
        background: "white",
        color: "#333",
        fontSize: "16px",
        fontWeight: "500",
        border: "1px solid #ccc",
        paddingLeft: "10px",
        outline: "none",
        transition: "all 0.3s ease",
      }}
      onFocus={(e) => (e.target.style.border = "1px solid #8b5e2f")}
      onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
      type="text"
      ref={inputRef}
      placeholder="Ingrese su DNI sin puntos"
    />

    <button
      type="submit"
      style={{
        height: "40px",
        padding: "0 16px",
        borderRadius: "10px",
        border: "none",
        background: "#8b5e2f",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.background = "#a17444")}
      onMouseLeave={(e) => (e.target.style.background = "#8b5e2f")}
    >
      Ingresar
    </button>
  </form>

  {foundAfiliado ? (
    <div
      style={{
        textAlign: "center",
        color: "white",
        marginTop: "10px",
        width: "100%",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600" }}>Bienvenido/a:</h2>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "500",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        {foundAfiliado.NOMBRE}
      </h3>

      <nav>
        <Link to="/mesSeptiembre25">
          <button
            style={{
              border: "none",
              borderRadius: "10px",
              width: "70%",
              height: "40px",
              fontSize: "15px",
              fontWeight: "600",
              color: "white",
              background: "#73512b",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#8f653a")}
            onMouseLeave={(e) => (e.target.style.background = "#73512b")}
          >
            Ir a calculadora
          </button>
        </Link>
      </nav>
    </div>
  ) : notFound ? (
    <div
      style={{
        textAlign: "center",
        color: "white",
        marginTop: "15px",
        width: "100%",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
        Lo sentimos, acceso solo para afiliados
      </h2>
      <h4 style={{ fontWeight: "400", marginTop: "10px", color: "#fff" }}>
        Si considera que hay un error, informar a:
      </h4>
      <a
        style={{
          color: "#fff",
          textDecoration: "underline",
          fontWeight: "500",
        }}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=secorganizacion@atech.org.ar"
        target="_blank"
      >
        secorganizacion@atech.org.ar
      </a>
    </div>
  ) : null}
</div>

    </>
  );
};

export default Prueba;


 // const response = await axios.get(`http://66.97.47.220:1337/api/afiliados`, {
    //   params: {
    //     "pagination[limit]": 6500,
    //     "pagination[start]": 0,
    //   },
    // });
    // const afiliadosData = response.data.data;
    // console.log(afiliadosData);

    // let found = null;
    // console.log("soy el value enviado", inputValue);
    // for (const obj of afiliadosData) {
    //   if (obj && obj.attributes && obj.attributes.DOCUMENTO === inputValue) {
    //     found = obj;
    //     break;
    //   }
    // }
    // for (const obj of afiliadosData) {
    // if (obj && obj.DOCUMENTO === inputValue) {
    //   found = obj;
    //   break;
    // }
  // }
  //  const found = afiliados.find((obj) => obj.data.DOCUMENTO == 22255316);