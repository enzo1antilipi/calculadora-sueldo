import { create } from "zustand";

export const useBearStore = create((set, get) => ({
  // esto es  para sumar el TOTAL DE HABERES
  netoinstitucion21: 0,
  netoinstitucion22: 0,
  netoinstitucion23: 0,
  netoinstitucion24: 0,
  netoinstitucion25: 0,
  setNetoInstitucion21: (value) =>
    set(() => ({ netoinstitucion21: parseFloat(value) })),

  setNetoInstitucion22: (value) =>
    set(() => ({ netoinstitucion22: parseFloat(value) })),

  setNetoInstitucion23: (value) =>
    set(() => ({ netoinstitucion23: parseFloat(value) })),

  setNetoInstitucion24: (value) =>
    set(() => ({ netoinstitucion24: parseFloat(value) })),

  setNetoInstitucion25: (value) =>
    set(() => ({ netoinstitucion25: parseFloat(value) })),

  getnetoglobal: () => {
    const total =
      get().netoinstitucion21 +
      get().netoinstitucion22 +
      get().netoinstitucion23 +
      get().netoinstitucion24 +
      get().netoinstitucion25;

    return total;
  },
  //esto es para TOTAL DESCUENTO LEY

  descuentoley21: 0,
  descuentoley22: 0,
  descuentoley23: 0,
  descuentoley24: 0,
  descuentoley25: 0,

  setDescuentoLey21: (value) =>
    set(() => ({ descuentoley21: parseFloat(value) })),
  setDescuentoLey22: (value) =>
    set(() => ({ descuentoley22: parseFloat(value) })),
  setDescuentoLey23: (value) =>
    set(() => ({ descuentoley23: parseFloat(value) })),
  setDescuentoLey24: (value) =>
    set(() => ({ descuentoley24: parseFloat(value) })),
  setDescuentoLey25: (value) =>
    set(() => ({ descuentoley25: parseFloat(value) })),

  getDescuentoGlobal: () => {
    const totalDescuento =
      get().descuentoley21 +
      get().descuentoley22 +
      get().descuentoley23 +
      get().descuentoley24 +
      get().descuentoley25;

    return totalDescuento;
  },

  // con esto saco el NETO BRUTO

  getBruto: () => {
    const totalbruto =
      get().netoinstitucion21 +
      get().netoinstitucion22 +
      get().netoinstitucion23 +
      get().netoinstitucion24 +
      get().netoinstitucion25 -
      (get().descuentoley21 +
        get().descuentoley22 +
        get().descuentoley23 +
        get().descuentoley24 +
        get().descuentoley25);

    return totalbruto;
  },

  //esto es para la RETENCION VOLUNTARIA
  retencionvoluntaria21: 0,
  retencionvoluntaria22: 0,
  retencionvoluntaria23: 0,
  retencionvoluntaria24: 0,
  retencionvoluntaria25: 0,

  setRetencion21: (value) =>
    set(() => ({ retencionvoluntaria21: parseFloat(value) })),
  setRetencion22: (value) =>
    set(() => ({ retencionvoluntaria22: parseFloat(value) })),
  setRetencion23: (value) =>
    set(() => ({ retencionvoluntaria23: parseFloat(value) })),
  setRetencion24: (value) =>
    set(() => ({ retencionvoluntaria24: parseFloat(value) })),
  setRetencion25: (value) =>
    set(() => ({ retencionvoluntaria25: parseFloat(value) })),

  getRetencion: () => {
    const totalDescuento =
      get().retencionvoluntaria21 +
      get().retencionvoluntaria22 +
      get().retencionvoluntaria23 +
      get().retencionvoluntaria24 +
      get().retencionvoluntaria25;
    return totalDescuento;
  },

  //con esto calculo la ASIGNACION FAMILIAR

  asignacionfamiliar21: 0,
  asignacionfamiliar22: 0,
  asignacionfamiliar23: 0,
  asignacionfamiliar24: 0,
  asignacionfamiliar25: 0,

  setAsignacion21: (value) =>
    set(() => ({ asignacionfamiliar21: parseFloat(value) })),
  setAsignacion22: (value) =>
    set(() => ({ asignacionfamiliar22: parseFloat(value) })),
  setAsignacion23: (value) =>
    set(() => ({ asignacionfamiliar23: parseFloat(value) })),
  setAsignacion24: (value) =>
    set(() => ({ asignacionfamiliar4: parseFloat(value) })),
  setAsignacion25: (value) =>
    set(() => ({ asignacionfamiliar25: parseFloat(value) })),

  getAsignacion: () => {
    const totalAsignacion =
      get().asignacionfamiliar21 +
      get().asignacionfamiliar22 +
      get().asignacionfamiliar23 +
      get().asignacionfamiliar24 +
      get().asignacionfamiliar25;

    return totalAsignacion;
  },

  // esto es para calcular el NETO A PAGAR
  getNetoPagar: () => {
    const totalnetopagar =
      get().netoinstitucion21 +
      get().netoinstitucion22 +
      get().netoinstitucion23 +
      get().netoinstitucion24 +
      get().netoinstitucion25 -
      (get().descuentoley21 +
        get().descuentoley22 +
        get().descuentoley23 +
        get().descuentoley24 +
        get().descuentoley25) +
      get().asignacionfamiliar21 +
      get().asignacionfamiliar22 +
      get().asignacionfamiliar23 +
      get().asignacionfamiliar24 +
      get().asignacionfamiliar25 -
      (get().retencionvoluntaria21 +
        get().retencionvoluntaria22 +
        get().retencionvoluntaria23 +
        get().retencionvoluntaria24 +
        get().retencionvoluntaria25);

    return totalnetopagar;
  },

  antiguedadglobal: 0,
  setAntiguedad: (value) =>
    set(() => ({ antiguedadglobal: parseFloat(value) })),

  getAntiguedad: () => {
    const valorantiguedad = get().antiguedadglobal;

    return valorantiguedad;
  },
  antiguedadImportGlob: 0,

  setAntiguedadImporGlob: (value) =>
    set(() => ({ antiguedadImportGlob: parseFloat(value) })),

  getAntiguedadImpor: () => {
    const valorImport = get().antiguedadImportGlob;

    return valorImport;
  },

  antiguedadPorcentaje: 0,

  setAntiguedadPorcentaje: (value) =>
    set(() => ({ antiguedadPorcentaje: parseFloat(value) })),

  getAntiguedadPorcentaje: () => {
    const valorImportPorcentaje = get().antiguedadPorcentaje;

    return valorImportPorcentaje;
  },
}));
