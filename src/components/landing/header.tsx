'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Phone } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#laseev', label: 'LASEEV 10 EN 1' },
  { href: '#tratamientos', label: 'TRATAMIENTOS' },
  { href: '#cursos', label: 'CURSOS' },
  { href: '#contacto', label: 'CONTACTO' },
];

export function LandingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'py-2 bg-card shadow-md'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#inicio" className="flex items-center">
          <Image src="https://i.imgur.com/hk8p7DX.png" alt="Medic Teaching Group Logo" width={150} height={40} />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="bg-sky-600 hover:bg-sky-700 text-white font-bold">
            <Link href="#mister-dog">MISTER DOG</Link>
          </Button>
          <a
            href="tel:970616024"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" />
            970 616 024
          </a>
        </div>
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-sky-100/50 hover:text-sky-500">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
               <SheetHeader className="p-6">
                 <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
               </SheetHeader>
              <div className="flex flex-col h-full p-6 pt-0">
                <Link href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="mb-8">
                  <Image src="https://i.imgur.com/hk8p7DX.png" alt="Medic Teaching Group Logo" width={180} height={48} />
                </Link>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                   <Button asChild size="lg" onClick={() => setIsMobileMenuOpen(false)} className="bg-sky-600 hover:bg-sky-700 text-white font-bold">
                    <Link href="#mister-dog">MISTER DOG</Link>
                  </Button>
                  <a
                    href="tel:970616024"
                    className="flex items-center justify-center gap-2 text-lg font-semibold text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    970 616 024
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
