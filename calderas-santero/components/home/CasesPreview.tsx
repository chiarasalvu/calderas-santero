"use client";

import { useState } from "react";

type SectorCasos = {
  id: string;
  nombre: string;
  clientes: string[];
};

const sectores: SectorCasos[] = [
  {
    id: "clubes",
    nombre: "Clubes",
    clientes: ["Cliente 01", "Cliente 02", "Cliente 03", "Cliente 04"],
  },
  {
    id: "desarrolladoras",
    nombre: "Desarrolladoras",
    clientes: ["Cliente 01", "Cliente 02", "Cliente 03"],
  },
  {
    id: "hoteles",
    nombre: "Hoteles",
    clientes: ["Cliente 01", "Cliente 02", "Cliente 03", "Cliente 04"],
  },
  {
    id: "industrias",
    nombre: "Industrias",
    clientes: ["Cliente 01", "Cliente 02", "Cliente 03", "Cliente 04", "Cliente 05"],
  },
];

export default function CasesPreview() {
  const [abierto, setAbierto] = useState<string | null>(null);

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold tracking-wide text-navy uppercase sm:text-4xl">
          Casos de Éxito
        </h2>

        <div className="mt-10">
          {sectores.map((sector, index) => {
            const open = abierto === sector.id;
            return (
              <div key={sector.id} className="border-b border-zinc-200 first:border-t">
                <button
                  type="button"
                  onClick={() => setAbierto(open ? null : sector.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-8 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-sm text-brand-red/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-2xl font-bold tracking-wide text-navy uppercase sm:text-3xl">
                      {sector.nombre}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 text-2xl text-navy transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ⌄
                  </span>
                </button>

                {open && (
                  <div className="flex flex-wrap gap-3 pb-8">
                    {sector.clientes.map((cliente) => (
                      <span
                        key={cliente}
                        className="rounded-lg border border-zinc-200 bg-cream-card px-5 py-3 text-sm font-medium text-zinc-600"
                      >
                        {cliente}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
