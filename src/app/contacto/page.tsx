import { Mail, MapPin, Phone } from 'lucide-react';


export default function ContactoPage() {
  const address = "Centro Educativo Carrusel, Juan de Acosta, Atlantico, Colombia";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURI(address)}&output=embed`;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Contacto
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para admisiones, preguntas o cualquier otra información.
          </p>
        </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-accent">Información de Contacto</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 text-primary shrink-0" />
                  <p className="text-foreground/80">Carrera 14 #6-26, Condado Padilla, Juan de Acosta – Atlántico</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <a href="tel:+573046511811" className="text-foreground/80 hover:text-primary">304 651 1811</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                   <a href="mailto:cecarrusel01@gmail.com" className="text-foreground/80 hover:text-primary">cecarrusel01@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
               <h3 className="font-headline text-2xl font-semibold mb-4 text-accent">Nuestra Ubicación</h3>
               <div className="aspect-video rounded-lg overflow-hidden shadow-md border">
                  <iframe
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapSrc}
                    className="w-full h-full"
                  >
                  </iframe>
               </div>
            </div>
          </div>
        </div>
      </div>

  );
}
