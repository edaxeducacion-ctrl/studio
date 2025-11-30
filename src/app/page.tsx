import Image from 'next/image';
import {
  Activity,
  Bone,
  Calendar,
  Dog,
  Gem,
  GraduationCap,
  Hand,
  HeartPulse,
  Info,
  Phone,
  Scissors,
  ShieldCheck,
  Stethoscope,
  Venus,
  Waves,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { ContactForm } from '@/components/landing/contact-form';
import { ToothIcon } from '@/components/icons/tooth-icon';
import { EntIcon } from '@/components/icons/ent-icon';
import Link from 'next/link';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary mb-4 ${className}`}>{children}</h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${className}`}>{children}</p>
);

const featureIcons = [
  { icon: <Gem size={32} />, text: 'Máquina Alta Gama' },
  { icon: <Waves size={32} />, text: 'Doble Longitud de Onda (980nm - 1470nm)' },
  { icon: <ShieldCheck size={32} />, text: 'Garantía 2 Años' },
  { icon: <GraduationCap size={32} />, text: 'Formación Profesional' },
];

const laseevFunctions = [
  { icon: <HeartPulse />, text: 'Endolifting / Lipólisis', description: 'Rejuvenecimiento y eliminación de grasa localizada.' },
  { icon: <Waves />, text: 'Eliminación de Vasos', description: 'Tratamiento de arañas vasculares y telangiectasias.' },
  { icon: <Hand />, text: 'Onicomicosis', description: 'Tratamiento láser para hongos en las uñas.' },
  { icon: <Venus />, text: 'Rejuvenecimiento Vaginal', description: 'Tensado y rejuvenecimiento íntimo femenino.' },
  { icon: <Stethoscope />, text: 'EVLT', description: 'Tratamiento endovenoso para várices.' },
  { icon: <Bone />, text: 'PLDD', description: 'Descompresión percutánea de disco con láser.' },
  { icon: <EntIcon />, text: 'Función ENT', description: 'Aplicaciones en Otorrinolaringología.' },
  { icon: <ToothIcon />, text: 'Función Dental', description: 'Procedimientos odontológicos láser avanzados.' },
  { icon: <Activity />, text: 'Fisioterapia', description: 'Terapia para alivio del dolor y rehabilitación.' },
  { icon: <Scissors />, text: 'Hemorroides / Corte', description: 'Cirugía proctológica y corte de tejidos blandos.' },
];

const treatments = [
  { id: 'treatment-endolifting', title: 'Endolifting Facial Láser', desc: 'Define el contorno facial y reduce la flacidez sin cirugía, estimulando el colágeno.' },
  { id: 'treatment-lipomela', title: 'LipoMela', desc: 'Elimina depósitos de grasa localizada de forma segura y mínimamente invasiva.' },
  { id: 'treatment-armonizacion', title: 'Armonización Facial', desc: 'Combina Botox y Hialurónico para suavizar arrugas y restaurar volúmenes faciales.' },
  { id: 'treatment-faloplastia', title: 'Faloplastia', desc: 'Procedimiento de engrosamiento con Ácido Hialurónico para resultados naturales.' },
  { id: 'treatment-rinomodelacion', title: 'Rinomodelación', desc: 'Corrige y perfila la nariz al instante, sin necesidad de pasar por el quirófano.' },
];

