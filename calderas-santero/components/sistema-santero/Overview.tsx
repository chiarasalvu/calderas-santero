const caracteristicas = [
  {
    id: "sarro",
    titulo: "Menor formación de sarro",
    descripcion:
      "Al trabajar mediante calentamiento indirecto y sin acumulación permanente de agua caliente, se reducen significativamente las incrustaciones calcáreas que afectan el rendimiento de los equipos convencionales.",
  },
  {
    id: "eficiencia",
    titulo: "Alta Eficiencia Energética",
    descripcion:
      "La transferencia térmica optimizada permite generar agua caliente sanitaria con un menor consumo de energía, reduciendo costos operativos y mejorando el rendimiento general de la instalación.",
  },
  {
    id: "instantanea",
    titulo: "Agua Caliente Instantánea",
    descripcion:
      "El sistema genera agua caliente en el momento de la demanda, evitando grandes acumulaciones y garantizando disponibilidad constante para instalaciones de alto consumo.",
  },
  {
    id: "mantenimiento",
    titulo: "Menor Necesidad de Mantenimiento",
    descripcion:
      "La reducción de sarro y el diseño del sistema contribuyen a disminuir intervenciones correctivas y tareas de mantenimiento a lo largo del tiempo.",
  },
];

export default function Overview() {
  return (
    <section className="border-b border-brand-red/15 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-heading text-sm leading-tight font-semibold tracking-wide text-brand-red uppercase">
          Ingeniería propia.
          <br />
          Tecnología avanzada.
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
          Sistema Santero
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
          El Sistema Santero utiliza un sistema de calentamiento indirecto
          que genera agua caliente de forma instantánea, sin acumulación y
          con mínima formación de sarro, prolongando la vida útil de las
          instalaciones y reduciendo el consumo energético.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="aspect-square w-full rounded-2xl bg-white p-3 shadow-sm ring-1 ring-zinc-100">
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900" />
          </div>

          <div className="flex flex-col gap-10">
            {caracteristicas.map((item) => (
              <div key={item.id} className="flex gap-4">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-cream-card" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-zinc-900">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
