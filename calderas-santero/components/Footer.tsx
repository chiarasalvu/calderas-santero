import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
        <div>
          <p className="text-lg font-bold text-zinc-900">Calderas Santero</p>
          <p className="mt-2 text-sm text-zinc-600">
            Tel: (011) 5555-5555
            <br />
            Email: contacto@calderassantero.com
            <br />
            WhatsApp: +54 9 11 5555-5555
            <br />
            Dirección: Av. Siempreviva 123, Buenos Aires
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-zinc-200 px-6 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Calderas Santero. Todos los derechos reservados.
      </div>
    </footer>
  );
}
