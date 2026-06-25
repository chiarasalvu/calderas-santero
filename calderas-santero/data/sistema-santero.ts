export type PasoSistemaSantero = {
  id: string;
  titulo: string;
  descripcion: string;
};

export const pasosSistemaSantero: PasoSistemaSantero[] = [
  {
    id: "diagnostico",
    titulo: "Diagnóstico",
    descripcion:
      "Evaluamos el estado actual del sistema de calefacción y las necesidades específicas del espacio.",
  },
  {
    id: "propuesta",
    titulo: "Propuesta",
    descripcion:
      "Presentamos una propuesta clara con el equipo recomendado, tiempos y costos, sin sorpresas.",
  },
  {
    id: "instalacion",
    titulo: "Instalación",
    descripcion:
      "Instalamos el sistema siguiendo protocolos de seguridad y control de calidad en cada paso.",
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento",
    descripcion:
      "Acompañamos el equipo a lo largo de su vida útil con revisiones periódicas y soporte continuo.",
  },
];

export type DiferencialSistemaSantero = {
  id: string;
  titulo: string;
  descripcion: string;
};

export const diferencialesSistemaSantero: DiferencialSistemaSantero[] = [
  {
    id: "experiencia",
    titulo: "Experiencia comprobada",
    descripcion: "Años de trabajo en proyectos residenciales e industriales.",
  },
  {
    id: "transparencia",
    titulo: "Transparencia",
    descripcion: "Presupuestos claros y sin costos ocultos en cada etapa.",
  },
  {
    id: "respuesta",
    titulo: "Respuesta rápida",
    descripcion: "Atención prioritaria ante urgencias y fallas críticas.",
  },
  {
    id: "seguimiento",
    titulo: "Seguimiento post-instalación",
    descripcion: "Control continuo del equipo luego de cada instalación.",
  },
];
