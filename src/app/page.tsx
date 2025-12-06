

import Image from 'next/image';
import {
  Activity,
  Award,
  Bone,
  Clock,
  Gem,
  GraduationCap,
  Hand,
  HeartPulse,
  Quote,
  ShieldCheck,
  Stethoscope,
  User,
  Users,
  Venus,
  Waves,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { ToothIcon } from '@/components/icons/tooth-icon';
import { EntIcon } from '@/components/icons/ent-icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';


const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary mb-4 ${className}`}>{children}</h2>
);

const SectionSubtitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${className}`}>{children}</p>
);

const featureIcons = [
    { icon: <Gem className="w-10 h-10 text-primary" />, text: 'Máquina Alta Gama' },
    { icon: <Waves className="w-10 h-10 text-primary" />, text: 'Doble Longitud de Onda (980nm - 1470nm)' },
    { icon: <ShieldCheck className="w-10 h-10 text-primary" />, text: 'Garantía 2 Años' },
    { icon: <GraduationCap className="w-10 h-10 text-primary" />, text: 'Formación Profesional' },
  ];

const laseevFunctions = [
  { id: 'laseev-endolifting', icon: <HeartPulse />, text: 'Endolifting / Lipólisis', description: 'Rejuvenecimiento y eliminación de grasa localizada.' },
  { id: 'laseev-vascular', icon: <Waves />, text: 'Eliminación de Vasos', description: 'Tratamiento de arañas vasculares y telangiectasias.' },
  { id: 'laseev-onicomicosis', icon: <Hand />, text: 'Onicomicosis', description: 'Tratamiento láser para hongos en las uñas.' },
  { id: 'laseev-vaginal', icon: <Venus />, text: 'Rejuvenecimiento Vaginal', description: 'Tensado y rejuvenecimiento íntimo femenino.' },
  { id: 'laseev-evlt', icon: <Stethoscope />, text: 'EVLT', description: 'Tratamiento endovenoso para várices.' },
  { id: 'laseev-pldd', icon: <Bone />, text: 'PLDD', description: 'Descompresión percutánea de disco con láser.' },
  { id: 'laseev-ent', icon: <EntIcon />, text: 'Función ENT', description: 'Aplicaciones en Otorrinolaringología.' },
  { id: 'laseev-dental', icon: <ToothIcon />, text: 'Función Dental', description: 'Procedimientos odontológicos láser avanzados.' },
  { id: 'laseev-physio', icon: <Activity />, text: 'Fisioterapia', description: 'Terapia para alivio del dolor y rehabilitación.' },
  { id: 'laseev-proctology', icon: <HeartPulse />, text: 'Hemorroides / Corte', description: 'Cirugía proctológica y corte de tejidos blandos.' },
];

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Dr. Alejandro Vargas',
    title: 'Cirujano Plástico',
    quote: 'Funciona mejor de lo que esperaba. Hasta ahora todo bien, por eso sí la recomendaría.',
  },
  {
    id: 'testimonial-2',
    name: 'Dra. María José',
    title: 'Dermatóloga Estética',
    quote: 'Estoy usando la máquina y realmente me está yendo bien. La recomendaría a otros.',
  }
];

const faqItems = [
  {
    id: "faq-1",
    question: "¿Qué certificaciones tiene el equipo Láser Multifuncional Pro?",
    answer: "El Láser Multifuncional Pro cuenta con las certificaciones más importantes a nivel internacional, incluyendo FDA e ISO, lo que garantiza su seguridad, calidad y eficacia en todos los procedimientos."
  },
  {
    id: "faq-2",
    question: "¿La formación está incluida con la compra del equipo?",
    answer: "Sí, al adquirir el Láser Multifuncional Pro, te incluimos un programa de formación profesional completo y personalizado. Nuestro equipo de expertos te guiará para que domines todas las funciones y saques el máximo provecho a tu inversión desde el primer día."
  },
  {
    id: "faq-3",
    question: "¿Qué tipo de garantía ofrecen?",
    answer: "Ofrecemos una garantía extendida de 2 años que cubre cualquier defecto de fabricación. Además, contamos con servicio técnico especializado y soporte continuo para resolver cualquier incidencia de manera rápida y eficiente."
  },
  {
    id: "faq-4",
    question: "¿Es complicado el mantenimiento del equipo?",
    answer: "No, el Láser Multifuncional Pro está diseñado para ser robusto y de bajo mantenimiento. Te proporcionamos un manual detallado y pautas sencillas para asegurar su óptimo funcionamiento a lo largo del tiempo. Nuestro equipo de soporte también está disponible para cualquier consulta."
  }
];

