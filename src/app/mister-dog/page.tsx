
import Image from 'next/image';
import { Dog, GraduationCap, Info } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LandingHeader } from '@/components/landing/header';
import { LandingFooter } from '@/components/landing/footer';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';

export default function MisterDogPage() {
  const misterDogImage = PlaceHolderImages.find(p => p.id === 'mister-dog-grooming');
  const misterDogCourseImage = PlaceHolderImages.find(p => p.id === 'mister-dog-course');

  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <main className="flex-grow">
        <section id="mister-dog" className="py-20 pt-24 md:pt-32 bg-sky-50 dark:bg-sky-900/20">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-800 dark:text-sky-200 mb-4 flex items-center justify-center gap-3">
                <Dog className="w-8 h-8"/>
                Servicios Caninos: Mister Dog
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
              <Card className="bg-white dark:bg-card overflow-hidden flex flex-col">
                <div className="overflow-hidden aspect-square">
                  {misterDogImage && <Image src={misterDogImage.imageUrl} alt={misterDogImage.description} data-ai-hint={misterDogImage.imageHint} width={600} height={600} className="object-cover w-full h-full" />}
                </div>
                <CardHeader>
                  <CardTitle className="text-sky-700 dark:text-sky-300">Promoción Baño y Corte</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold text-sky-800 dark:text-sky-200 mb-2">S/40</p>
                  <p className="text-muted-foreground">Incluye Desparasitación y Delivery Gratis.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                    <a href="https://wa.me/51947282902?text=Hola,%20quisiera%20más%20información%20sobre%20la%20promoción%20de%20baño%20y%20corte." target="_blank" rel="noopener noreferrer">
                      <Info className="mr-2 h-4 w-4" /> Más información
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-card overflow-hidden flex flex-col">
                <div className="overflow-hidden aspect-square">
                  {misterDogCourseImage && <Image src={misterDogCourseImage.imageUrl} alt={misterDogCourseImage.description} data-ai-hint={misterDogCourseImage.imageHint} width={600} height={600} className="object-cover w-full h-full" />}
                </div>
                <CardHeader>
                  <CardTitle className="text-sky-700 dark:text-sky-300">Curso Básico de Peluquería Canina</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">Formación 100% personalizada. Aprende una nueva profesión con alta demanda.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                    <a href="https://wa.me/51947282902?text=Hola,%20quisiera%20inscribirme%20en%20el%20curso%20de%20peluquería%20canina." target="_blank" rel="noopener noreferrer">
                      <GraduationCap className="mr-2 h-4 w-4" /> Inscribirme
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
             <div className="text-center mt-8 text-sky-900 dark:text-sky-200">
              <p><strong>Ubicación:</strong> Los Amatistas #125, S.J.L.</p>
              <p><strong>Teléfono:</strong> <a href="tel:+51947282902" className="hover:underline">+51 947 282 902</a></p>
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
