import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { servicios } from "@/data/servicios";
import { casosDeExito } from "@/data/casos-de-exito";

export default function Home() {
  const serviciosDestacados = servicios.slice(0, 4);
  const casosDestacados = casosDeExito.slice(0, 3);

  return (
    <>
      <Hero
        titulo="Calefacción confiable para tu hogar o tu empresa"
        subtitulo="Instalamos, mantenemos y reparamos calderas con un método propio que garantiza seguridad y eficiencia en cada proyecto."
        ctaHref="/contacto"
        ctaLabel="Solicitar contacto"
      />

      <Section
        titulo="Nuestros servicios"
        subtitulo="Soluciones de calefacción para particulares y empresas."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviciosDestacados.map((servicio) => (
            <Card
              key={servicio.id}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              icono={servicio.icono}
              href="/servicios"
            />
          ))}
        </div>
      </Section>

      <Section
        titulo="El Sistema Santero"
        subtitulo="Nuestro método propio de trabajo, pensado para acompañarte en cada etapa."
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-zinc-600">
            Diagnóstico, propuesta, instalación y mantenimiento: cuatro
            etapas claras que aplicamos en cada proyecto, sin sorpresas.
          </p>
          <Link
            href="/sistema-santero"
            className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Conocer el Sistema Santero
          </Link>
        </div>
      </Section>

      <Section
        titulo="Casos de éxito"
        subtitulo="Algunos de los proyectos que llevamos adelante."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casosDestacados.map((caso) => (
            <Card
              key={caso.id}
              titulo={caso.titulo}
              descripcion={caso.descripcion}
              href="/casos-de-exito"
            />
          ))}
        </div>
      </Section>

      <Section titulo="¿Listo para empezar tu proyecto?">
        <div className="flex justify-center">
          <Link
            href="/contacto"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Contactanos
          </Link>
        </div>
      </Section>
    </>
  );
}
