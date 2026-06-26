export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sistema-santero", label: "Sistema Santero" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-de-exito", label: "Casos de Éxito" },
  { href: "/contacto", label: "Contacto" },
];