const courses = [
  { id: 'course-endolaser', title: 'Curso de Endoláser / Endolifting' },
  { id: 'course-botox', title: 'Curso Práctico de Botox' },
  { id: 'course-armonizacion', title: 'Curso de Armonización Facial' },
  { id: 'course-vascular', title: 'Curso Vascular Facial' },
  { id: 'course-faloplastia', title: 'Curso de Faloplastia' },
  { id: 'course-labioplastia', title: 'Curso de Labioplastia' },
  { id: 'course-rinomodelacion', title: 'Curso de Rinomodelación' },
  { id: 'course-mela', title: 'Curso de MELA Corporal' },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const laseevMachineImage = PlaceHolderImages.find(p => p.id === 'laseev-pro-machine');
  const misterDogImage = PlaceHolderImages.find(p => p.id === 'mister-dog-grooming');
  const misterDogCourseImage = PlaceHolderImages.find(p => p.id === 'mister-dog-course');

  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="inicio" className="relative pt-24 md:pt-32 pb-12 md:pb-24 flex flex-col justify-center items-center text-white text-center min-h-[60vh] md:min-h-screen">
          {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} data-ai-hint={heroImage.imageHint} fill className="object-cover" />}
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 w-full container px-4 py-12 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down text-white">MTG: Excelencia en Medicina Estética y Formación Avanzada</h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 animate-fade-in-up">La solución mínimamente invasiva para la grasa rebelde, la flacidez y las lesiones vasculares. Sin Bisturí. Sin Cicatrices.</p>
            <Button asChild size="lg" className="animate-fade-in-up">
              <a href="#laseev">CONOCE EL LÁSER 10 EN 1</a>
            </Button>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="bg-background py-8 md:py-12 relative z-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featureIcons.map((feature, index) => (
                <Card key={index} className="bg-card shadow-lg animate-fade-in-up transition-transform duration-300 hover:-translate-y-2">
                  <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6 gap-3 h-full">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-sm sm:text-base font-semibold text-foreground">{feature.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Star Product Section */}
        <section id="laseev" className="py-20">
          <div className="container px-4">
            <SectionTitle>LASEEV Pro: Endoláser Multifuncional 10 en 1</SectionTitle>
            <SectionSubtitle>Plataforma láser dual certificada (FDA/ISO) para procedimientos seguros y efectivos. Energía de alta precisión con potencia ajustable de 1 a 30 watts.</SectionSubtitle>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center animate-fade-in-up">
                {laseevMachineImage && <Image src={laseevMachineImage.imageUrl} alt={laseevMachineImage.description} data-ai-hint={laseevMachineImage.imageHint} width={500} height={500} className="rounded-lg shadow-2xl" />}
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary/90 mb-4">¿Deseas Disolver Grasa y Tensar la Piel en un solo procedimiento?</h3>
                <p className="mb-4 text-muted-foreground">Endoláser multifuncional es la solución mínimamente invasiva para la grasa rebelde. Disuelve las células adiposas y, simultáneamente, tensa la piel para una silueta definida. ¡Remodelación corporal avanzada con una recuperación más rápida!</p>
                <p className="mb-6 font-semibold">SIN BISTURÍ. SIN CICATRICES CON RESULTADOS CLÍNICOS REALES</p>
                <p className="text-muted-foreground mb-2">Oferta Limitada</p>
                <p className="text-5xl lg:text-6xl font-extrabold text-primary mb-6">$7100 USD</p>
                <p className="mb-8 text-lg">La tecnología más avanzada para una amplia gama de aplicaciones médicas y estéticas.</p>
                <Button asChild size="lg">
                  <a href="#contacto">SOLICITAR FICHA TÉCNICA</a>
                </Button>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center text-primary/90 mb-8">10 Funciones en 1 Equipo</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                {laseevFunctions.map((func, index) => (
                  <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                    <CardHeader className="items-center">
                      <div className="bg-primary/10 text-primary p-3 rounded-full mb-2">{func.icon}</div>
                      <CardTitle className="text-base font-semibold">{func.text}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <p className="text-sm text-muted-foreground">{func.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section id="tratamientos" className="py-20 bg-card">
          <div className="container px-4">
            <SectionTitle>Tratamientos Estéticos MTG</SectionTitle>
            <SectionSubtitle>Descubre nuestros procedimientos de vanguardia para realzar tu belleza natural con resultados profesionales y seguros.</SectionSubtitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.slice(0, 3).map((treatment) => {
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
                         <a href="tel:970616024">
                           <Calendar className="mr-2 h-4 w-4" /> Agendar cita
                         </a>
                       </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="mt-6 flex justify-center">
              <div className="grid sm:grid-cols-2 gap-6">
                {treatments.slice(3).map((treatment) => {
                  const image = PlaceHolderImages.find(p => p.id === treatment.id);
                  return (
                    <Card key={treatment.id} className="overflow-hidden group flex flex-col lg:w-[calc(50vw-2.5rem)] max-w-sm">
                      {image && <div className="overflow-hidden aspect-square"><Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} width={400} height={400} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" /></div>}
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-lg">{treatment.title}</CardTitle>
                        <CardDescription>{treatment.desc}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                          <a href="tel:970616024">
                            <Calendar className="mr-2 h-4 w-4" /> Agendar cita
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="tel:970616024">
                  <Phone className="mr-2" /> AGENDA TU CITA (970 616 024)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
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
                        <a href={`https://wa.me/51970616024?text=Hola,%20quisiera%20más%20información%20sobre%20el%20curso%20de%20'${course.title}'`} target="_blank" rel="noopener noreferrer">
                          <WhatsappIcon className="mr-2 h-4 w-4" /> Solicitar Información
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="#contacto">VER FECHAS Y MATRICULARME</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Mister Dog Section */}
        <section id="mister-dog" className="py-20 bg-sky-50 dark:bg-sky-900/20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-800 dark:text-sky-200 mb-4 flex items-center justify-center gap-3">
                <Dog className="w-8 h-8"/>
                Servicios Caninos: Mister Dog
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="bg-white dark:bg-card overflow-hidden">
                {misterDogImage && <Image src={misterDogImage.imageUrl} alt={misterDogImage.description} data-ai-hint={misterDogImage.imageHint} width={600} height={400} className="object-cover w-full h-64" />}
                <CardHeader>
                  <CardTitle className="text-sky-700 dark:text-sky-300">Promoción Baño y Corte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-sky-800 dark:text-sky-200 mb-2">S/40</p>
                  <p className="text-muted-foreground">Incluye Desparasitación y Delivery Gratis.</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-card overflow-hidden">
                {misterDogCourseImage && <Image src={misterDogCourseImage.imageUrl} alt={misterDogCourseImage.description} data-ai-hint={misterDogCourseImage.imageHint} width={600} height={400} className="object-cover w-full h-64" />}
                <CardHeader>
                  <CardTitle className="text-sky-700 dark:text-sky-300">Curso Básico de Peluquería Canina</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Formación 100% personalizada. Aprende una nueva profesión con alta demanda.</p>
                </CardContent>
              </Card>
            </div>
             <div className="text-center mt-8 text-sky-900 dark:text-sky-200">
              <p><strong>Ubicación:</strong> Los Amatistas #125, S.J.L.</p>
              <p><strong>Teléfono:</strong> <a href="tel:+51947282902" className="hover:underline">+51 947 282 902</a></p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
