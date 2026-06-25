import Link from "next/link";

type CardProps = {
  titulo: string;
  descripcion: string;
  icono?: string;
  href?: string;
};

export default function Card({ titulo, descripcion, icono, href }: CardProps) {
  const content = (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {icono && <span className="text-3xl">{icono}</span>}
      <h3 className="text-lg font-semibold text-zinc-900">{titulo}</h3>
      <p className="text-sm text-zinc-600">{descripcion}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
