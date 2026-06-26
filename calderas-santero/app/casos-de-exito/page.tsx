"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { casosDeExito, type CategoriaCaso } from "@/data/casos-de-exito";

type Filtro = "todos" | CategoriaCaso;

const filtros: { id: Filtro; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "hogar", label: "Hogar" },
  { id: "empresa", label: "Empresa" },
];

export default function CasosDeExito() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const casosFiltrados =
    filtro === "todos"
      ? casosDeExito
      : casosDeExito.filter((caso) => caso.categoria === filtro);

  return (
    <Section
      titulo="Casos de éxito"
      subtitulo="Proyectos que llevamos adelante en hogares y empresas."
    >
      <div className="mb-8 flex justify-center gap-2">
        {filtros.map((opcion) => (
          <button
            key={opcion.id}
            type="button"
            onClick={() => setFiltro(opcion.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              filtro === opcion.id
                ? "bg-blue-600 text-white"
                : "border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50"
            }`}
          >
            {opcion.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {casosFiltrados.map((caso) => (
          <Card
            key={caso.id}
            titulo={caso.titulo}
            descripcion={caso.descripcion}
          />
        ))}
      </div>
    </Section>
  );
}
