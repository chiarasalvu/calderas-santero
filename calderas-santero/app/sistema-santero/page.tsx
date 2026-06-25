import Section from "@/components/Section";
import {
  pasosSistemaSantero,
  diferencialesSistemaSantero,
} from "@/data/sistema-santero";

export default function SistemaSantero() {
  return (
    <>
      <Section
        titulo="El Sistema Santero"
        subtitulo="Nuestro método propio para garantizar resultados consistentes en cada proyecto."
      >
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasosSistemaSantero.map((paso, index) => (
            <li
              key={paso.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-blue-600">
                Paso {index + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                {paso.titulo}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{paso.descripcion}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section titulo="Qué nos diferencia">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferencialesSistemaSantero.map((diferencial) => (
            <div
              key={diferencial.id}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900">
                {diferencial.titulo}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                {diferencial.descripcion}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
