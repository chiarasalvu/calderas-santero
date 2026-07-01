"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, legalLinks } from "@/lib/nav";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t-4 border-brand-red bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-brand-red">
            Calderas Santero
          </p>
          <p className="mt-3 max-w-xs text-sm text-zinc-500">
            Líderes en ingeniería térmica desde 1935. Tecnología argentina
            para la industria global.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-navy">
            Secciones
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {navLinks
              .filter((link) => link.href !== "/#faqs")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm ${
                    pathname === link.href
                      ? "font-medium text-brand-red"
                      : "text-zinc-500 hover:text-brand-red"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-navy">
            Legal &amp; Contacto
          </p>
          <nav className="mt-3 flex flex-col gap-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-500">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17" cy="7" r="0.75" fill="currentColor" />
              </svg>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-zinc-500">
              <svg viewBox="0 0 320 512" fill="currentColor" className="h-4 w-4">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Calderas Santero. Industria
            Argentina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
