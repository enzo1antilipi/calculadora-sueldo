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
          borderRadius: "10px",
          height: "400px",
          width: "350px",
        }}
      >
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
              border: "solid 1px gray",
            }}
            type="text"
            ref={inputRef}
            placeholder="Ingrese su DNI sin puntos"
          />

          <button
            type="submit"
            style={{
              height: "30px",
              marginLeft: "5px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.8s ease;" 
            }}
            
          >
            Ingresar
          </button>
        </form>

         {foundAfiliado ? ( 
           <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <h2 style={{ color: "white" }}>Bienvenido/a :</h2>
            <h3 style={{  }}>
              
                {foundAfiliado.NOMBRE}   
             </h3>
           
            <nav>
              <Link to="/mesFebrero">
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

                >
                  Ir a calculadora
                </button>
              </Link>
            </nav>
          </div> 
         ) : notFound ? ( 
           <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <h2 style={{color:"white"}}>Lo sentimos acceso solo para afiliados</h2>
            <h4>
              Si considera que hay un error, informar a 
            </h4>
            <a style={{color:"black",textDecoration:"underline"}}  href="https://mail.google.com/mail/?view=cm&fs=1&to=secorganizacion@atech.org.ar" target="_blank">
              secorganizacion@atech.org.ar
            </a>
            <nav>
            </nav>
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