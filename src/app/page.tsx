
import Image from 'next/image';
import {
  Activity,
  Bone,
  Gem,
  GraduationCap,
  Hand,
  HeartPulse,
  Scissors,
  ShieldCheck,
  Stethoscope,
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

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const laseevMachineImage = PlaceHolderImages.find(p => p.id === 'laseev-pro-machine');

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
                  <a href="https://wa.me/51947282902?text=Hola,%20quisiera%20solicitar%20la%20ficha%20técnica%20del%20LASEEV%20Pro." target="_blank" rel="noopener noreferrer">SOLICITAR FICHA TÉCNICA</a>
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
      </main>
      <LandingFooter />
    </div>
  );
}
