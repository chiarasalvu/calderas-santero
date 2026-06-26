import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <Section
      titulo="Contacto"
      subtitulo="Escribinos y te respondemos a la brevedad."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Datos de contacto
            </h3>
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

          <div className="flex h-48 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-sm text-zinc-500">
            Mapa placeholder
          </div>
        </div>
      </div>
    </Section>
  );
}
