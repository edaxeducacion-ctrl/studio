import { Phone } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-foreground text-background/80 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-lg mb-2 text-white">MTG Estética y Formación</h4>
            <a
              href="tel:+51984348389"
              className="flex items-center justify-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>+51 984 348 389</span>
            </a>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-white">Mister Dog Peluquería</h4>
             <a
              href="tel:+51947282902"
              className="flex items-center justify-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>+51 947 282 902</span>
            </a>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Medic Teaching Group. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
