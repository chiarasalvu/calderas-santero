"use client";

import { useState } from "react";

type Sector = "clubes" | "hoteles" | "desarrolladoras" | "industrias";
type Filtro = "todos" | Sector;

const sectores: { id: Filtro; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "clubes", label: "Clubes" },
  { id: "hoteles", label: "Hoteles" },
  { id: "desarrolladoras", label: "Desarrolladoras" },
  { id: "industrias", label: "Industrias" },
];

type CasoExito = {
  id: string;
  sector: Sector;
  titulo: string;
  descripcion: string;
};

const casos: CasoExito[] = [
  {
    id: "club-pileta",
    sector: "clubes",
    titulo: "Climatización de pileta en club deportivo",
    descripcion:
      "Sistema de agua caliente de alto caudal para climatizar la pileta principal durante todo el año.",
  },
  {
    id: "club-social",
    sector: "clubes",
    titulo: "Renovación térmica en club social",
    descripcion:
      "Reemplazo del sistema tradicional por un Sistema Santero de menor mantenimiento y mayor eficiencia.",
  },
  {
    id: "hotel-boutique",
    sector: "hoteles",
    titulo: "Agua caliente sanitaria para hotel boutique",
    descripcion:
      "Generación instantánea para picos de demanda simultánea en habitaciones y spa.",
  },
  {
    id: "hotel-cadena",
    sector: "hoteles",
    titulo: "Ampliación térmica en cadena hotelera",
    descripcion:
      "Dimensionamiento a medida para la incorporación de un nuevo ala de habitaciones.",
  },
  {
    id: "torre-residencial",
    sector: "desarrolladoras",
    titulo: "Provisión de ACS para torre residencial",
    descripcion:
      "Solución centralizada de agua caliente sanitaria para más de 80 unidades funcionales.",
  },
  {
    id: "complejo-departamentos",
    sector: "desarrolladoras",
    titulo: "Sistema centralizado para complejo de departamentos",
    descripcion:
      "Ingeniería de proyecto y fabricación a medida para un desarrollo de uso mixto.",
  },
  {
    id: "planta-alimenticia",
    sector: "industrias",
    titulo: "Planta de procesamiento alimenticio",
    descripcion:
      "Sistema de alta precisión que garantiza continuidad operativa en procesos críticos.",
  },
  {
    id: "planta-textil",
    sector: "industrias",
    titulo: "Optimización energética en planta textil",
    descripcion:
      "Migración a calentamiento indirecto para reducir el consumo energético de la planta.",
  },
];

export default function CasesExplorer() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const casosFiltrados =
    filtro === "todos" ? casos : casos.filter((caso) => caso.sector === filtro);

  return (
    <>
      <div className="border-y border-zinc-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <span className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Filtrar por sector:
          </span>
          {sectores.map((sector) => (
            <button
              key={sector.id}
              type="button"
              onClick={() => setFiltro(sector.id)}
              className={`rounded-md px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                filtro === sector.id
                  ? "bg-brand-red text-white"
                  : "border border-zinc-300 text-zinc-700 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {sector.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {casosFiltrados.map((caso) => (
            <div
              key={caso.id}
              className="overflow-hidden rounded-2xl border border-zinc-200"
            >
              <div className="aspect-video bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400" />
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wide text-brand-red uppercase">
                  {sectores.find((s) => s.id === caso.sector)?.label}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-navy">
                  {caso.titulo}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {caso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
