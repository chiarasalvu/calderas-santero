import Link from "next/link";

type HeroProps = {
  titulo: string;
  subtitulo: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Hero({ titulo, subtitulo, ctaHref, ctaLabel }: HeroProps) {
  return (
    <section className="bg-zinc-50 px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {titulo}
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">{subtitulo}</p>
        {ctaHref && ctaLabel && (
          <Link
            href={ctaHref}
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
