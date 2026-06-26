import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Éxito | Calderas Santero",
  description:
    "Proyectos de instalación, mantenimiento y reparación de calderas que llevamos adelante.",
};

export default function CasosDeExitoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
