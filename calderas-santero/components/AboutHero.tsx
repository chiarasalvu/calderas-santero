import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.06),transparent_40%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
          Trayectoria e innovación
        </p>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="max-w-2xl font-heading text-4xl leading-tight font-semibold text-white sm:text-5xl">
            Más de 90 años transformando la industria térmica argentina.
          </h1>

          <div className="max-w-md">
            <p className="text-justify text-white/80">
              Desde 1935, lideramos el mercado nacional con soluciones de
              ingeniería de alta precisión y un compromiso inquebrantable con
              la calidad.
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-block rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-red"
            >
              Quiero Asesoramiento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
