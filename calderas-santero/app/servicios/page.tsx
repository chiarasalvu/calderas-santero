import Section from "@/components/Section";
import Card from "@/components/Card";
import { servicios } from "@/data/servicios";

export default function Servicios() {
  return (
    <Section
      titulo="Servicios"
      subtitulo="Soluciones de calefacción para hogares y empresas."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {servicios.map((servicio) => (
          <Card
            key={servicio.id}
            titulo={servicio.titulo}
            descripcion={servicio.descripcion}
            icono={servicio.icono}
          />
        ))}
      </div>
    </Section>
  );
}
