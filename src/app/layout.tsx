import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Medic Teaching Group - MTG',
  description: 'En MTG, nos especializamos en ofrecer soluciones innovadoras y de alta calidad para impulsar tu crecimiento profesional y personal. Nuestras máquinas de tecnología de Alta Gama y nuestros cursos de excelencia te permiten acceder a las Últimas tecnicas.',
  openGraph: {
    title: 'Medic Teaching Group - MTG',
    description: 'En MTG, nos especializamos en ofrecer soluciones innovadoras y de alta calidad para impulsar tu crecimiento profesional y personal. Nuestras máquinas de tecnología de Alta Gama y nuestros cursos de excelencia te permiten acceder a las Últimas tecnicas.',
    images: [
      {
        url: 'https://www.infoblancosobrenegro.com/uploads/noticias/5/2024/08/20240819195557_estetica.jpg',
        width: 1200,
        height: 630,
        alt: 'Medic Teaching Group',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
