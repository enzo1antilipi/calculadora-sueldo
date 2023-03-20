import { create } from "zustand";

export const useBearStore = create((set, get) => ({
  // esto es  para sumar el TOTAL DE HABERES
  netoinstitucion1: 0,
  netoinstitucion2: 0,
  netoinstitucion3: 0,
  netoinstitucion4: 0,
  netoinstitucion5: 0,
  setNetoInstitucion1: (value) =>
    set(() => ({ netoinstitucion1: parseFloat(value) })),

  setNetoInstitucion2: (value) =>
    set(() => ({ netoinstitucion2: parseFloat(value) })),

  setNetoInstitucion3: (value) =>
    set(() => ({ netoinstitucion3: parseFloat(value) })),

  setNetoInstitucion4: (value) =>
    set(() => ({ netoinstitucion4: parseFloat(value) })),

  setNetoInstitucion5: (value) =>
    set(() => ({ netoinstitucion5: parseFloat(value) })),

  getnetoglobal: () => {
    const total =
      get().netoinstitucion1 +
      get().netoinstitucion2 +
      get().netoinstitucion3 +
      get().netoinstitucion4 +
      get().netoinstitucion5;

    return total;
  },
  //esto es para TOTAL DESCUENTO LEY

  descuentoley1: 0,
  descuentoley2: 0,
  descuentoley3: 0,
  descuentoley4: 0,
  descuentoley5: 0,

  setDescuentoLey1: (value) =>
    set(() => ({ descuentoley1: parseFloat(value) })),
  setDescuentoLey2: (value) =>
    set(() => ({ descuentoley2: parseFloat(value) })),
  setDescuentoLey3: (value) =>
    set(() => ({ descuentoley3: parseFloat(value) })),
  setDescuentoLey4: (value) =>
    set(() => ({ descuentoley4: parseFloat(value) })),
  setDescuentoLey5: (value) =>
    set(() => ({ descuentoley5: parseFloat(value) })),

  getDescuentoGlobal: () => {
    const totalDescuento =
      get().descuentoley1 +
      get().descuentoley2 +
      get().descuentoley3 +
      get().descuentoley4 +
      get().descuentoley5;

    return totalDescuento;
  },

  // con esto saco el NETO BRUTO

  getBruto: () => {
    const totalbruto =
      get().netoinstitucion1 +
      get().netoinstitucion2 +
      get().netoinstitucion3 +
      get().netoinstitucion4 +
      get().netoinstitucion5 -
      (get().descuentoley1 +
        get().descuentoley2 +
        get().descuentoley3 +
        get().descuentoley4 +
        get().descuentoley5);

    return totalbruto;
  },

  //esto es para la RETENCION VOLUNTARIA
  retencionvoluntaria1: 0,
  retencionvoluntaria2: 0,
  retencionvoluntaria3: 0,
  retencionvoluntaria4: 0,
  retencionvoluntaria5: 0,

  setRetencion1: (value) =>
    set(() => ({ retencionvoluntaria1: parseFloat(value) })),
  setRetencion2: (value) =>
    set(() => ({ retencionvoluntaria2: parseFloat(value) })),
  setRetencion3: (value) =>
    set(() => ({ retencionvoluntaria3: parseFloat(value) })),
  setRetencion4: (value) =>
    set(() => ({ retencionvoluntaria4: parseFloat(value) })),
  setRetencion5: (value) =>
    set(() => ({ retencionvoluntaria5: parseFloat(value) })),

  getRetencion: () => {
    const totalDescuento =
      get().retencionvoluntaria1 +
      get().retencionvoluntaria2 +
      get().retencionvoluntaria3 +
      get().retencionvoluntaria4 +
      get().retencionvoluntaria5;
    return totalDescuento;
  },

  //con esto calculo la ASIGNACION FAMILIAR

  asignacionfamiliar1: 0,
  asignacionfamiliar2: 0,
  asignacionfamiliar3: 0,
  asignacionfamiliar4: 0,
  asignacionfamiliar5: 0,

  setAsignacion1: (value) =>
    set(() => ({ asignacionfamiliar1: parseFloat(value) })),
  setAsignacion2: (value) =>
    set(() => ({ asignacionfamiliar2: parseFloat(value) })),
  setAsignacion3: (value) =>
    set(() => ({ asignacionfamiliar3: parseFloat(value) })),
  setAsignacion4: (value) =>
    set(() => ({ asignacionfamiliar4: parseFloat(value) })),
  setAsignacion5: (value) =>
    set(() => ({ asignacionfamiliar5: parseFloat(value) })),

  getAsignacion: () => {
    const totalAsignacion =
      get().asignacionfamiliar1 +
      get().asignacionfamiliar2 +
      get().asignacionfamiliar3 +
      get().asignacionfamiliar4 +
      get().asignacionfamiliar5;

    return totalAsignacion;
  },

  // esto es para calcular el NETO A PAGAR
  getNetoPagar: () => {
    const totalnetopagar =
      get().netoinstitucion1 +
      get().netoinstitucion2 +
      get().netoinstitucion3 +
      get().netoinstitucion4 +
      get().netoinstitucion5 -
      (get().descuentoley1 +
        get().descuentoley2 +
        get().descuentoley3 +
        get().descuentoley4 +
        get().descuentoley5) +
      get().asignacionfamiliar1 +
      get().asignacionfamiliar2 +
      get().asignacionfamiliar3 +
      get().asignacionfamiliar4 +
      get().asignacionfamiliar5 -
      (get().retencionvoluntaria1 +
        get().retencionvoluntaria2 +
        get().retencionvoluntaria3 +
        get().retencionvoluntaria4 +
        get().retencionvoluntaria5);

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
