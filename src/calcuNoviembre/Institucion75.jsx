import { useEffect, useRef, useState } from "react";
import { Input, Spacer } from "@nextui-org/react";
import "../App";
import { useBearStore } from "../store/EstGloSig";

function Institucion35() {
  const SUELDO_BASICO = 256160.66;
  const HIJOS_ESCOLARIZADOS = 42099;
  const HIJOS_INCAPACITADO = 168057;
  const COBRO_CONYUGE = 12270;
  const HC_NIVEL_MEDIO = 0.05;
  const HC_NIVEL_SUPERIOR = 0.0588;
  const funciones = [
    "Sin datos",
    "Supervisor/a",
    "Secretaria/o",
    "Director/a",
    "Vicedirector/a",
    "Maestra/o",
    "Maestra/o especial",
    "Regente",
    "Jefa/e Enseñanza Práctica",
    "Bibliotecaria/o",
    "Preceptora/o ",
    "Bedel",
    "POT",
    "Profesor/a Enseñanza Práctica",
    "ADR",
    "Gabinetista",
  ];
  const cargos = [
    { nombre: "Sin datos", funcion: "", valor: 1 },
    {
      nombre: "Sin datos",
      funcion: "Supervisor/a",
      valor: 1,
    },
    {
      nombre: "Supervisor/a Técnico/a General",
      funcion: "Supervisor/a",
      valor: 2.73,
    },
    {
      nombre: "Supervisor/a Técnico/a Seccional",
      funcion: "Supervisor/a",
      valor: 2.64,
    },
    {
      nombre: "Secretaria/o de Supervisor/a Técnico/a General ",
      funcion: "Supervisor/a",
      valor: 2.64,
    },
    { nombre: "Supervisor/a Escolar", funcion: "Supervisor/a", valor: 2.55 },
    {
      nombre: "Supervisor/a Escolar de Materias Especiales",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Supervisor/a General / Secr. Técnico/a Docente",
      funcion: "Supervisor/a",
      valor: 2.73,
    },
    { nombre: "Supervisor/a Técnico/a", funcion: "Supervisor/a", valor: 2.55 },
    {
      nombre: "Supervisor/a Escolar c/Internado y Albergue ",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Supervisor/a Escolar Hospitalario y Domiciliario",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Supervisor/a Escolar Escuela Adultos",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Supervisor/a Escolar Esc Nivel Inicial",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Supervisor/a Escolar Esc Especial",
      funcion: "Supervisor/a",
      valor: 2.55,
    },
    {
      nombre: "Sin datos",
      funcion: "Secretaria/o",
      valor: 1,
    },
    {
      nombre: "Secretaria/o de 1ra. Media y Polimodal",
      funcion: "Secretaria/o",
      valor: 1.42,
    },
    {
      nombre: "Secretaria/o de 2da. Media y Polimodal",
      funcion: "Secretaria/o",
      valor: 1.33,
    },
    {
      nombre: "Secretaria/o de 3ra. Media y Polimodal",
      funcion: "Secretaria/o",
      valor: 1.28,
    },
    {
      nombre: "Secretaria/o de Instituto Superior",
      funcion: "Secretaria/o",
      valor: 1.63,
    },
    {
      nombre: "Sin datos",
      funcion: "Director/a",
      valor: 1,
    },

    {
      nombre: "Director/a de Perfeccionamiento Docente",
      funcion: "Director/a",
      valor: 2.64,
    },
    { nombre: "Director 2da Categoría", funcion: "Director/a", valor: 1.62 },
    {
      nombre: "Director/a 1ra. Categoría Escuela Común",
      funcion: "Director/a",
      valor: 1.62,
    },
    { nombre: "Director/a 3ra Categoría", funcion: "Director/a", valor: 1.62 },
    {
      nombre: "Director/a de Biblioteca(6Hs)",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 1ra. Categ. Esc. c/ Internado y Albergue",
      funcion: "Director/a",
      valor: 2.38,
    },
    {
      nombre: "Director/a 2da. Cat. Esc. c/Internado y Albergue",
      funcion: "Director/a",
      valor: 2.21,
    },
    {
      nombre: "Director/a 3ra. Cat. c/Internado y Albergue",
      funcion: "Director/a",
      valor: 2.2,
    },
    {
      nombre: "Director/a 1ra. Cat. Esc. Jornada Completa",
      funcion: "Director/a",
      valor: 2.32,
    },
    {
      nombre: "Director/a 1ra. Cat. J/C Esc. Común",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 2da. Categoría J/C",
      funcion: "Director/a",
      valor: 2.19,
    },
    {
      nombre: "Director/a 3ra. Cat. J/C Esc. Común",
      funcion: "Director/a",
      valor: 2.08,
    },
    { nombre: "Director/a J/C 7 Hs.", funcion: "Director/a", valor: 2.07 },

    {
      nombre: "Director/a 1ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 2da. Cat. J/C Esc.Hosp. y Domic.",
      funcion: "Director/a",
      valor: 2.14,
    },
    {
      nombre: "Director/a 3ra. Cat. J/C Esc. Hosp. y Domic.",
      funcion: "Director/a",
      valor: 2.08,
    },
    {
      nombre: "Director/a 1ra. Cat J/S Esc. Hosp.y Domic.",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 2da. Cat. Esc. Hosp. y Domic.",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 3ra.Cat. Esc. Hosp. y Domic.",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 1ra. Cat. J/C Esc. Adultos",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 2da. Cat. J/C Esc. Adultos",
      funcion: "Director/a",
      valor: 2.14,
    },
    {
      nombre: "Director/a 3ra. Cat. J/C Esc. Adultos",
      funcion: "Director/a",
      valor: 2.08,
    },

    {
      nombre: "Director/a 1ra. Cat. Esc. Adultos",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 2da. Cat. Esc. Adultos 4 Hs.",
      funcion: "Director/a",
      valor: 1.5,
    },
    {
      nombre: "Director/a 3ra. Cat. Esc. Adultos",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 2da. Cat. Adultos 4Hs",
      funcion: "Director/a",
      valor: 1.62,
    }, //preguntar si es uno diferente
    {
      nombre: "Director/a 1ra. Cat. J/C Esc. Especial",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 2da. Cat. J/C Esc. Especial",
      funcion: "Director/a",
      valor: 2.14,
    },
    {
      nombre: "Director/a 3ra. Cat. J/C Esc. Especial",
      funcion: "Director/a",
      valor: 2.08,
    },
    {
      nombre: "Director/a 1ra. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a 2da. Cat. J/C Esc. Educ. Inicial",
      funcion: "Director/a",
      valor: 2.14,
    },
    { nombre: "Director/a 3ra Cat. J/C", funcion: "Director/a", valor: 2.08 },
    { nombre: "Director/a 1ra Cat.", funcion: "Director/a", valor: 1.62 },
    {
      nombre: "Director/a 2da. Cat. J/S Esc. Nivel Inicial .",
      funcion: "Director/a",
      valor: 2.03,
    }, // chekear con tabla
    {
      nombre: "Director/a 2da. Cat. J/S Esc. Nivel Inicial 4Hs.",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a 3ra. Categoría Nivel Inicial",
      funcion: "Director/a",
      valor: 1.62,
    },
    {
      nombre: "Director/a de 1ra. Media y Polimodal",
      funcion: "Director/a",
      valor: 2.27,
    },
    {
      nombre: "Director/a de 2da. Media y Polimodal",
      funcion: "Director/a",
      valor: 2.14,
    },
    {
      nombre: "Director/a de 3ra. Media y Polimodal",
      funcion: "Director/a",
      valor: 2.08,
    },
    {
      nombre: "Director/a de Instituto Superior",
      funcion: "Director/a",
      valor: 2.29,
    },
    {
      nombre: "Sin datos",
      funcion: "Vicedirector/a",
      valor: 1,
    },
    {
      nombre: "Vicedirector/a J/C",
      funcion: "Vicedirector/a",
      valor: 1.99,
    },
    {
      nombre: "Vicedirector/a Esc. Común",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Esc. c/Internado y Albergue",
      funcion: "Vicedirector/a",
      valor: 2.21,
    },
    {
      nombre: "Vicedirector/a Esc. J/C",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Esc. Hosp. Domiciliaria",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Escuela Adultos",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Esc. Especial",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Esc. Nivel Inicial",
      funcion: "Vicedirector/a",
      valor: 1.56,
    },
    {
      nombre: "Vicedirector/a Media y Polimodal",
      funcion: "Vicedirector/a",
      valor: 1.48,
    },
    {
      nombre: "Vicedirector/a de 1ra Media y Polimodal",
      funcion: "Vicedirector/a",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector/a de 2da Media y Polimodal",
      funcion: "Vicedirector/a",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector/a de 3ra Media y Polimodal",
      funcion: "Vicedirector/a",
      valor: 1.65,
    },
    {
      nombre: "Vicedirector/a de 3er Ciclo EGB ",
      funcion: "Vicedirector/a",
      valor: 1.65,
    },
    { nombre: "Sin datos", funcion: "Maestra/o", valor: 1 },
    {
      nombre: "Maestra/o de Año Escuela Común",
      funcion: "Maestra/o",
      valor: 1,
    },
    {
      nombre: "Maestra/o Bibliotecaria/o (8Hs)",
      funcion: "Maestra/o",
      valor: 2,
    },
    {
      nombre: "Maestra/o de Año 3er. Ciclo E.G.B.",
      funcion: "Maestra/o",
      valor: 1.13,
    },
    { nombre: "Maestra/o Secretaria/o", funcion: "Maestra/o", valor: 1.12 },
    {
      nombre: "Maestra/o de Año c/Internado y Albergue",
      funcion: "Maestra/o",
      valor: 1.18,
    },
    { nombre: "Maestra/o de Año J/C", funcion: "Maestra/o", valor: 1.75 },
    {
      nombre: "Maestra/o de Orientación y Tutoría",
      funcion: "Maestra/o",
      valor: 1.16,
    },
    {
      nombre: "Maestra/o de Orientación y TutoríaJ/C 7 Hs. ",
      funcion: "Maestra/o",
      valor: 1.78,
    },
    {
      nombre: "Maestra/o de Año Esc. Hosp. y Domiciliaria",
      funcion: "Maestra/o",
      valor: 1,
    },
    {
      nombre: "Maestra/o de Año 3er. C. EGB Esc. Dom./Hosp.",
      funcion: "Maestra/o",
      valor: 1.13,
    },
    { nombre: "Maestra/o de Año Esc. Adultos", funcion: "Maestra/o", valor: 1 },
    {
      nombre: "Maestra/o de Año J/C Esc. Especial",
      funcion: "Maestra/o",
      valor: 1.75,
    },
    {
      nombre: "Maestra/o de Año 3er Ciclo Esc. J/C",
      funcion: "Maestra/o",
      valor: 1.75,
    },
    {
      nombre: "Maestra/o de Año Esc. Especial",
      funcion: "Maestra/o",
      valor: 1,
    },

    {
      nombre: "Maestra/o de Año J/C Esc. Nivel Inicial.",
      funcion: "Maestra/o",
      valor: 1.75,
    },
    {
      nombre: "Maestra/o de Año Esc. Nivel Inicial",
      funcion: "Maestra/o",
      valor: 1,
    },

    {
      nombre: "Maestra/o de Ens. Práct. J. Sección Med. y Poli.",
      funcion: "Maestra/o",
      valor: 1.05,
    },
    {
      nombre: "Maestra/o de Enseñanza Práctica",
      funcion: "Maestra/o",
      valor: 0.95,
    },
    {
      nombre: "Sin datos",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Especial Escuela Común (12 Hs)",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Especial Escuela Común (15 Hs)",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Escuela Común (18 Hs)",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Esp.Esc. c/Int. y Alb / M. E. c/12 hs ",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Esp.Esc. c/Int. y Alb / M. E. c/15 hs ",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Esp.Esc. c/Int. y Alb / M. E. c/18hs ",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Esp. Esc. J/C / Maestra/o Espec. 12 hs. ",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Esp. Esc. J/C / Maestra/o Espec. 15 hs. ",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Esp. Esc. J/C / Maestra/o Espec. 18 Hs. ",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Especial Esc. Hosp. y Dom. 12 Hs ",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Especial Esc. Hosp. y Dom. 15 Hs",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Esc. Hosp. y Dom. 18 Hs",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Especial Esc. Adultos ",
      funcion: "Maestra/o especial",
      valor: 0.9,
    },
    {
      nombre: "Maestra/o Especial Esc. Adultos 12 Hs",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Especial Esc. Adultos 15 Hs",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Esc. Adultos 18 Hs",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Especial Esc. Especial ",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Esc. Especial 12 Hs",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Especial Esc. Especial 15 Hs",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Esc. Especial 18 Hs",
      funcion: "Maestra/o especial",
      valor: 1,
    },
    {
      nombre: "Maestra/o Especial Esc. Nivel inicial ",
      funcion: "Maestra/o especial",
      valor: 0.92,
    },
    {
      nombre: "Maestra/o Especial Esc. Nivel inicial 12 Hs",
      funcion: "Maestra/o especial",
      valor: 0.76,
    },
    {
      nombre: "Maestra/o Especial Esc. Nivel inicial 15 Hs",
      funcion: "Maestra/o especial",
      valor: 0.94,
    },
    {
      nombre: "Maestra/o Especial Esc. Nivel inicial 18 Hs ",
      funcion: "Maestra/o especial",
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
      funcion: "Jefa/e Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "Jefa/e Gral. Ens. Práct. de 1ra. Media y Poli.",
      funcion: "Jefa/e Enseñanza Práctica",
      valor: 1.65,
    },
    {
      nombre: "Jefa/e Gral. Ens. Práct. de 2da. Media y Poli.",
      funcion: "Jefa/e Enseñanza Práctica",
      valor: 1.65,
    },
    {
      nombre: "Jefa/e Gral. Ens. Práct. de 3ra. Media y Poli.",
      funcion: "Jefa/e Enseñanza Práctica",
      valor: 1.65,
    },
    {
      nombre: "Sin datos",
      funcion: "Bibliotecaria/o",
      valor: 1,
    },
    {
      nombre: "Bibliotecario Media y Polimodal 5 Hs",
      funcion: "Bibliotecaria/o",
      valor: 1.25,
    },
    {
      nombre: "Bibliotecaria/o Instituto Superior 5 Hs",
      funcion: "Bibliotecaria/o",
      valor: 1.25,
    },
    { nombre: "Sin datos", funcion: "Preceptora/o ", valor: 0 }, //luego sacar
    {
      nombre: "Preceptora/o  de Media Polimodal",
      funcion: "Preceptora/o ",
      valor: 1,
    },
    { nombre: "Sin datos", funcion: "Bedel", valor: 0 }, //luego sacar
    { nombre: "Bedel de Instituto Superior  ", funcion: "Bedel", valor: 1 },
    { nombre: "Sin datos", funcion: "POT", valor: 0 },
    { nombre: "POT", funcion: "POT", valor: 1.16 }, //cambie el valor de 1.25 a 1.16
    {
      nombre: "Sin datos",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "Profesor/a Ens. Práctica Esc. Transferidas 16 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "Profesor/a Ens. Práctica Esc. Técnicas 18 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1.05,
    },
    {
      nombre: "Profesor/a Ens. Práctica Esc. Agrotécnicas 20 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1.1,
    },
    {
      nombre: "PEP de Centro de Form. Profesional 16 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1,
    },
    {
      nombre: "PEP Superior CERET 20 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1.1,
    },
    {
      nombre: "PEP de Laboratorio 20 Hs. R",
      funcion: "Profesor/a Enseñanza Práctica",
      valor: 1.05,
    },
    {
      nombre: "Sin datos",
      funcion: "ADR",
      valor: 0,
    },
    {
      nombre: "Administrador/a de Redes 20 Hs. R",
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
    { nombre: "Norte", valor: 100 },
    { nombre: "Sur", valor: 100 },
  ];
  const hijosnum = [0, 1, 2, 3, 4, 5, 6, 7];
  const hijosIncap = [0, 1, 2, 3];
  const horasCatredas = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40,,41,42,43,44,45
  ];
  const antiguedad = [
    { nombre: "Sin datos", valor: 0 },
    { nombre: "0", valor: 40 },
    { nombre: "1", valor: 40 },
    { nombre: "2", valor: 45 },
    { nombre: "3", valor: 45 },
    { nombre: "4", valor: 45 },
    { nombre: "5", valor: 55 },
    { nombre: "6", valor: 55 },
    { nombre: "7", valor: 65 },
    { nombre: "8", valor: 65 },
    { nombre: "9", valor: 65 },
    { nombre: "10", valor: 75 },
    { nombre: "11", valor: 75 },
    { nombre: "12", valor: 85 },
    { nombre: "13", valor: 85 },
    { nombre: "14", valor: 85 },
    { nombre: "15", valor: 95 },
    { nombre: "16", valor: 95 },
    { nombre: "17", valor: 105 },
    { nombre: "18", valor: 105 },
    { nombre: "19", valor: 105 },
    { nombre: "20", valor: 125 },
    { nombre: "21", valor: 125 },
    { nombre: "22", valor: 135 },
    { nombre: "23", valor: 135 },
    { nombre: "24", valor: 145 },
    { nombre: "25", valor: 145 },
    { nombre: "26", valor: 145 },
    { nombre: "27", valor: 145 },
    { nombre: "28", valor: 145 },
    { nombre: "29", valor: 145 },
    { nombre: "30", valor: 145 },
    { nombre: "31", valor: 145 },
    { nombre: "32", valor: 145 },
    { nombre: "33", valor: 145 },
    { nombre: "34", valor: 145 },
    { nombre: "35", valor: 145 },
    { nombre: "36", valor: 145 },
    { nombre: "37", valor: 145 },
    { nombre: "38", valor: 145 },
    { nombre: "39", valor: 145 },
    { nombre: "40", valor: 145 },
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

  const [sueldo1, setSueldo1] = useState(0);

  const [sueldo2, setSueldo2] = useState(0); //esto va  a contener el bruto sin las asignaciones familiares
  const [PorcentajPd, setPorcentajePd] = useState(0); //contiene el 15% del basico si es que tiene PD

  const valorEv = useRef(0);
  const [sueldoBase, setSueldoBase] =useState(0)

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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const [showCalculations, setShowCalculations] = useState(false);

  useEffect(() => {
    if (showCalculations) {
      const resultadopd = sueldo * 0.15;
      setPorcentajePd(resultadopd);
      // Aquí puedes realizar los cálculos basados en el estado de sueldo
    } else {
      setPorcentajePd(0);
    }
  }, [showCalculations, sueldo]);
  const handleToggleCalculations = () => {
    setShowCalculations(!showCalculations);
  };

  //TOTAL PARCIAL

  useEffect(() => {
    const totalparcial =
      parseFloat(sueldo) +
      parseFloat(PorcentajPd) +
      parseFloat(zonaImporte) +
      parseFloat(recursosMateriales) +
      parseFloat(anios) +
      parseFloat(hijos) +
      parseFloat(hijosIncapacitado) +
      parseFloat(hijosEscoIncapacitado) +
      parseFloat(conyuge) +
      parseFloat(ayudaEsc) +
      parseFloat(ubicacion) +
      parseFloat(otrosIngresos);

    setTotal(totalparcial.toFixed(2));
  }, [
    sueldo,
    PorcentajPd,
    zonaImporte,
    recursosMateriales,
    anios,
    hijos,
    hijosIncapacitado,
    hijosEscoIncapacitado,
    conyuge,
    ayudaEsc,
    ubicacion,
    otrosIngresos,
  ]);
  //JUBILACION

  useEffect(() => {
    const jubilacionImporte = (parseFloat(total) * 16) / 100;
    setjubilacion(jubilacionImporte.toFixed(2));
  }, [total]);

  //SEROS titular
  useEffect(() => {
    const serosImporte = (parseFloat(total) * 4.25) / 100;
    setSerosTitular(serosImporte.toFixed(2));
  }, [total]);

  //DEDUCCIONES

  useEffect(() => {
    const deduccionesImporte1 =
      parseFloat(jubilacion) +
      parseFloat(serosTitular) +
      parseFloat(serosFamiliar) +
      parseFloat(seguroVidaOblig) +
      parseFloat(seguroVidaAdicional) +
      parseFloat(seguroVidaFamiliar) +
      parseFloat(SerosSeguroTransplante) +
      parseFloat(afiliadoAtech) +
      parseFloat(serosCoseguro) +
      parseFloat(oblig) +
      parseFloat(bancoChubut) +
      parseFloat(devolucion) +
      parseFloat(impuestoGanancias) +
      parseFloat(descuento);
    setDeducciones(deduccionesImporte1.toFixed(2));
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
    oblig,
    bancoChubut,
    devolucion,
    impuestoGanancias,
    descuento,
  ]);

  //Deducciones para total ASIGNACION FAMILIAR: es una estado global sin incluir las demas percepciones
  useEffect(() => {
    const totalAsigFa =
      parseFloat(hijos) +
      parseFloat(hijosIncapacitado) +
      parseFloat(hijosEscoIncapacitado) +
      parseFloat(conyuge) +
      parseFloat(ayudaEsc);
    setAsignacion25(totalAsigFa);
  }, [hijos, hijosIncapacitado, hijosEscoIncapacitado, conyuge, ayudaEsc]);

  //Deducciones para total DESCUENTO LEY: es una estado global sin incluir las cuota de atech
  useEffect(() => {
    const deduccionesImporte2 =
      parseFloat(jubilacion) +
      parseFloat(serosTitular) +
      parseFloat(serosFamiliar) +
      parseFloat(seguroVidaOblig) +
      parseFloat(seguroVidaAdicional) +
      parseFloat(seguroVidaFamiliar) +
      parseFloat(SerosSeguroTransplante) +
      parseFloat(serosCoseguro) +
      parseFloat(oblig) +
      parseFloat(bancoChubut) +
      parseFloat(devolucion) +
      parseFloat(impuestoGanancias) +
      parseFloat(descuento);
    setDescuentoLey25(deduccionesImporte2);
  }, [
    jubilacion,
    serosTitular,
    serosFamiliar,
    seguroVidaOblig,
    seguroVidaAdicional,
    seguroVidaFamiliar,
    SerosSeguroTransplante,
    serosCoseguro,
    oblig,
    bancoChubut,
    devolucion,
    impuestoGanancias,
    descuento,
  ]);

  //SALARIO BRUTO SIN LAS ASIGNACIONES FAMILIARES PARA CALCULO DE ATECH
  useEffect(() => {
    const sumaParaAtech =
      parseFloat(sueldo) +
      parseFloat(PorcentajPd) +
      parseFloat(zonaImporte) +
      parseFloat(recursosMateriales) +
      parseFloat(anios) +
      parseFloat(ubicacion) +
      parseFloat(otrosIngresos);
    setSueldo2(sumaParaAtech.toFixed(2));
    setNetoInstitucion25(sumaParaAtech.toFixed(2));
  }, [
    sueldo,
    PorcentajPd,
    zonaImporte,
    recursosMateriales,
    anios,
    ubicacion,
    otrosIngresos,
  ]);

  // TOTAL NETO
  useEffect(() => {
    const neto = parseFloat(total) + parseFloat(deducciones * -1);

    setNeto(neto);
  }, [total, deducciones]);

  //RECURSOS MATERIALES
  useEffect(() => {
    const recursos = (parseFloat(sueldoBase) * 17.5) / 100;
    setRecursosMateriales(recursos.toFixed(2));
    //actualizar antiguedad de forma dinamica
    const actualizaAntigue = (valorEv.current * sueldo) / 100;
    setAnios(actualizaAntigue);
    //actualizar zona de forma dinamica
    const actualizaZona = (zonaUnidad * sueldoBase) / 100;
    setZonaImporte(actualizaZona);
  }, [sueldo]);

  //CAMPO ATECH
  useEffect(() => {
    const afiliacion = (parseFloat(sueldo2) * 2) / 100;

    setAfiliadoAtech(afiliacion.toFixed(2));
    setRetencion25(afiliacion);
  }, [sueldo2]);

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
    const recursos = (parseFloat(sueldo) * 17.5) / 100;
    setRecursosMateriales(recursos.toFixed(2));
    //descuentos de seros

    //solo queda en la institucion 1, seteo los valores en 0 para no teneer que borrar las variables de los estados
    const SegVidaObli = 0;
    setSeguroVidaOblig(SegVidaObli);
    const SegVidaFami = 0;
    setSeguroVidaFamiliar(SegVidaFami);
    const SegTransplante = cargoImporte*0.005;
    setSerosSeguroTransplante(SegTransplante);
  };
  // useEffect(() => {
  //   calculo de antiguedad
  //   const importeAnios = getAntiguedadImpor() * (sueldo / 100);
  //   setAnios(importeAnios.toFixed(2));
  // }, [sueldo]);

   //zona patagonica esto duplica el valor de sueldo base y lo coloca en zona patagonica
  useEffect(()=>{
    console.log("hola")
     let sueldoZona=sueldo
    console.log("handle sueldozona",sueldoZona)
    setZonaUnidad(100);
    // console.log("valor",event.target.value)
    const zonaImporte = 100 * (sueldoZona / 100);
    //cambie sueldo por SUELDO_BASICO 
    setZonaImporte(zonaImporte.toFixed(2));
  },[sueldo])

  // const handleZonaChange = (event) => {
  //   setZonaUnidad(event.target.value);
  //   const zonaImporte = event.target.value * (sueldoBase / 100);
  //   setZonaImporte(zonaImporte.toFixed(2));
  // };
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

    const valorevento = event.target.value; // tomo el valor de la opcion elejida y la mando a un estado
    valorEv.current = valorevento;
    const importeAnios = event.target.value * (sueldo / 100);
    setAnios(importeAnios.toFixed(2));
  };

  const handleserosFamiliar = (event) => {
    if (event.target.value === "SI") {
      const serosFamiliarImporte = (parseFloat(total) * 4.25) / 100;
      setSerosFamiliar(serosFamiliarImporte.toFixed(2));
    } else {
      setSerosFamiliar(0);
    }
  };

  const handleSeguroAdicional = (event) => {
    if (event.target.value === "SI") {
      const segAdicio = (parseFloat(total) * 3.3) / 100;
      setSeguroVidaAdicional(segAdicio.toFixed(2));
    } else {
      setSeguroVidaAdicional(0);
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

  const [horasCatedra, setHorasCatedra] = useState(0); 
  const handleDocente = (ev) => {
    if (ev.target.value === "NM") {
      setDocente("nm");
      console.log("se cambia a nm")
    } else if (ev.target.value === "NS") {
      setDocente("ns");
      console.log("se cambia a NS")

    } else {
      setDocente(0);
    }
  };
  const hsCatedra = (ev) => {
  const horas = ev.target.value;
  setHorasCatedra(horas); // Guarda las horas cátedra
  };
  useEffect(()=>{
    if (docente === "nm") {
      const nmimporte = horasCatedra * HC_NIVEL_MEDIO * SUELDO_BASICO; //se cambio por SUELDO_BASICO
      setSueldo(parseFloat(sueldo1) + parseFloat(nmimporte));
      console.log("horas catedreas",nmimporte)
      setImporteHoras(nmimporte)
      if (sueldo1!=0){
      setSueldoBase(parseFloat(nmimporte)+SUELDO_BASICO);
        
        // const result= SUELDO_BASICO+nmimporte
      }else{ setSueldoBase(parseFloat(nmimporte));}
    } else {
      const nsimporte = horasCatedra * HC_NIVEL_SUPERIOR * SUELDO_BASICO;
      setSueldo(parseFloat(sueldo1) + parseFloat(nsimporte));
       if (sueldo1!=0){
      setSueldoBase(parseFloat(nsimporte)+SUELDO_BASICO);
        
        // const result= SUELDO_BASICO+nmimporte
      }else{ setSueldoBase(parseFloat(nsimporte));}
    }
  },[docente,horasCatedra])
  const {
    setNetoInstitucion25,
    setDescuentoLey25,
    setRetencion25,
    setAsignacion25,
  } = useBearStore();

  const [getAntiguedad, getAntiguedadImpor] = useBearStore((state) => [
    state.getAntiguedad,
    state.getAntiguedadImpor,
  ]);
  return (
    <div>
      <h1 className="head">Calculadora de sueldos </h1>
      <h2 className="subtituloMes">Noviembre</h2>
      <span style={{color:"black",fontFamily:"cursive", fontSize:"20px"}}>(Esta versión del simulador no tiene en cuenta aún el adicional por cargo jerárquico)</span>
      <table className="seleccion">
        <th>
          <label className="presentismo">Con presentismo? (Ley PD*) </label>
          <select onChange={handleToggleCalculations}>
            <option value="NO">NO</option>
            <option>SI</option>
          </select>
        </th>
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
            <label>Te descuentan SEROS por familiares ?</label>
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
            <label>Pagas un seguro de vida adicional ?</label>
            <select onChange={handleSeguroAdicional}>
              <option value="NO">NO</option>
              <option value="SI">SI</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>
            <label>Antigüedad </label>{" "}
            {/*<option> {getAntiguedad()}</option> */}
            <select onChange={handleantiguedad}>
              {antiguedad.map((antiguedad, index) => (
                <option key={index} value={antiguedad.valor}>
                  {antiguedad.nombre}
                </option>
              ))}
              {/* NOTA: comento esto para que no mapee de nuevo el arreglo y solo muestre el la opcion que trae 
               del estado gloabal */}
            </select>
          </th>
          <th>
            Seros coseguro
            <input
              onChange={handleCoseguro}
              type="text"
              size="xl"
              clearable
              label="SEROS Coseguro"
              className="barra2"
            />
          </th>
        </tr>
        <tr>
          {/* <th>
            <label>Zona</label>
            <select onChange={handleZonaChange}>
              {zonas.map((zona, index) => (
                <option key={index} value={zona.valor}>
                  {zona.nombre}
                </option>
              ))}
            </select>
          </th> */}
          
        </tr>
        <tr>
          <th>
            <label>Docente nivel medio o superior</label>
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
            <label>Horas cátedras</label>
            <select onChange={hsCatedra}>
              {horasCatredas.map((horasCatedra, index) => (
                <option key={index}>{horasCatedra}</option>
              ))}
            </select>
          </th>
          <th>
            Impuesto a las ganancias
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
            <label>Cobra por conyuge en esta institucion ?</label>
            <select onChange={handleConyuge}>
              <option value="NO">NO</option>
              <option>SI</option>
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
            <label>Hijos escolarizados</label>
            <select onChange={handleHijos}>
              {hijosnum.map((hijosnum, index) => (
                <option key={index}>{hijosnum}</option>
              ))}
            </select>
          </th>
          <th>
            Devolución de haberes
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
            <label>Cobra por hijo con discapacidad?</label>
            <select onChange={handleHijosIncapacitados}>
              {hijosIncap.map((hijosIncap, index) => (
                <option key={index}>{hijosIncap}</option>
              ))}
            </select>
          </th>
          <th>
            Otros descuentos
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
            Ayuda escolar
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
            Ubicación geografica
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
            Otros ingresos
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
            <td>Antigüedad</td>
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
            <td>1872</td>
            <td>Recursos Materiales</td>
            <td>17.5%</td>
            <td>{formatter.format(recursosMateriales)}</td>
          </tr>
          <tr className="celda">
            <td>1804</td>
            <td>Conyuge</td>
            <td></td>
            <td>{formatter.format(conyuge)}</td>
          </tr>
          <tr>
            <td>1806</td>
            <td>Hijo Incapacitado</td>
            <td></td>
            <td>{formatter.format(hijosIncapacitado)}</td>
          </tr>
          <tr className="celda">
            <td>1809</td>
            <td>Hijo Escolarizado</td>
            <td></td>
            <td>{formatter.format(hijos)}</td>
          </tr>
          <tr>
            <td>1814</td>
            <td>Hijo Escolarizado Incap</td>
            <td></td>
            <td>{formatter.format(hijosEscoIncapacitado)}</td>
          </tr>
          <tr className="celda">
            <td>1822</td>
            <td>Ayuda Escolar Obligatoria</td>
            <td></td>
            <td>{formatter.format(ayudaEsc)}</td>
          </tr>
          <tr>
            <td>1860</td>
            <td>Ubicacion Geografica</td>
            <td></td>
            <td>{formatter.format(ubicacion)}</td>
          </tr>
          <tr className="celda">
            <td>1168</td>
            <td>Adicional profesionalidad</td>
            <td>15%</td>
            <td>{formatter.format(PorcentajPd)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Otros Ingresos/Descuentos </td>
            <td></td>
            <td>{formatter.format(otrosIngresos)}</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr className="celda">
            <td></td>
            <td></td>
            <td></td>
            <td>{formatter.format(total)}</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
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
            <td>16 %</td>
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
          {/* <tr>
            <td>1424</td>
            <td>Seg. Vida Col. Oblig</td>
            <td>250</td>
            <td>{formatter.format(seguroVidaOblig)}</td>
          </tr> */}
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
            <td>0.5%</td>
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
            <td>1213</td>
            <td>Oblig.No Pres.Labor.A</td>
            <td></td>
            <td>{formatter.format(oblig)}</td>
          </tr>
          <tr className="celda">
            <td>1588</td>
            <td>Banco Chubut</td>
            <td></td>
            <td>{formatter.format(bancoChubut)}</td>
          </tr>
          <tr>
            <td>1887</td>
            <td>Devolucion de haberes</td>
            <td></td>
            <td>{formatter.format(devolucion)}</td>
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

export default Institucion35;
