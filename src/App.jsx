import { useEffect, useState } from "react";
import { Input, Spacer } from "@nextui-org/react";
import "./App.css";

function App() {
  const SUELDO_BASICO = 56063.31;
  const HIJOS_ESCOLARIZADOS = 6588;
  const HIJOS_INCAPACITADO = 26298;
  const COBRO_CONYUGE = 1920;
  const funciones = [
    "Sin datos",
    "Supervisor",
    "Secretario",
    "Director",
    "Vicedirector",
    "Maestro",
    "Maestro especial",
    "Jefe general enseñanza pratica",
    "Bibliotecario",
    "Preceptor/Bedel",
    "POT",
  ];
  const cargos = [
    { nombre: "Sin datos", funcion: "", valor: 1 },
    {
      nombre: "Supervisor Técnico General",
      funcion: "Supervisor",
      valor: 2.61,
    },
    {
      nombre: "Supervisor Técnico Seccional",
      funcion: "Supervisor",
      valor: 2.52,
    },
    { nombre: "Supervisor Escolar", funcion: "Supervisor", valor: 2.43 },
    {
      nombre: "Supervisor General / Secr. Técnico Docente",
      funcion: "Supervisor",
      valor: 2.61,
    },
    { nombre: "Supervisor Técnico", funcion: "Supervisor", valor: 2.43 },

    {
      nombre: "Secretario de Supervisor Técnico General",
      funcion: "Secretario",
      valor: 2.52,
    },
    {
      nombre: "Secretario de 1ra. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.3,
    },
    {
      nombre: "Secretario de 2da. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.21,
    },
    {
      nombre: "Secretario de 3ra. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.16,
    },
    {
      nombre: "Secretario de Instituto Superior",
      funcion: "Secretario",
      valor: 1.51,
    },

    {
      nombre: "Director de Perfeccionamiento Docente",
      funcion: "Director",
      valor: 2.52,
    },
    { nombre: "Director 2da Categoría", funcion: "Director", valor: 1.5 },
    {
      nombre: "Director 1ra. Categoría Escuela Común",
      funcion: "Director",
      valor: 1.5,
    },
    { nombre: "Director 3ra Categoría", funcion: "Director", valor: 1.5 },
    { nombre: "Director de Biblioteca", funcion: "Director", valor: 2.15 },
    {
      nombre: "Director 1ra. Categ. Esc. c/ Internado y Albergue",
      funcion: "Director",
      valor: 2.26,
    },
    {
      nombre: "Director 2da. Cat. Esc. c/Internado y Albergue",
      funcion: "Director",
      valor: 2.09,
    },
    {
      nombre: "Director 3ra. Cat. c/Internado y Albergue",
      funcion: "Director",
      valor: 2.08,
    },
    {
      nombre: "Director 1ra. Cat. Esc. Jornada Completa",
      funcion: "Director",
      valor: 2.2,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Común",
      funcion: "Director",
      valor: 2.15,
    },
    { nombre: "Director 2da. Categoría J/C", funcion: "Director", valor: 2.02 },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Común",
      funcion: "Director",
      valor: 1.96,
    },
    { nombre: "Director J/C 7 Hs.", funcion: "Director", valor: 2.07 },

    {
      nombre: "Director 1ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 2.15,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc.Hosp. y Domic.",
      funcion: "Director",
      valor: 2.02,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 1.96,
    },
    {
      nombre: "Director 1ra. Cat J/S Esc. Hosp.y Domic.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 2da. Cat. Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 3ra.Cat. Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 2.15,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 2.02,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 1.96,
    },

    {
      nombre: "Director 1ra. Cat. Esc. Adultos",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 2da. Cat. Esc. Adultos 4 Hs.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 3ra. Cat. Esc. Adultos",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 2.15,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 2.02,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 1.96,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director",
      valor: 2.15,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director",
      valor: 2.02,
    },
    { nombre: "Director 3ra Cat. J/C", funcion: "Director", valor: 1.96 },
    { nombre: "Director 1ra Cat.", funcion: "Director", valor: 1.5 },
    {
      nombre: "Director 2da. Cat. J/S Esc. Nivel Inicial 4Hs.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 3ra. Categoría Nivel Inicial",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director de 1ra. Media y Polimodal",
      funcion: "Director",
      valor: 2.15,
    },
    {
      nombre: "Director de 2da. Media y Polimodal",
      funcion: "Director",
      valor: 2.02,
    },
    {
      nombre: "Director de 3ra. Media y Polimodal",
      funcion: "Director",
      valor: 1.96,
    },
    {
      nombre: "Director de Instituto Superior",
      funcion: "Director",
      valor: 2.17,
    },
    {
      nombre: "Vicedirector J/C",
      funcion: "Vicedirector",
      valor: 1.82,
    },
    {
      nombre: "Vicedirector Esc. Común",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Esc. c/Internado y Albergue",
      funcion: "Vicedirector",
      valor: 2.04,
    },
    {
      nombre: "Vicedirector Esc. J/C",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Esc. Hosp. Domiciliaria",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Escuela Adultos",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Esc. Especial",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Esc. Nivel Inicial",
      funcion: "Vicedirector",
      valor: 1.39,
    },
    {
      nombre: "Vicedirector Media y Polimodal",
      funcion: "Vicedirector",
      valor: 1.48,
    },
    { nombre: "Maestro de Año Escuela Común", funcion: "Maestro", valor: 1 },
    { nombre: "Maestro Bibliotecario", funcion: "Maestro", valor: 1.79 },
    {
      nombre: "Maestro de Año 3er. Ciclo E.G.B.",
      funcion: "Maestro",
      valor: 1.13,
    },
    { nombre: "Maestro Secretario", funcion: "Maestro", valor: 1 },
    {
      nombre: "Maestro de Año c/Internado y Albergue",
      funcion: "Maestro",
      valor: 1.18,
    },
    { nombre: "Maestro de Año J/C", funcion: "Maestro", valor: 1.75 },
    {
      nombre: "Maestro de Orientación y Tutoría",
      funcion: "Maestro",
      valor: 1.16,
    },
    {
      nombre: "Maestro de Orientación y TutoríaJ/C 7 Hs. ",
      funcion: "Maestro",
      valor: 1.78,
    },
    {
      nombre: "Maestro de Año Esc. Hosp. y Domiciliaria",
      funcion: "Maestro",
      valor: 1,
    },
    {
      nombre: "Maestro de Año 3er. C. EGB Esc. Dom./Hosp.",
      funcion: "Maestro",
      valor: 1.13,
    },
    { nombre: "Maestro de Año Esc. Adultos", funcion: "Maestro", valor: 1 },
    {
      nombre: "Maestro de Año J / C Esc. Especial",
      funcion: "Maestro",
      valor: 1.75,
    },
    { nombre: "Maestro de Año Esc. Especial", funcion: "Maestro", valor: 1 },

    {
      nombre: "Maestro de Año J / C Esc. Nivel Inicial.",
      funcion: "Maestro",
      valor: 1.75,
    },
    {
      nombre: "Maestro de Año Esc. Nivel Inicial",
      funcion: "Maestro",
      valor: 1,
    },

    {
      nombre: "Maestro de Ens. Práct. J. Sección Med. y Poli.",
      funcion: "Maestro",
      valor: 1.05,
    },
    {
      nombre: "Maestro de Enseñanza Práctica",
      funcion: "Maestro",
      valor: 0.95,
    },
    { nombre: "12 Hs.", funcion: "Maestro especial", valor: 0.76 },
    { nombre: "15 Hs.", funcion: "Maestro especial", valor: 0.94 },
    { nombre: "18 Hs", funcion: "Maestro especial", valor: 1 },
    {
      nombre: "Jefe Gral. Ens. Práct. Media y Poli.",
      funcion: "Jefe general enseñanza pratica",
      valor: 1.48,
    },
    {
      nombre: "Bibliotecario Media y Polimodal",
      funcion: "Bibliotecario",
      valor: 1.15,
    },
    {
      nombre: "Bibliotecario Instituto Superior",
      funcion: "Bibliotecario",
      valor: 1,
    },
    { nombre: "Preceptor a Bedel", funcion: "Preceptor/Bedel", valor: 1 },
    { nombre: "POT", funcion: "POT", valor: 1.25 },
  ];

  const zonas = [
    { nombre: "Sin datos", valor: 1 },
    { nombre: "Norte", valor: 80 },
    { nombre: "Sur", valor: 80 },
  ];
  const hijosnum = [0, 1, 2, 3, 4, 5, 6, 7];
  const hijosIncap = [0, 1, 2, 3];
  const antiguedad = [
    { nombre: "0", valor: 25 },
    { nombre: "1", valor: 25 },
    { nombre: "2", valor: 30 },
    { nombre: "3", valor: 30 },
    { nombre: "4", valor: 30 },
    { nombre: "5", valor: 40 },
    { nombre: "6", valor: 40 },
    { nombre: "7", valor: 50 },
    { nombre: "8", valor: 50 },
    { nombre: "9", valor: 50 },
    { nombre: "10", valor: 60 },
    { nombre: "11", valor: 60 },
    { nombre: "12", valor: 65 },
    { nombre: "13", valor: 65 },
    { nombre: "14", valor: 65 },
    { nombre: "15", valor: 75 },
    { nombre: "16", valor: 75 },
    { nombre: "17", valor: 85 },
    { nombre: "18", valor: 75 },
    { nombre: "19", valor: 85 },
    { nombre: "20", valor: 105 },
    { nombre: "21", valor: 105 },
    { nombre: "22", valor: 115 },
    { nombre: "23", valor: 115 },
    { nombre: "24", valor: 125 },
    { nombre: "25", valor: 125 },
    { nombre: "26", valor: 125 },
    { nombre: "27", valor: 125 },
    { nombre: "28", valor: 125 },
    { nombre: "29", valor: 125 },
    { nombre: "30", valor: 125 },
    { nombre: "31", valor: 125 },
    { nombre: "32", valor: 125 },
    { nombre: "33", valor: 125 },
    { nombre: "34", valor: 125 },
    { nombre: "35", valor: 125 },
    { nombre: "36", valor: 125 },
    { nombre: "37", valor: 125 },
    { nombre: "38", valor: 125 },
    { nombre: "39", valor: 125 },
    { nombre: "40", valor: 125 },
  ];

  const [cargosFiltradosPorFuncion, setCargosFiltradosPorFuncion] = useState(
    []
  );
  const [sueldo, setSueldo] = useState(0);
  const [zonaUnidad, setZonaUnidad] = useState(0);
  const [zonaImporte, setZonaImporte] = useState(0);
  const [hijos, setHijos] = useState(0);
  const [hijosIncapacitado, setHijosIncapacitado] = useState(0);
  const [hijosEscoIncapacitado, setHijosEscoIncapacitado] = useState(0);
  const [conyuge, setConyuge] = useState(0);
  const [anios, setAnios] = useState(0);
  const [total, setTotal] = useState(0);

  const [ayudaEsc, setAyudaEsc] = useState(0);
  const [ubicacion, setUbicacion] = useState(0);
  const [devolucion, setDevolucion] = useState(0);
  const [otrosIngresos, setOtrosIngresos] = useState(0);

  const [oblig, setOblig] = useState(0);

  const [jubilacion, setjubilacion] = useState(0);
  const [serosTitular, setSerosTitular] = useState(0);
  const [serosFamiliar, setSerosFamiliar] = useState(0);
  const [seguroVidaOblig, setSeguroVidaOblig] = useState(0);
  const [seguroVidaAdicional, setSeguroVidaAdicional] = useState(0);
  const [seguroVidaFamiliar, setSeguroVidaFamiliar] = useState(0);
  const [SerosSeguroTransplante, setSerosSeguroTransplante] = useState(0);
  const [afiliadoAtech, setAfiliadoAtech] = useState(0);
  const [serosCoseguro, setSerosCoseguro] = useState(0);
  const [bancoChubut, setBancoChubut] = useState(0);
  const [impuestoGanancias, setImpuestoGanancias] = useState(0);
  const [descuento, setDescuento] = useState(0);

  const [deducciones, setDeducciones] = useState(0);
  const [neto, setNeto] = useState(0);

  //TOTAL PARCIAL

  useEffect(() => {
    const totalparcial =
      parseFloat(sueldo) +
      parseFloat(zonaImporte) +
      parseFloat(anios) +
      parseFloat(hijos) +
      parseFloat(hijosIncapacitado) +
      parseFloat(hijosEscoIncapacitado) +
      parseFloat(conyuge) +
      parseFloat(ayudaEsc) +
      parseFloat(ubicacion) +
      parseFloat(otrosIngresos) +
      parseFloat(oblig) * -1 +
      parseFloat(devolucion) * -1;
    setTotal(totalparcial.toFixed(2));
  }, [
    sueldo,
    zonaImporte,
    anios,
    hijos,
    hijosIncapacitado,
    hijosEscoIncapacitado,
    conyuge,
    ayudaEsc,
    oblig,
    otrosIngresos,
    devolucion,
  ]);
  //JUBILACION

  useEffect(() => {
    const jubilacionImporte =
      ((parseFloat(sueldo) + parseFloat(zonaImporte) + parseFloat(anios)) *
        16) /
      100;
    setjubilacion(jubilacionImporte.toFixed(2));
  }, [sueldo, zonaImporte, anios]);

  //SEROS titular
  useEffect(() => {
    const serosImporte =
      ((parseFloat(sueldo) + parseFloat(zonaImporte) + parseFloat(anios)) *
        4.25) /
      100;
    setSerosTitular(serosImporte.toFixed(2));
  }, [sueldo, zonaImporte, anios]);

  //DEDUCCIONES

  useEffect(() => {
    const deduccionesImporte =
      parseFloat(jubilacion) +
      parseFloat(serosTitular) +
      parseFloat(serosFamiliar) +
      parseFloat(seguroVidaAdicional) +
      parseFloat(seguroVidaFamiliar) +
      parseFloat(SerosSeguroTransplante) +
      parseFloat(afiliadoAtech) +
      parseFloat(serosCoseguro) +
      parseFloat(bancoChubut) +
      parseFloat(impuestoGanancias) +
      parseFloat(descuento);
    setDeducciones(deduccionesImporte.toFixed(2));
  });

  // TOTAL NETO
  useEffect(() => {
    const neto = parseFloat(total) + parseFloat(deducciones * -1);

    setNeto(neto.toFixed(2));
  });

  const handleFuncionChange = (event) => {
    const cargosFiltrados = cargos.filter(
      (cargo) => cargo.funcion === event.target.value
    );
    setCargosFiltradosPorFuncion(cargosFiltrados);
  };

  const handleCargoChange = (event) => {
    const cargoImporte = SUELDO_BASICO * event.target.value;
    setSueldo(cargoImporte.toFixed(2));
  };

  const handleZonaChange = (event) => {
    setZonaUnidad(event.target.value);
    // 75 x 246/100: 184.5 - De esta forma, el 75 por ciento de 246 es 184.5.
    const zonaImporte = event.target.value * (sueldo / 100);
    setZonaImporte(zonaImporte.toFixed(2));
  };
  const handleHijos = (event) => {
    const HijosImporte = HIJOS_ESCOLARIZADOS * event.target.value;
    setHijos(HijosImporte.toFixed(2));
  };
  const handleHijosIncapacitados = (event) => {
    const HijosIncapacitadoImporte = HIJOS_INCAPACITADO * event.target.value;
    setHijosIncapacitado(HijosIncapacitadoImporte.toFixed(2));
  };
  const handleHijosEscoIncapacitados = (event) => {
    const HijosEscoIncapacitadoImporte =
      HIJOS_INCAPACITADO * event.target.value;
    setHijosEscoIncapacitado(HijosEscoIncapacitadoImporte.toFixed(2));
  };
  const handleConyuge = (event) => {
    if (event.target.value === "SI") {
      const conyuge = COBRO_CONYUGE;
      setConyuge(conyuge.toFixed(2));
    } else {
      const conyuge = 0;
      setConyuge(conyuge);
    }
  };
  const handleantiguedad = (event) => {
    const importeAnios = event.target.value * (sueldo / 100);
    setAnios(importeAnios.toFixed(2));
  };
  const handleserosFamiliar = (event) => {
    if (event.target.value === "SI") {
      const serosFamiliarImporte =
        ((parseFloat(sueldo) + parseFloat(zonaImporte) + parseFloat(anios)) *
          4.25) /
        100;
      setSerosFamiliar(serosFamiliarImporte.toFixed(2));
    } else {
      setSerosFamiliar(0);
    }
  };
  const handleSerosInstitucion = (event) => {
    if (event.target.value === "SI") {
      const SegVidaObli = 250;
      setSeguroVidaOblig(SegVidaObli);
      const SegVidaFami = 160;
      setSeguroVidaFamiliar(SegVidaFami);
      const SegTransplante = 50;
      setSerosSeguroTransplante(SegTransplante);
    } else {
      setSeguroVidaOblig(0);
      setSeguroVidaFamiliar(0);
      setSerosSeguroTransplante(0);
    }
  };

  const handleSeguroAdicional = (event) => {
    if (event.target.value === "SI") {
      const segAdicio =
        ((parseFloat(sueldo) + parseFloat(zonaImporte) + parseFloat(anios)) *
          3.3) /
        100;
      setSeguroVidaAdicional(segAdicio.toFixed(2));
    } else {
      setSeguroVidaAdicional(0);
    }
  };

  const handleAfiliado = (event) => {
    if (event.target.value === "SI") {
      const AfilAtech =
        ((parseFloat(sueldo) + parseFloat(zonaImporte) + parseFloat(anios)) *
          2) /
        100;
      setAfiliadoAtech(AfilAtech.toFixed(2));
    } else {
      setAfiliadoAtech(0);
    }
  };
  return (
    <div>
      <h1 className="head">Calculadora de sueldos</h1>
      <table className="seleccion">
        <tr>
          <th>
            <label>Función</label>
            <select onChange={handleFuncionChange}>
              {funciones.map((funcion, index) => (
                <option key={index} value={funcion}>
                  {funcion}
                </option>
              ))}
            </select>
          </th>

          <th>
            <label>Cargo</label>
            <select onChange={handleCargoChange}>
              {cargosFiltradosPorFuncion.map((cargo, index) => (
                <option key={index} value={cargo.valor}>
                  {cargo.nombre}
                </option>
              ))}
            </select>
          </th>
        </tr>

        <tr>
          <th>
            <label>Zona</label>
            <select onChange={handleZonaChange}>
              {zonas.map((zona, index) => (
                <option key={index} value={zona.valor}>
                  {zona.nombre}
                </option>
              ))}
            </select>
          </th>

          <th>
            <label>Hijos Escolarizados</label>
            <select onChange={handleHijos}>
              {hijosnum.map((hijosnum, index) => (
                <option key={index}>{hijosnum}</option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Cobra por hijo incapacitado?</label>
            <select onChange={handleHijosIncapacitados}>
              {hijosIncap.map((hijosIncap, index) => (
                <option key={index}>{hijosIncap}</option>
              ))}
            </select>
          </th>

          <th>
            <label>Hijos Escolarizado Incapacitado</label>
            <select onChange={handleHijosEscoIncapacitados}>
              {hijosIncap.map((hijosIncap, index) => (
                <option key={index}>{hijosIncap}</option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Cobra por Conyuge en esta institucion ?</label>
            <select onChange={handleConyuge}>
              <option value="NO">NO</option>
              <option>SI</option>
            </select>
          </th>
          <th>
            <label>Antieguedad (Años)</label>
            <select onChange={handleantiguedad}>
              {antiguedad.map((antiguedad, index) => (
                <option key={index} value={antiguedad.valor}>
                  {antiguedad.nombre}
                </option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Te descuentan SEROS por Familiares ?</label>
            <select onChange={handleserosFamiliar}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
          <th>
            <label>Te descuentan SEROS en esta institutcion ?</label>
            <select onChange={handleSerosInstitucion}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Pagas un seguro de vida Adicional ?</label>
            <select onChange={handleSeguroAdicional}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
          <th>
            <label>Afiliado a la ATECH ?</label>
            <select onChange={handleAfiliado}>
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <Input
              type="number"
              color="primary"
              size="xl"
              clearable
              label="SEROS Coseguro"
              initialValue=""
              onChange={(ev) => setSerosCoseguro(ev.target.value)}
              className="barra"
            />
            <button type="submit">ok</button>
          </th>
          <th>
            Ayuda Escolar
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setAyudaEsc(ev.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th>
            <Input
              clearable
              label="Banco Chubut"
              initialValue=""
              className="barra"
              onChange={(ev) => setBancoChubut(ev.target.value)}
            />
          </th>
          <th>
            <Input
              clearable
              label="Ubicacion Geografica"
              initialValue=""
              className="barra"
              onChange={(ev) => setUbicacion(ev.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th>
            Impuesto a la ganancias
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setImpuestoGanancias(ev.target.value)}
            />
          </th>
          <th>
            Oblig.No.Pres.Labor.A
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setOblig(ev.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th>
            Otros Descuentos
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setDescuento(ev.target.value)}
            />
          </th>
          <th>
            Devolucion de haberes
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setDevolucion(ev.target.value)}
            />
          </th>
        </tr>
        <tr>
          <th>
            Otros Ingresos
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={(ev) => setOtrosIngresos(ev.target.value)}
            />
          </th>
        </tr>
      </table>
      <div className="titulos">
        <h2 className="percepciones">Percepciones</h2>
        <h2 className="deducciones">Deducciones</h2>
      </div>

      <div className="container">
        <table className="tabla1">
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Unidad</th>
            <th>Importe</th>
          </tr>
          <tr className="celda">
            <td>1110</td>
            <td>Sueldo básico</td>
            <td></td>
            <td>${sueldo}</td>
          </tr>
          <tr>
            <td>1125</td>
            <td>Antiguedad</td>
            <td></td>
            <td>%{anios}</td>
          </tr>
          <tr className="celda">
            <td>1154</td>
            <td>Zona Patagónica c/ Aportes</td>
            <td>{zonaUnidad}%</td>
            <td>${zonaImporte}</td>
          </tr>
          <tr>
            <td>1213</td>
            <td>Oblig.No Pres.Labor.A</td>
            <td></td>
            <td>{oblig}</td>
          </tr>
          <tr className="celda">
            <td>1872</td>
            <td>Recursos Materiales</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1873</td>
            <td>Zona Patagonica</td>
            <td></td>
            <td>0</td>
          </tr>
          <tr className="celda">
            <td>1804</td>
            <td>Conyuge</td>
            <td></td>
            <td>${conyuge}</td>
          </tr>
          <tr>
            <td>1806</td>
            <td>Hijo Incapacitado</td>
            <td></td>
            <td>${hijosIncapacitado}</td>
          </tr>
          <tr className="celda">
            <td>1809</td>
            <td>Hijo Escolarizado</td>
            <td></td>
            <td>${hijos}</td>
          </tr>
          <tr>
            <td>1814</td>
            <td>Hijo Escolarizado Incap</td>
            <td></td>
            <td>${hijosEscoIncapacitado}</td>
          </tr>
          <tr className="celda">
            <td>1822</td>
            <td>Ayuda Escolar Obligatoria</td>
            <td></td>
            <td>${ayudaEsc}</td>
          </tr>
          <tr>
            <td>1860</td>
            <td>Ubicacion Geografica</td>
            <td></td>
            <td>{ubicacion}</td>
          </tr>
          <tr className="celda">
            <td>1887</td>
            <td>Devolucion de haberes</td>
            <td></td>
            <td>{devolucion}</td>
          </tr>
          <tr>
            <td></td>
            <td>Otros Ingresos/Descuentos </td>
            <td></td>
            <td>{otrosIngresos}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td>${total}</td>
          </tr>
        </table>

        <table className="tabla2">
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Unidad</th>
            <th>Importe</th>
          </tr>
          <tr className="celda">
            <td>1402</td>
            <td>Jubilacion</td>
            <td>16.00 %</td>
            <td>$ {jubilacion}</td>
          </tr>
          <tr>
            <td>1404</td>
            <td>S.E.R.O.S Titular</td>
            <td>4.25%</td>
            <td>{serosTitular}</td>
          </tr>
          <tr className="celda">
            <td>1408</td>
            <td>S.E.R.O.S Familiar</td>
            <td>4.25%</td>
            <td>{serosFamiliar}</td>
          </tr>
          <tr>
            <td>1424</td>
            <td>Seg. Vida Col. Oblig</td>
            <td>250</td>
            <td>{seguroVidaOblig}</td>
          </tr>
          <tr className="celda">
            <td>1426</td>
            <td>Seg. Vida Adicional</td>
            <td>3.30%</td>
            <td>{seguroVidaAdicional}</td>
          </tr>
          <tr>
            <td>1430</td>
            <td>Seg. Vida Col. Familiar</td>
            <td>160</td>
            <td>{seguroVidaFamiliar}</td>
          </tr>
          <tr className="celda">
            <td>1462</td>
            <td>SEROS-Seguro Transplante</td>
            <td>50</td>
            <td>{SerosSeguroTransplante}</td>
          </tr>
          <tr>
            <td>1440</td>
            <td>A.T.E.C.H Cuota</td>
            <td>2%</td>
            <td>{afiliadoAtech}</td>
          </tr>
          <tr className="celda">
            <td>1462</td>
            <td>Seros Coseguro</td>
            <td></td>
            <td>{serosCoseguro}</td>
          </tr>
          <tr>
            <td>1588</td>
            <td>Banco Chubut</td>
            <td></td>
            <td>{bancoChubut}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td>Impuestos a las ganancias</td>
            <td></td>
            <td>{impuestoGanancias}</td>
          </tr>
          <tr>
            <td></td>
            <td>Otros descuentos</td>
            <td></td>
            <td> {descuento}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td>${deducciones}</td>
          </tr>
        </table>
      </div>
      <h2 className="neto">Neto ${neto}</h2>
    </div>
  );
}

export default App;
