import AboutHero from "@/components/AboutHero";
import HistoryTimeline from "@/components/HistoryTimeline";
import SistemaSanteroTeaser from "@/components/home/SistemaSanteroTeaser";
import ServicesPreview from "@/components/home/ServicesPreview";
import CasesPreview from "@/components/home/CasesPreview";
import Faq from "@/components/home/Faq";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <AboutHero />
      <HistoryTimeline />
      <SistemaSanteroTeaser />
      <ServicesPreview />
      <CasesPreview />
      <Faq />
      <CtaBanner
        titulo="¿Listo para modernizar su planta?"
        descripcion="Nuestra ingeniería se adapta a los desafíos de hoy con la solidez de siempre. Conozca todas nuestras soluciones térmicas."
        primaryLabel="Ver Soluciones Técnicas"
        primaryHref="/servicios"
        secondaryLabel="Agendar Consultoría"
        secondaryHref="/contacto"
      />
    </>
  );
}
