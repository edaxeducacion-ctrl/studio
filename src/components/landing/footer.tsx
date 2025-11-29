export function LandingFooter() {
  return (
    <footer className="bg-foreground text-background/80 py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Medic Teaching Group. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
