import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="mt-2 text-sm text-foreground/60 max-w-xs">
              Formación integral en valores desde 1996.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Navegación</h2>
              <ul className="text-foreground/60 font-medium">
                <li className="mb-4">
                  <Link href="/quienes-somos" className="hover:underline">Quiénes somos</Link>
                </li>
                <li>
                  <Link href="/oferta-educativa" className="hover:underline">Oferta Educativa</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Comunidad</h2>
              <ul className="text-foreground/60 font-medium">
                <li className="mb-4">
                  <Link href="/galeria" className="hover:underline">Galería</Link>
                </li>
                <li>
                  <Link href="/noticias" className="hover:underline">Noticias</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-foreground uppercase">Legal</h2>
              <ul className="text-foreground/60 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">Política de Privacidad</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Términos y Condiciones</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-foreground/60 sm:text-center">
            © {currentYear} <Link href="/" className="hover:underline">Centro Educativo Carrusel™</Link>. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-1">
             <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Facebook page">
                    <Facebook className="w-5 h-5" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Instagram profile">
                    <Instagram className="w-5 h-5" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="YouTube channel">
                    <Youtube className="w-5 h-5" />
                </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
