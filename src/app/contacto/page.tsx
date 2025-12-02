import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { ContactForm } from '@/components/landing/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary mb-4 ${className}`}>{children}</h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${className}`}>{children}</p>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow pt-24 md:pt-32">
        <section id="contacto" className="py-20">
          <div className="container px-4">
            <SectionTitle>Contacto</SectionTitle>
            <SectionSubtitle>¿Tienes alguna pregunta? Envíanos un mensaje y te contactaremos a la brevedad.</SectionSubtitle>
            <div className="max-w-xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Formulario de Contacto</CardTitle>
                  <CardDescription>Completa tus datos para recibir más información.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51984348389?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsappIcon className="w-8 h-8" />
      </a>
    </div>
  );
}
