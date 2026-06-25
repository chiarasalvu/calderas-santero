type SectionProps = {
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
};

export default function Section({ titulo, subtitulo, children }: SectionProps) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{subtitulo}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