const benefits = [
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: 'Resultados Superiores',
    description: 'Ofrece resultados visibles y naturales con máxima precisión, mejorando la satisfacción del paciente.'
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: 'Recuperación Rápida',
    description: 'Procedimientos mínimamente invasivos que reducen el tiempo de inactividad y permiten un retorno más rápido a las actividades diarias.'
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Amplíe sus Servicios',
    description: 'La versatilidad 10 en 1 le permite diversificar su oferta de tratamientos y atraer a más pacientes.'
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const laseevMachineImage = PlaceHolderImages.find(p => p.id === 'laseev-pro-machine');
  const dissolveFatImage = PlaceHolderImages.find(p => p.id === 'dissolve-fat');

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
                    {feature.icon}
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
            <SectionTitle>Láser Multifuncional Pro: Endoláser 10 en 1</SectionTitle>
            <SectionSubtitle>Plataforma láser dual certificada (FDA/ISO) para procedimientos seguros y efectivos. Energía de alta precisión con potencia ajustable de 1 a 30 watts.</SectionSubtitle>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="flex justify-center animate-fade-in-up">
                {dissolveFatImage && <Image src={dissolveFatImage.imageUrl} alt={dissolveFatImage.description} data-ai-hint={dissolveFatImage.imageHint} width={500} height={500} className="rounded-lg shadow-2xl object-cover" />}
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary/90 mb-4">¿Deseas Disolver Grasa y Tensar la Piel en un solo procedimiento?</h3>
                <p className="mb-4 text-muted-foreground">Endoláser es la solución mínimamente invasiva para la grasa rebelde. Disuelve las células adiposas y, simultáneamente, tensa la piel para una silueta definida. ¡Remodelación corporal avanzada con una recuperación más rápida!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                <p className="mb-6 font-semibold">SIN BISTURÍ. SIN CICATRICES CON RESULTADOS CLÍNICOS REALES</p>
                <p className="text-muted-foreground mb-2">Oferta Limitada</p>
                <p className="text-5xl lg:text-6xl font-extrabold text-primary mb-6">$7100 USD</p>
                <p className="mb-8 text-lg">La tecnología más avanzada para una amplia gama de aplicaciones médicas y estéticas.</p>
                <Button asChild size="lg">
                  <a href="https://wa.me/51970616024?text=Hola,%20quisiera%20solicitar%20la%20ficha%20técnica%20del%20Láser%20Multifuncional%20Pro." target="_blank" rel="noopener noreferrer">SOLICITAR FICHA TÉCNICA</a>
                </Button>
              </div>
              <div className="flex justify-center animate-fade-in-up relative order-1 md:order-2">
                {laseevMachineImage && <Image src={laseevMachineImage.imageUrl} alt={laseevMachineImage.description} data-ai-hint={laseevMachineImage.imageHint} width={600} height={600} className="rounded-lg" />}
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center text-primary/90 mb-8">10 Funciones en 1 Equipo</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {laseevFunctions.map((func) => {
                  const image = PlaceHolderImages.find(p => p.id === func.id);
                  return (
                    <Card key={func.id} className="overflow-hidden group flex flex-col text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                       {image && (
                         <div className="overflow-hidden aspect-square relative">
                           <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                         </div>
                       )}
                       <CardHeader className="flex-grow pt-4">
                         <CardTitle className="text-base font-semibold">{func.text}</CardTitle>
                       </CardHeader>
                       <CardContent className="px-4 pb-4">
                         <p className="text-sm text-muted-foreground">{func.description}</p>
                       </CardContent>
                     </Card>
                  );
                })}
              </div>
            </div>

            {/* Benefits Section */}
            <section id="beneficios" className="py-20">
                <div className="container px-4">
                    <SectionTitle>Beneficios de Láser Multifuncional Pro</SectionTitle>
                    <SectionSubtitle>Descubra por qué Láser Multifuncional Pro es la elección inteligente para su práctica.</SectionSubtitle>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="text-center">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">{benefit.icon}</div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonios" className="py-20 bg-background">
              <div className="container px-4">
                <SectionTitle>Testimonios de Clientes</SectionTitle>
                <SectionSubtitle>Vea lo que dicen los profesionales que ya confían en nuestra tecnología.</SectionSubtitle>
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial) => (
                      <Card key={testimonial.id} className="flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4">
                          <Avatar className='h-14 w-14 bg-muted text-muted-foreground'>
                            <AvatarFallback>
                              <User className="h-8 w-8" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <Quote className="w-6 h-6 text-primary/50 mb-2" />
                          <p className="text-muted-foreground">{testimonial.quote}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20">
              <div className="container px-4 max-w-3xl mx-auto">
                <SectionTitle>Preguntas Frecuentes</SectionTitle>
                <SectionSubtitle>¿Tienes dudas? Aquí resolvemos las consultas más habituales sobre el equipo Láser Multifuncional Pro.</SectionSubtitle>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

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
