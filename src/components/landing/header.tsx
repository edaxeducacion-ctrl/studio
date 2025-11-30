'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, Phone } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#laseev', label: 'LASEEV 10 EN 1' },
  { href: '#tratamientos', label: 'TRATAMIENTOS' },
  { href: '#cursos', label: 'CURSOS' },
  { href: '#contacto', label: 'CONTACTO' },
];

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card shadow-md',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#inicio" className="text-lg md:text-xl font-bold text-primary">
          Medic Teaching Group <span className="hidden sm:inline">- MTG</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline">
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
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
              <div className="flex flex-col h-full p-6">
                <Link href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-primary mb-8">
                  Medic Teaching Group
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
                   <Button asChild variant="outline" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
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
