import { create } from "zustand";

export const useBearStore = create((set, get) => ({
  // esto es  para sumar el TOTAL DE HABERES
  netoinstitucion01: 0,
  netoinstitucion02: 0,
  netoinstitucion03: 0,
  netoinstitucion04: 0,
  netoinstitucion05: 0,
  setNetoInstitucion01: (value) =>
    set(() => ({ netoinstitucion01: parseFloat(value) })),

  setNetoInstitucion02: (value) =>
    set(() => ({ netoinstitucion02: parseFloat(value) })),

  setNetoInstitucion03: (value) =>
    set(() => ({ netoinstitucion03: parseFloat(value) })),

  setNetoInstitucion04: (value) =>
    set(() => ({ netoinstitucion04: parseFloat(value) })),

  setNetoInstitucion05: (value) =>
    set(() => ({ netoinstitucion05: parseFloat(value) })),

  getnetoglobal: () => {
    const total =
      get().netoinstitucion01 +
      get().netoinstitucion02 +
      get().netoinstitucion03 +
      get().netoinstitucion04 +
      get().netoinstitucion05;

    return total;
  },
  //esto es para TOTAL DESCUENTO LEY

  descuentoley01: 0,
  descuentoley02: 0,
  descuentoley03: 0,
  descuentoley04: 0,
  descuentoley05: 0,

  setDescuentoLey01: (value) =>
    set(() => ({ descuentoley01: parseFloat(value) })),
  setDescuentoLey02: (value) =>
    set(() => ({ descuentoley02: parseFloat(value) })),
  setDescuentoLey03: (value) =>
    set(() => ({ descuentoley03: parseFloat(value) })),
  setDescuentoLey04: (value) =>
    set(() => ({ descuentoley04: parseFloat(value) })),
  setDescuentoLey05: (value) =>
    set(() => ({ descuentoley05: parseFloat(value) })),

  getDescuentoGlobal: () => {
    const totalDescuento =
      get().descuentoley01 +
      get().descuentoley02 +
      get().descuentoley03 +
      get().descuentoley04 +
      get().descuentoley05;

    return totalDescuento;
  },

  // con esto saco el NETO BRUTO

  getBruto: () => {
    const totalbruto =
      get().netoinstitucion01 +
      get().netoinstitucion02 +
      get().netoinstitucion03 +
      get().netoinstitucion04 +
      get().netoinstitucion05 -
      (get().descuentoley01 +
        get().descuentoley02 +
        get().descuentoley03 +
        get().descuentoley04 +
        get().descuentoley05);

    return totalbruto;
  },

  //esto es para la RETENCION VOLUNTARIA
  retencionvoluntaria01: 0,
  retencionvoluntaria02: 0,
  retencionvoluntaria03: 0,
  retencionvoluntaria04: 0,
  retencionvoluntaria05: 0,

  setRetencion01: (value) =>
    set(() => ({ retencionvoluntaria01: parseFloat(value) })),
  setRetencion02: (value) =>
    set(() => ({ retencionvoluntaria02: parseFloat(value) })),
  setRetencion03: (value) =>
    set(() => ({ retencionvoluntaria03: parseFloat(value) })),
  setRetencion04: (value) =>
    set(() => ({ retencionvoluntaria04: parseFloat(value) })),
  setRetencion05: (value) =>
    set(() => ({ retencionvoluntaria05: parseFloat(value) })),

  getRetencion: () => {
    const totalDescuento =
      get().retencionvoluntaria01 +
      get().retencionvoluntaria02 +
      get().retencionvoluntaria03 +
      get().retencionvoluntaria04 +
      get().retencionvoluntaria05;
    return totalDescuento;
  },

  //con esto calculo la ASIGNACION FAMILIAR

  asignacionfamiliar01: 0,
  asignacionfamiliar02: 0,
  asignacionfamiliar03: 0,
  asignacionfamiliar04: 0,
  asignacionfamiliar05: 0,

  setAsignacion01: (value) =>
    set(() => ({ asignacionfamiliar01: parseFloat(value) })),
  setAsignacion02: (value) =>
    set(() => ({ asignacionfamiliar02: parseFloat(value) })),
  setAsignacion03: (value) =>
    set(() => ({ asignacionfamiliar03: parseFloat(value) })),
  setAsignacion04: (value) =>
    set(() => ({ asignacionfamiliar04: parseFloat(value) })),
  setAsignacion05: (value) =>
    set(() => ({ asignacionfamiliar05: parseFloat(value) })),

  getAsignacion: () => {
    const totalAsignacion =
      get().asignacionfamiliar01 +
      get().asignacionfamiliar02 +
      get().asignacionfamiliar03 +
      get().asignacionfamiliar04 +
      get().asignacionfamiliar05;

    return totalAsignacion;
  },

  // esto es para calcular el NETO A PAGAR
  getNetoPagar: () => {
    const totalnetopagar =
      get().netoinstitucion01 +
      get().netoinstitucion02 +
      get().netoinstitucion03 +
      get().netoinstitucion04 +
      get().netoinstitucion05 -
      (get().descuentoley01 +
        get().descuentoley02 +
        get().descuentoley03 +
        get().descuentoley04 +
        get().descuentoley05) +
      get().asignacionfamiliar01 +
      get().asignacionfamiliar02 +
      get().asignacionfamiliar03 +
      get().asignacionfamiliar04 +
      get().asignacionfamiliar05 -
      (get().retencionvoluntaria01 +
        get().retencionvoluntaria02 +
        get().retencionvoluntaria03 +
        get().retencionvoluntaria04 +
        get().retencionvoluntaria05);

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
