import { useEffect, useState } from "react";
import { Input, Spacer } from "@nextui-org/react";
import "./App.css";
import { login } from "./login";

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
    "Regente",
    "Jefe general enseñanza pratica",
    "Bibliotecario",
    "Preceptor",
    "Bedel",
    "POT",
    "Profesor Enseñanza Práctica",
    "ADR",
    "Gabinetista",
  ];
  const cargos = [
    { nombre: "Sin datos", funcion: "", valor: 1 },
    {
      nombre: "Sin datos",
      funcion: "Supervisor",
      valor: 1,
    },
    {
      nombre: "Supervisor Técnico General",
      funcion: "Supervisor",
      valor: 2.73,
    },
    {
      nombre: "Supervisor Técnico Seccional",
      funcion: "Supervisor",
      valor: 2.64,
    },
    {
      nombre: "Secretario de Supervisor Técnico General ",
      funcion: "Supervisor",
      valor: 2.64,
    },
    { nombre: "Supervisor Escolar", funcion: "Supervisor", valor: 2.55 },
    {
      nombre: "Supervisor Escolar de Materias Especiales",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Supervisor General / Secr. Técnico Docente",
      funcion: "Supervisor",
      valor: 2.73,
    },
    { nombre: "Supervisor Técnico", funcion: "Supervisor", valor: 2.55 },
    {
      nombre: "Supervisor Escolar c/Internado y Albergue ",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Supervisor Escolar Hospitalario y Domiciliario",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Supervisor Escolar Escuela Adultos",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Supervisor Escolar Esc Nivel Inicial",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Supervisor Escolar Esc Especial",
      funcion: "Supervisor",
      valor: 2.55,
    },
    {
      nombre: "Sin datos",
      funcion: "Secretario",
      valor: 1,
    },

    {
      nombre: "Secretario de Supervisor Técnico General",
      funcion: "Secretario",
      valor: 2.52,
    },
    {
      nombre: "Secretario de 1ra. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.42,
    },
    {
      nombre: "Secretario de 2da. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.33,
    },
    {
      nombre: "Secretario de 3ra. Media y Polimodal",
      funcion: "Secretario",
      valor: 1.28,
    },
    {
      nombre: "Secretario de Instituto Superior",
      funcion: "Secretario",
      valor: 1.63,
    },
    {
      nombre: "Sin datos",
      funcion: "Director",
      valor: 1,
    },

    {
      nombre: "Director de Perfeccionamiento Docente",
      funcion: "Director",
      valor: 2.64,
    },
    { nombre: "Director 2da Categoría", funcion: "Director", valor: 1.62 },
    {
      nombre: "Director 1ra. Categoría Escuela Común",
      funcion: "Director",
      valor: 1.62,
    },
    { nombre: "Director 3ra Categoría", funcion: "Director", valor: 1.62 },
    { nombre: "Director de Biblioteca(6Hs)", funcion: "Director", valor: 2.27 },
    {
      nombre: "Director 1ra. Categ. Esc. c/ Internado y Albergue",
      funcion: "Director",
      valor: 2.38,
    },
    {
      nombre: "Director 2da. Cat. Esc. c/Internado y Albergue",
      funcion: "Director",
      valor: 2.21,
    },
    {
      nombre: "Director 3ra. Cat. c/Internado y Albergue",
      funcion: "Director",
      valor: 2.2,
    },
    {
      nombre: "Director 1ra. Cat. Esc. Jornada Completa",
      funcion: "Director",
      valor: 2.32,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Común",
      funcion: "Director",
      valor: 2.27,
    },
    { nombre: "Director 2da. Categoría J/C", funcion: "Director", valor: 2.19 },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Común",
      funcion: "Director",
      valor: 2.08,
    },
    { nombre: "Director J/C 7 Hs.", funcion: "Director", valor: 2.07 },

    {
      nombre: "Director 1ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 2.27,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc.Hosp. y Domic.",
      funcion: "Director",
      valor: 2.14,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 2.08,
    },
    {
      nombre: "Director 1ra. Cat J/S Esc. Hosp.y Domic.",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 2da. Cat. Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 3ra.Cat. Esc. Hosp. y Domic.",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 2.27,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 2.14,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Adultos",
      funcion: "Director",
      valor: 2.08,
    },

    {
      nombre: "Director 1ra. Cat. Esc. Adultos",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 2da. Cat. Esc. Adultos 4 Hs.",
      funcion: "Director",
      valor: 1.5,
    },
    {
      nombre: "Director 3ra. Cat. Esc. Adultos",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 2da. Cat. Adultos 4Hs",
      funcion: "Director",
      valor: 1.62,
    }, //preguntar si es uno diferente
    {
      nombre: "Director 1ra. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 2.27,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 2.14,
    },
    {
      nombre: "Director 3ra. Cat. J/C Esc. Especial",
      funcion: "Director",
      valor: 2.08,
    },
    {
      nombre: "Director 1ra. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director",
      valor: 2.27,
    },
    {
      nombre: "Director 2da. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director",
      valor: 2.14,
    },
    { nombre: "Director 3ra Cat. J/C", funcion: "Director", valor: 2.08 },
    { nombre: "Director 1ra Cat.", funcion: "Director", valor: 1.62 },
    {
      nombre: "Director 2da. Cat. J/S Esc. Nivel Inicial .",
      funcion: "Director",
      valor: 2.03,
    }, // chekear con tabla
    {
      nombre: "Director 2da. Cat. J/S Esc. Nivel Inicial 4Hs.",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director 3ra. Categoría Nivel Inicial",
      funcion: "Director",
      valor: 1.62,
    },
    {
      nombre: "Director de 1ra. Media y Polimodal",
      funcion: "Director",
      valor: 2.27,
    },
    {
      nombre: "Director de 2da. Media y Polimodal",
      funcion: "Director",
      valor: 2.14,
    },
    {
      nombre: "Director de 3ra. Media y Polimodal",
      funcion: "Director",
      valor: 2.08,
    },
    {
      nombre: "Director de Instituto Superior",
      funcion: "Director",
      valor: 2.29,
    },
    {
      nombre: "Sin datos",
      funcion: "Vicedirector",
      valor: 1,
    },
    {
      nombre: "Vicedirector J/C",
      funcion: "Vicedirector",
      valor: 1.99,
    },
    {
      nombre: "Vicedirector Esc. Común",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Esc. c/Internado y Albergue",
      funcion: "Vicedirector",
      valor: 2.21,
    },
    {
      nombre: "Vicedirector Esc. J/C",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Esc. Hosp. Domiciliaria",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Escuela Adultos",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Esc. Especial",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Esc. Nivel Inicial",
      funcion: "Vicedirector",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector Media y Polimodal",
      funcion: "Vicedirector",
      valor: 1.48,
    },
    {
      nombre: "Vicedirector de 1ra Media y Polimodal",
      funcion: "Vicedirector",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector de 2da Media y Polimodal",
      funcion: "Vicedirector",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector de 3ra Media y Polimodal",
      funcion: "Vicedirector",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector de 3er Ciclo EGB ",
      funcion: "Vicedirector",
      valor: 1.65,
    },
    { nombre: "Sin datos", funcion: "Maestro", valor: 1 },
    { nombre: "Maestro de Año Escuela Común", funcion: "Maestro", valor: 1 },
    { nombre: "Maestro Bibliotecario (8Hs)", funcion: "Maestro", valor: 2 },
    {
      nombre: "Maestro de Año 3er. Ciclo E.G.B.",
      funcion: "Maestro",
      valor: 1.13,
    },
    { nombre: "Maestro Secretario", funcion: "Maestro", valor: 1.12 },
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
      nombre: "Maestro de Año J/C Esc. Especial",
      funcion: "Maestro",
      valor: 1.75,
    },
    {
      nombre: "Maestro de Año 3er Ciclo Esc. J/C",
      funcion: "Maestro",
      valor: 1.75,
    },
    { nombre: "Maestro de Año Esc. Especial", funcion: "Maestro", valor: 1 },

    {
      nombre: "Maestro de Año J/C Esc. Nivel Inicial.",
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
    {
      nombre: "Sin datos",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Especial Escuela Común (12 Hs)",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Especial Escuela Común (15 Hs)",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Escuela Común (18 Hs)",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Esp.Esc. c/Int. y Alb / M. E. c/12 hs ",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Esp.Esc. c/Int. y Alb / M. E. c/15 hs ",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Esp.Esc. c/Int. y Alb / M. E. c/18hs ",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Esp. Esc. J/C / Maestro Espec. 12 hs. ",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Esp. Esc. J/C / Maestro Espec. 15 hs. ",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Esp. Esc. J/C / Maestro Espec. 18 Hs. ",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Especial Esc. Hosp. y Dom. 12 Hs ",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Especial Esc. Hosp. y Dom. 15 Hs",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Esc. Hosp. y Dom. 18 Hs",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Especial Esc. Adultos ",
      funcion: "Maestro especial",
      valor: 0.9,
    },
    {
      nombre: "Maestro Especial Esc. Adultos 12 Hs",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Especial Esc. Adultos 15 Hs",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Esc. Adultos 18 Hs",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Especial Esc. Especial ",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Esc. Especial 12 Hs",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Especial Esc. Especial 15 Hs",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Esc. Especial 18 Hs",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Maestro Especial Esc. Nivel inicial ",
      funcion: "Maestro especial",
      valor: 0.92,
    },
    {
      nombre: "Maestro Especial Esc. Nivel inicial 12 Hs",
      funcion: "Maestro especial",
      valor: 0.76,
    },
    {
      nombre: "Maestro Especial Esc. Nivel inicial 15 Hs",
      funcion: "Maestro especial",
      valor: 0.94,
    },
    {
      nombre: "Maestro Especial Esc. Nivel inicial 18 Hs ",
      funcion: "Maestro especial",
      valor: 1,
    },
    {
      nombre: "Sin datos",
      funcion: "Regente",
      valor: 1,
    },
    {
      nombre: "Regente de 1ra. Media y Polimodal",
      funcion: "Regente",
      valor: 1.65,
    },
    {
      nombre: "Regente de 2da. Media y Polimodal",
      funcion: "Regente",
      valor: 1.65,
    },
    {
      nombre: "Regente de 3ra. Media y Polimodal  ",
      funcion: "Regente",
      valor: 1.65,
    },
    {
      nombre: "Regente de Instituto Superior  ",
      funcion: "Regente",
      valor: 1.78,
    },
    {
      nombre: "Sin datos",
      funcion: "Jefe general enseñanza pratica",
      valor: 1,
    },
    {
      nombre: "Jefe Gral. Ens. Práct. Media y Poli.",
      funcion: "Jefe general enseñanza pratica",
      valor: 1.48,
    }, // este queda o se borra?
    {
      nombre: "Jefe Gral. Ens. Práct. de 1ra. Media y Poli.",
      funcion: "Jefe general enseñanza pratica",
      valor: 1.65,
    },
    {
      nombre: "Jefe Gral. Ens. Práct. de 2da. Media y Poli.",
      funcion: "Jefe general enseñanza pratica",
      valor: 1.65,
    },
    {
      nombre: "Jefe Gral. Ens. Práct. de 3ra. Media y Poli.",
      funcion: "Jefe general enseñanza pratica",
      valor: 1.65,
    },
    {
      nombre: "Sin datos",
      funcion: "Bibliotecario",
      valor: 1,
    },
    {
      nombre: "Bibliotecario Media y Polimodal",
      funcion: "Bibliotecario",
      valor: 1.15,
    }, // ESTE QUEDA????
    {
      nombre: "Bibliotecario Media y Polimodal 5 Hs",
      funcion: "Bibliotecario",
      valor: 1.25,
    },
    {
      nombre: "Bibliotecario Instituto Superior",
      funcion: "Bibliotecario",
      valor: 1,
    }, //este queda??
    {
      nombre: "Bibliotecario Instituto Superior 5 Hs",
      funcion: "Bibliotecario",
      valor: 1.25,
    },
    { nombre: "Sin datos", funcion: "Preceptor", valor: 0 }, //luego sacar
    { nombre: "Preceptor de Media Polimodal", funcion: "Preceptor", valor: 1 },
    { nombre: "Sin datos", funcion: "Bedel", valor: 0 }, //luego sacar
    { nombre: "Bedel de Instituto Superior  ", funcion: "Bedel", valor: 1 },
    { nombre: "Sin datos", funcion: "POT", valor: 0 },
    { nombre: "POT", funcion: "POT", valor: 1.25 },
    {
      nombre: "Sin datos",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "Profesor Ens. Práctica Esc. Transferidas 16 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "Profesor Ens. Práctica Esc. Técnicas 18 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1.05,
    },
    {
      nombre: "Profesor Ens. Práctica Esc. Agrotécnicas 20 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1.1,
    },
    {
      nombre: "PEP de Centro de Form. Profesional 16 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "PEP Superior CERET 20 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1.1,
    },
    {
      nombre: "PEP de Laboratorio 20 Hs. R",
      funcion: "Profesor Enseñanza Práctica",
      valor: 1.05,
    },
    {
      nombre: "Sin datos",
      funcion: "ADR",
      valor: 0,
    },
    {
      nombre: "Administrador de Redes 20 Hs. R",
      funcion: "ADR",
      valor: 1.05,
    },
    {
      nombre: "Sin datos ",
      funcion: "Gabinetista",
      valor: 1,
    },
    {
      nombre: "Gabinetista con 35 hs. Semanales ",
      funcion: "Gabinetista",
      valor: 1.86,
    },
    {
      nombre: "Gabinetista con 20 hs. Semanales ",
      funcion: "Gabinetista",
      valor: 1.1,
    },
  ];

  const zonas = [
    { nombre: "Sin datos", valor: 0 },
    { nombre: "Norte", valor: 60.4 },
    { nombre: "Sur", valor: 80 },
  ];
  const hijosnum = [0, 1, 2, 3, 4, 5, 6, 7];
  const hijosIncap = [0, 1, 2, 3];
  const horasCatredas = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40,
  ];
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
  const [zonaPatagonica, setZonaPatagonica] = useState(0);
  const [zonaPatagonicaUnidad, setZonaPatagonicaUnidad] = useState(0);

  const [hijos, setHijos] = useState(0);
  const [hijosIncapacitado, setHijosIncapacitado] = useState(0);
  const [hijosEscoIncapacitado, setHijosEscoIncapacitado] = useState(0);
  const [conyuge, setConyuge] = useState(0);
  const [anios, setAnios] = useState(0);
  const [aniosPorcentaje, setAniosPorcentaje] = useState(0);
  const [recursosMateriales, setRecursosMateriales] = useState(0);

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

  const [docente, setDocente] = useState(0);
  const [nmedio, setNmedio] = useState(0);
  const [nsuperior, setNsuperior] = useState(0);

  const [sueldo1, setSueldo1] = useState(0);

  const getValue = (value) => {
    if (value !== "") {
      return parseFloat(value);
    }

    return 0;
  };

  //Formato para pesos
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  //TOTAL PARCIAL

  useEffect(() => {
    const totalparcial =
      parseFloat(sueldo) +
      parseFloat(zonaImporte) +
      parseFloat(zonaPatagonica) +
      parseFloat(recursosMateriales) +
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
    zonaPatagonica,
    recursosMateriales,
    anios,
    hijos,
    hijosIncapacitado,
    hijosEscoIncapacitado,
    conyuge,
    ayudaEsc,
    ubicacion,
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
      parseFloat(seguroVidaOblig) +
      parseFloat(seguroVidaAdicional) +
      parseFloat(seguroVidaFamiliar) +
      parseFloat(SerosSeguroTransplante) +
      parseFloat(afiliadoAtech) +
      parseFloat(serosCoseguro) +
      parseFloat(bancoChubut) +
      parseFloat(impuestoGanancias) +
      parseFloat(descuento);
    setDeducciones(deduccionesImporte.toFixed(2));
  }, [
    jubilacion,
    serosTitular,
    serosFamiliar,
    seguroVidaOblig,
    seguroVidaAdicional,
    seguroVidaFamiliar,
    SerosSeguroTransplante,
    afiliadoAtech,
    serosCoseguro,
    bancoChubut,
    impuestoGanancias,
    descuento,
  ]);

  // TOTAL NETO
  useEffect(() => {
    const neto = parseFloat(total) + parseFloat(deducciones * -1);

    setNeto(neto);
  }, [total, deducciones]);

  //RECURSOS MATERIALES
  useEffect(() => {
    const recursos = (parseFloat(sueldo) * 15.5) / 100;
    setRecursosMateriales(recursos.toFixed(2));
    //actualizar antiguedad
    function handleantiguedad() {}
  }, [sueldo]);

  //CAMPO ATECH
  useEffect(() => {
    const afiliacion = (parseFloat(total) * 2) / 100;

    setAfiliadoAtech(afiliacion.toFixed(2));
  }, [total]);

  const handleFuncionChange = (event) => {
    const cargosFiltrados = cargos.filter(
      (cargo) => cargo.funcion === event.target.value
    );
    setCargosFiltradosPorFuncion(cargosFiltrados);
  };

  const handleCargoChange = (event) => {
    const cargoImporte = SUELDO_BASICO * event.target.value;
    setSueldo(cargoImporte.toFixed(2));
    setSueldo1(cargoImporte);

    //descuentos de seros

    const SegVidaObli = 250;
    setSeguroVidaOblig(SegVidaObli);
    const SegVidaFami = 160;
    setSeguroVidaFamiliar(SegVidaFami);
    const SegTransplante = 50;
    setSerosSeguroTransplante(SegTransplante);
  };

  const handleZonaChange = (event) => {
    setZonaUnidad(event.target.value);
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
    setAniosPorcentaje(event.target.value);

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
  const handleCoseguro = (ev) => {
    const coseguroValor = getValue(ev.target.value);
    setSerosCoseguro(coseguroValor);
  };

  const handleAyudaEscolar = (ev) => {
    const ayudaValor = getValue(ev.target.value);
    setAyudaEsc(ayudaValor);
  };

  const handleBancoChubut = (ev) => {
    const bancoValor = getValue(ev.target.value);
    setBancoChubut(bancoValor);
  };

  const handleUbicacionGeo = (ev) => {
    const ubicacionValor = getValue(ev.target.value);
    setUbicacion(ubicacionValor);
  };

  const handleImpuesto = (ev) => {
    const impuestoValor = getValue(ev.target.value);
    setImpuestoGanancias(impuestoValor);
  };

  const handleOblig = (ev) => {
    const obligValor = getValue(ev.target.value);
    setOblig(obligValor);
  };

  const handleDescuentos = (ev) => {
    const descuentosValor = getValue(ev.target.value);
    setDescuento(descuentosValor);
  };

  const handleDevolucion = (ev) => {
    const devolucionValor = getValue(ev.target.value);
    setDevolucion(devolucionValor);
  };

  const handleOtrosIngresos = (ev) => {
    const ingresosValor = getValue(ev.target.value);
    setOtrosIngresos(ingresosValor);
  };
  // const handleZona = (ev) => {
  //   if (ev.target.value === "Norte") {
  //     const norte = (sueldo / 100) * 60.4;
  //     setZonaImporte(norte.toFixed(2));
  //     setZonaUnidad(60.4);

  //     const zonaNorte = (sueldo / 100) * 6.14;
  //     setZonaPatagonica(zonaNorte.toFixed(2));
  //     setZonaPatagonicaUnidad(6.14);
  //   } else if (ev.target.value === "Sur") {
  //     const sur = (sueldo / 100) * 80;
  //     setZonaImporte(sur.toFixed(2));
  //     setZonaUnidad(80);

  //     const zonaSur = (sueldo / 100) * 8.66;
  //     setZonaPatagonica(zonaSur.toFixed(2));
  //     setZonaPatagonicaUnidad(8.66);
  //   } else {
  //     setZonaImporte(0);
  //     setZonaUnidad(0);

  //     setZonaPatagonica(0);
  //     setZonaPatagonicaUnidad(0);
  //   }
  // };
  const handleDocente = (ev) => {
    if (ev.target.value === "NM") {
      setDocente("nm");
    } else if (ev.target.value === "NS") {
      setDocente("ns");
    } else {
      setDocente(0);
    }
  };
  const hsCatedra = (ev) => {
    if (docente === "nm") {
      const nmimporte = ev.target.value * 0.05 * SUELDO_BASICO;
      setNmedio(nmimporte);

      setSueldo(parseFloat(sueldo1) + parseFloat(nmimporte));
    } else {
      const nsimporte = ev.target.value * 0.0588 * SUELDO_BASICO;
      setNsuperior(nsimporte);
      setSueldo(parseFloat(sueldo1) + parseFloat(nsimporte));
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
            <label>Te descuentan SEROS por Familiares ?</label>
            <select onChange={handleserosFamiliar}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
        </tr>

        <tr>
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
          <th>
            <label>Pagas un seguro de vida Adicional ?</label>
            <select onChange={handleSeguroAdicional}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Antigúedad (Años)</label>
            <select onChange={handleantiguedad}>
              {antiguedad.map((antiguedad, index) => (
                <option key={index} value={antiguedad.valor}>
                  {antiguedad.nombre}
                </option>
              ))}
            </select>
          </th>
          <th>
            Seros Coseguro
            <input
              onChange={handleCoseguro}
              type="number"
              size="xl"
              clearable
              label="SEROS Coseguro"
              initialValue=""
              className="barra2"
            />
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
            Banco Chubut
            <input
              clearable
              label="Banco Chubut"
              initialValue=""
              className="barra2"
              onChange={handleBancoChubut}
            />
          </th>
        </tr>
        <tr>
          <th>
            <label>Docente Nivel Medio o Superior</label>
            <select onChange={handleDocente}>
              <option value="0">Sin datos</option>
              <option value="NM">HC Nivel Medio</option>
              <option value="NS">HC Nivel Superior</option>
            </select>
          </th>
          <th>
            Oblig.No.Pres.Labor.A
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={handleOblig}
            />
          </th>
        </tr>
        <tr>
          <th>
            <label>Cantida HC</label>
            <select onChange={hsCatedra}>
              {horasCatredas.map((horasCatedra, index) => (
                <option key={index}>{horasCatedra}</option>
              ))}
            </select>
          </th>
          <th>
            Impuesto a la ganancias
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={handleImpuesto}
            />
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
            Devolucion de haberes
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={handleDevolucion}
            />
          </th>
        </tr>
        <tr>
          <th>
            <label>Hijos escolarizados</label>
            <select onChange={handleHijos}>
              {hijosnum.map((hijosnum, index) => (
                <option key={index}>{hijosnum}</option>
              ))}
            </select>
          </th>
          <th>
            Otros Descuentos
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={handleDescuentos}
            />
          </th>
        </tr>
        <tr>
          <th>
            <label>Cobra por hijo con discapacidad?</label>
            <select onChange={handleHijosIncapacitados}>
              {hijosIncap.map((hijosIncap, index) => (
                <option key={index}>{hijosIncap}</option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Hijos escolarizado con discapacidad</label>
            <select onChange={handleHijosEscoIncapacitados}>
              {hijosIncap.map((hijosIncap, index) => (
                <option key={index}>{hijosIncap}</option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>
            Ayuda Escolar
            <input
              clearable
              type="text"
              name="firstname"
              size="10"
              className="barra2"
              onChange={handleAyudaEscolar}
            />
          </th>
        </tr>
        <tr>
          <th>
            Ubicacion Geografica
            <input
              clearable
              label="Ubicacion Geografica"
              initialValue=""
              className="barra2"
              onChange={handleUbicacionGeo}
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
              onChange={handleOtrosIngresos}
            />
          </th>
        </tr>
        <tr>
          <th></th>
        </tr>
        <tr>
          <th></th>
        </tr>
        <tr>
          <th></th>
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
            <td>{formatter.format(sueldo)}</td>
          </tr>
          <tr>
            <td>1125</td>
            <td>Antiguedad</td>
            <td>{aniosPorcentaje}%</td>
            <td>{formatter.format(anios)}</td>
          </tr>
          <tr className="celda">
            <td>1154</td>
            <td>Zona Patagónica c/ Aportes</td>
            <td>{zonaUnidad}%</td>
            <td>{formatter.format(zonaImporte)}</td>
          </tr>
          <tr>
            <td>1213</td>
            <td>Oblig.No Pres.Labor.A</td>
            <td></td>
            <td>{formatter.format(oblig)}</td>
          </tr>
          <tr className="celda">
            <td>1872</td>
            <td>Recursos Materiales</td>
            <td>15.5%</td>
            <td>{formatter.format(recursosMateriales)}</td>
          </tr>
          <tr>
            <td>1804</td>
            <td>Conyuge</td>
            <td></td>
            <td>{formatter.format(conyuge)}</td>
          </tr>
          <tr className="celda">
            <td>1806</td>
            <td>Hijo Incapacitado</td>
            <td></td>
            <td>{formatter.format(hijosIncapacitado)}</td>
          </tr>
          <tr>
            <td>1809</td>
            <td>Hijo Escolarizado</td>
            <td></td>
            <td>{formatter.format(hijos)}</td>
          </tr>
          <tr className="celda">
            <td>1814</td>
            <td>Hijo Escolarizado Incap</td>
            <td></td>
            <td>{formatter.format(hijosEscoIncapacitado)}</td>
          </tr>
          <tr>
            <td>1822</td>
            <td>Ayuda Escolar Obligatoria</td>
            <td></td>
            <td>{formatter.format(ayudaEsc)}</td>
          </tr>
          <tr className="celda">
            <td>1860</td>
            <td>Ubicacion Geografica</td>
            <td></td>
            <td>{formatter.format(ubicacion)}</td>
          </tr>
          <tr>
            <td>1887</td>
            <td>Devolucion de haberes</td>
            <td></td>
            <td>{formatter.format(devolucion)}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td>Otros Ingresos/Descuentos </td>
            <td></td>
            <td>{formatter.format(otrosIngresos)}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{formatter.format(total)}</td>
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
            <td>{formatter.format(jubilacion)}</td>
          </tr>
          <tr>
            <td>1404</td>
            <td>S.E.R.O.S Titular</td>
            <td>4.25%</td>
            <td>{formatter.format(serosTitular)}</td>
          </tr>
          <tr className="celda">
            <td>1408</td>
            <td>S.E.R.O.S Familiar</td>
            <td>4.25%</td>
            <td>{formatter.format(serosFamiliar)}</td>
          </tr>
          <tr>
            <td>1424</td>
            <td>Seg. Vida Col. Oblig</td>
            <td>250</td>
            <td>{formatter.format(seguroVidaOblig)}</td>
          </tr>
          <tr className="celda">
            <td>1426</td>
            <td>Seg. Vida Adicional</td>
            <td>3.30%</td>
            <td>{formatter.format(seguroVidaAdicional)}</td>
          </tr>
          <tr>
            <td>1430</td>
            <td>Seg. Vida Col. Familiar</td>
            <td>160</td>
            <td>{formatter.format(seguroVidaFamiliar)}</td>
          </tr>
          <tr className="celda">
            <td>1462</td>
            <td>SEROS-Seguro Transplante</td>
            <td>50</td>
            <td>{formatter.format(SerosSeguroTransplante)}</td>
          </tr>
          <tr>
            <td>1440</td>
            <td>A.T.E.C.H Cuota</td>
            <td>2%</td>
            <td>{formatter.format(afiliadoAtech)}</td>
          </tr>
          <tr className="celda">
            <td>1462</td>
            <td>Seros Coseguro</td>
            <td></td>
            <td>{formatter.format(serosCoseguro)}</td>
          </tr>
          <tr>
            <td>1588</td>
            <td>Banco Chubut</td>
            <td></td>
            <td>{formatter.format(bancoChubut)}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td>Impuestos a las ganancias</td>
            <td></td>
            <td>{formatter.format(impuestoGanancias)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Otros descuentos</td>
            <td></td>
            <td>{formatter.format(descuento)}</td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td>{formatter.format(deducciones)}</td>
          </tr>
        </table>
      </div>
      <h2 className="neto">Neto {formatter.format(neto)}</h2>
    </div>
  );
}

export default App;
