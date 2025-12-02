import Image from 'next/image';
import { Calendar, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary mb-4 ${className}`}>{children}</h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${className}`}>{children}</p>
);

const treatments = [
  { id: 'treatment-endolifting', title: 'Endolifting Facial Láser', desc: 'Define el contorno facial y reduce la flacidez sin cirugía, estimulando el colágeno.' },
  { id: 'treatment-lipomela', title: 'LipoMela', desc: 'Elimina depósitos de grasa localizada de forma segura y mínimamente invasiva.' },
  { id: 'treatment-armonizacion', title: 'Armonización Facial', desc: 'Combina Botox y Hialurónico para suavizar arrugas y restaurar volúmenes faciales.' },
  { id: 'treatment-faloplastia', title: 'Faloplastia', desc: 'Procedimiento de engrosamiento con Ácido Hialurónico para resultados naturales.' },
  { id: 'treatment-rinomodelacion', title: 'Rinomodelación', desc: 'Corrige y perfila la nariz al instante, sin necesidad de pasar por el quirófano.' },
];

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow pt-24 md:pt-32">
        <section id="tratamientos" className="py-20 bg-card">
          <div className="container px-4">
            <SectionTitle>Tratamientos Estéticos MTG</SectionTitle>
            <SectionSubtitle>Descubre nuestros procedimientos de vanguardia para realzar tu belleza natural con resultados profesionales y seguros.</SectionSubtitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((treatment) => {
                const image = PlaceHolderImages.find(p => p.id === treatment.id);
                return (
                  <Card key={treatment.id} className="overflow-hidden group flex flex-col">
                    {image && <div className="overflow-hidden aspect-square"><Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={400} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" /></div>}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-lg">{treatment.title}</CardTitle>
                      <CardDescription>{treatment.desc}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                       <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                         <a href={`https://wa.me/51947282902?text=Hola,%20quisiera%20agendar%20una%20cita%20para%20el%20tratamiento%20de%20'${treatment.title}'`} target="_blank" rel="noopener noreferrer">
                           <Calendar className="mr-2 h-4 w-4" /> Agendar cita
                         </a>
                       </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="https://wa.me/51947282902?text=Hola,%20quisiera%20agendar%20una%20cita." target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" /> AGENDA TU CITA POR WHATSAPP
                </a>
              </Button>
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
