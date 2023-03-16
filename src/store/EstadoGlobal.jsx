import { create } from "zustand";

export const useBearStore = create((set, get) => ({
  netoinstitucion1: 0,
  netoinstitucion2: 0,
  netoinstitucion3: 0,
  setNetoInstitucion1: (value) =>
    set(() => ({ netoinstitucion1: parseFloat(value) })),

  setNetoInstitucion2: (value) =>
    set(() => ({ netoinstitucion2: parseFloat(value) })),

  setNetoInstitucion3: (value) =>
    set(() => ({ netoinstitucion3: parseFloat(value) })),
  getnetoglobal: () => {
    const total =
      get().netoinstitucion1 + get().netoinstitucion2 + get().netoinstitucion3;
    console.log(total);

    return total;
  },
  //hasta aca es para sumar el total de haberes

  descuentoley1: 0,
  descuentoley2: 0,
  descuentoley3: 0,

  setDescuentoLey1: (value) =>
    set(() => ({ descuentoley1: parseFloat(value) })),
  setDescuentoLey2: (value) =>
    set(() => ({ descuentoley2: parseFloat(value) })),
  setDescuentoLey3: (value) =>
    set(() => ({ descuentoley3: parseFloat(value) })),

  getDescuentoGlobal: () => {
    const totalDescuento =
      get().descuentoley1 + get().descuentoley2 + get().descuentoley3;

    return totalDescuento;
  },
  //esto fue para TOTAL DESCUENTO LEY
  getBruto: () => {
    const totalbruto =
      get().netoinstitucion1 +
      get().netoinstitucion2 +
      get().netoinstitucion3 -
      (get().descuentoley1 + get().descuentoley2 + get().descuentoley3);
    console.log(totalbruto);

    return totalbruto;
  },
  // con esto saco el NETO BRUTO

  netobruto1: 0,
  netobruto2: 0,
  netobruto3: 0,

  setNetoBruto1: (value) => set(() => ({ netobruto1: parseFloat(value) })),
  setNetoBruto2: (value) => set(() => ({ netobruto2: parseFloat(value) })),
  setNetoBruto3: (value) => set(() => ({ netobruto3: parseFloat(value) })),

  getNetoBruto: () => {
    const totalNetoBruto =
      get().netobruto1 + get().netobruto2 + get().netobruto3;

    return totalNetoBruto;
  },

  //esto fue para el NETO BRUTO

  retencionvoluntaria1: 0,
  retencionvoluntaria2: 0,
  retencionvoluntaria3: 0,

  setRetencion1: (value) =>
    set(() => ({ retencionvoluntaria1: parseFloat(value) })),
  setRetencion2: (value) =>
    set(() => ({ retencionvoluntaria2: parseFloat(value) })),
  setRetencion3: (value) =>
    set(() => ({ retencionvoluntaria3: parseFloat(value) })),

  getRetencion: () => {
    const totalDescuento =
      get().retencionvoluntaria1 +
      get().retencionvoluntaria2 +
      get().retencionvoluntaria3;
    console.log(totalDescuento);
    return totalDescuento;
  },
  //esto fue para la RETENCION VOLUNTARIA

  asignacionfamiliar1: 0,
  asignacionfamiliar2: 0,
  asignacionfamiliar3: 0,

  setAsignacion1: (value) =>
    set(() => ({ asignacionfamiliar1: parseFloat(value) })),
  setAsignacion2: (value) =>
    set(() => ({ asignacionfamiliar2: parseFloat(value) })),
  setAsignacion3: (value) =>
    set(() => ({ asignacionfamiliar3: parseFloat(value) })),

  getAsignacion: () => {
    const totalAsignacion =
      get().asignacionfamiliar1 +
      get().asignacionfamiliar2 +
      get().asignacionfamiliar3;

    return totalAsignacion;
  },

  getNetoPagar: () => {
    const totalnetopagar =
      get().netoinstitucion1 +
      get().netoinstitucion2 +
      get().netoinstitucion3 -
      (get().descuentoley1 + get().descuentoley2 + get().descuentoley3) +
      get().asignacionfamiliar1 +
      get().asignacionfamiliar2 +
      get().asignacionfamiliar3 -
      (get().retencionvoluntaria1 +
        get().retencionvoluntaria2 +
        get().retencionvoluntaria3);

    console.log(totalnetopagar);

    return totalnetopagar;
  },
}));
