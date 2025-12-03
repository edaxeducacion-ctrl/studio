import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary mb-4 ${className}`}>{children}</h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${className}`}>{children}</p>
);

const courses = [
  { id: 'course-endolaser', title: 'Curso de Endoláser / Endolifting' },
  { id: 'course-botox', title: 'Curso Práctico de Botox' },
  { id: 'course-armonizacion', title: 'Curso de Armonización Facial' },
  { id: 'course-vascular', title: 'Curso Vascular Facial' },
  { id: 'course-faloplastia', title: 'Curso de Faloplastia' },
  { id: 'course-labioplastia', title: 'Curso de Labioplastia' },
  { id: 'course-rinomodelacion', title: 'Curso de Rinomodelación Labios' },
  { id: 'course-mela', title: 'Curso de MELA Corporal' },
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow pt-24 md:pt-32">
        <section id="cursos" className="py-20">
          <div className="container px-4">
            <SectionTitle>Cursos de Alta Especialidad</SectionTitle>
            <SectionSubtitle>Dirigido a Médicos, Odontólogos, Ginecólogos, Cirujanos Plásticos y profesionales de la salud que buscan liderar en su campo.</SectionSubtitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => {
                const image = PlaceHolderImages.find(p => p.id === course.id);
                return (
                  <Card key={course.id} className="overflow-hidden group flex flex-col">
                    {image && <div className="overflow-hidden aspect-square"><Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={400} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" /></div>}
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                        <a href={`https://wa.me/51970616024?text=Hola,%20quisiera%20inscribirme%20en%20el%20curso%20de%20'${course.title}'`} target="_blank" rel="noopener noreferrer">
                          <WhatsappIcon className="mr-2 h-4 w-4" /> Inscribirme
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="https://wa.me/51970616024?text=Hola,%20quisiera%20ver%20las%20fechas%20y%20matricularme%20en%20un%20curso." target="_blank" rel="noopener noreferrer">VER FECHAS Y MATRICULARME</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51970616024?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios."
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
