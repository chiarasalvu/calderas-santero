type FilaComparacion = {
  id: string;
  caracteristica: string;
  tradicional: string;
  santero: string;
  destacado?: boolean;
};

const filas: FilaComparacion[] = [
  {
    id: "calentamiento",
    caracteristica: "Tipo de Calentamiento",
    tradicional: "Directo (Fuego sobre agua)",
    santero: "Indirecto (Baño María técnico)",
  },
  {
    id: "sarro",
    caracteristica: "Riesgo de Sarro",
    tradicional: "Crítico y constante",
    santero: "Reducido",
  },
  {
    id: "generacion",
    caracteristica: "Generación de agua caliente",
    tradicional: "Acumulación en tanques",
    santero: "Generación instantánea",
    destacado: true,
  },
  {
    id: "mantenimiento",
    caracteristica: "Mantenimiento",
    tradicional: "Mayor frecuencia de intervención",
    santero: "Menor necesidad de mantenimiento",
  },
  {
    id: "adaptabilidad",
    caracteristica: "Adaptabilidad",
    tradicional: "Equipos estandarizados",
    santero: "Soluciones dimensionadas a medida",
  },
];

export default function ComparisonTable() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
          Ventaja Competitiva Santero
        </h2>

        <table className="mt-12 w-full border-collapse text-left">
          <thead>
            <tr className="bg-zinc-100">
              <th className="rounded-l-lg px-6 py-4 font-heading text-base font-bold text-zinc-900">
                Característica
              </th>
              <th className="px-6 py-4 font-heading text-base font-medium text-zinc-500">
                Sistema Tradicional
              </th>
              <th className="rounded-r-lg px-6 py-4 font-heading text-base font-bold text-brand-red">
                Sistema Santero
              </th>
            </tr>
          </thead>
          <tbody>
            {filas.map((fila) => (
              <tr key={fila.id} className="border-b border-brand-red/15">
                <td className="px-6 py-5 text-sm font-semibold text-zinc-900">
                  {fila.caracteristica}
                </td>
                <td className="px-6 py-5 text-sm text-zinc-400">
                  {fila.tradicional}
                </td>
                <td
                  className={`px-6 py-5 text-sm ${
                    fila.destacado
                      ? "font-medium text-brand-red"
                      : "text-zinc-800"
                  }`}
                >
                  {fila.santero}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
