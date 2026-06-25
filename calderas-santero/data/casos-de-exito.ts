export type CategoriaCaso = "hogar" | "empresa";

export type CasoExito = {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: CategoriaCaso;
};

export const casosDeExito: CasoExito[] = [
  {
    id: "caso-1",
    titulo: "Renovación de calefacción residencial",
    descripcion:
      "Reemplazo completo de una caldera obsoleta por un equipo de alta eficiencia en una vivienda familiar.",
    categoria: "hogar",
  },
  {
    id: "caso-2",
    titulo: "Mantenimiento de planta industrial",
    descripcion:
      "Plan de mantenimiento preventivo anual para el sistema de calderas de una planta de producción.",
    categoria: "empresa",
  },
  {
    id: "caso-3",
    titulo: "Instalación en edificio de departamentos",
    descripcion:
      "Instalación de un sistema de calefacción centralizado para un edificio de 12 unidades.",
    categoria: "empresa",
  },
  {
    id: "caso-4",
    titulo: "Reparación de urgencia en vivienda",
    descripcion:
      "Diagnóstico y reparación en menos de 24 horas ante una falla total de calefacción en pleno invierno.",
    categoria: "hogar",
  },
];
