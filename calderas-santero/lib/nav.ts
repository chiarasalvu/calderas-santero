export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/sistema-santero", label: "Sistema Santero" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-de-exito", label: "Casos de Éxito" },
  { href: "/contacto", label: "Contacto" },
];
