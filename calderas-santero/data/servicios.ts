export type Servicio = {
  id: string;
  icono: string;
  titulo: string;
  descripcion: string;
};

export const servicios: Servicio[] = [
  {
    id: "instalacion",
    icono: "🔧",
    titulo: "Instalación",
    descripcion:
      "Instalamos calderas nuevas en hogares y edificios, adaptando el equipo a las necesidades de cada espacio.",
  },
  {
    id: "mantenimiento",
    icono: "🛠️",
    titulo: "Mantenimiento",
    descripcion:
      "Revisiones periódicas para asegurar el funcionamiento seguro y eficiente de tu caldera durante todo el año.",
  },
  {
    id: "reparacion",
    icono: "⚙️",
    titulo: "Reparación",
    descripcion:
      "Diagnóstico y reparación de fallas en calderas de cualquier marca, con respuesta rápida ante urgencias.",
  },
  {
    id: "asesoria",
    icono: "📋",
    titulo: "Asesoría Hogar y Empresa",
    descripcion:
      "Te ayudamos a elegir el sistema de calefacción más adecuado según el uso particular o industrial que necesites.",
  },
];
