import Section from "@/components/Section";

const valores = [
  {
    id: "calidad",
    titulo: "Calidad",
    descripcion:
      "Trabajamos con materiales y procesos que garantizan resultados duraderos.",
  },
  {
    id: "compromiso",
    titulo: "Compromiso",
    descripcion:
      "Acompañamos a cada cliente desde el diagnóstico hasta el mantenimiento final.",
  },
  {
    id: "seguridad",
    titulo: "Seguridad",
    descripcion:
      "Cumplimos protocolos estrictos en cada instalación y reparación.",
  },
];

const equipo = [
  { id: "persona-1", nombre: "Nombre Apellido", rol: "Dirección Técnica" },
  { id: "persona-2", nombre: "Nombre Apellido", rol: "Jefe de Instalaciones" },
  { id: "persona-3", nombre: "Nombre Apellido", rol: "Atención al Cliente" },
];

export default function Nosotros() {
  return (
    <>
      <Section titulo="Nosotros">
        <p className="mx-auto max-w-3xl text-center text-zinc-600">
          Calderas Santero es una empresa dedicada a la instalación,
          mantenimiento y reparación de sistemas de calefacción para hogares
          y empresas. Nuestra misión es ofrecer soluciones confiables,
          seguras y eficientes en cada proyecto que encaramos.
        </p>
      </Section>

      <Section titulo="Nuestros valores">
        <div className="grid gap-6 sm:grid-cols-3">
          {valores.map((valor) => (
            <div
              key={valor.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {valor.titulo}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section titulo="Nuestro equipo">
        <div className="grid gap-6 sm:grid-cols-3">
          {equipo.map((persona) => (
            <div
              key={persona.id}
              className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="h-20 w-20 rounded-full bg-zinc-200" />
              <p className="font-semibold text-zinc-900">{persona.nombre}</p>
              <p className="text-sm text-zinc-600">{persona.rol}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
