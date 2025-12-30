import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Description } from '@radix-ui/react-toast';

export default function NoticiasPage() {
  const newsItems = [
    {
      id: '1',
      title: 'Inicio del Año Escolar 2026',
      description: 'Damos la bienvenida a todos nuestros estudiantes y familias a un nuevo año de aprendizaje y crecimiento. Conoce las fechas clave.',
      imageId: 'news-1',
      date: 'Diciembre',
      category: 'Comunicado'
    },


     {
      id: '2',
      title: 'MATRICULAS ABIERTAS 2026',
      description: 'Damos la apertura al proceso de matrícula para el nuevo año escolar 2026. ¡No te pierdas esta oportunidad!',
      imageId: 'news-2',
      date: 'Enero 6, 2026',
      category: 'Comunicado'
    },
   
    {
      id: '3',
      title: 'Reuniones de Padres y Docentes',
      description: 'Información importante sobre las próximas reuniones para el seguimiento académico y formativo de nuestros estudiantes. ¡Tu participación es clave!',
      imageId: 'news-3',
      date: '',
      category: 'Comunicado'
    },
     {
      id: '4',
      title: 'InnovaKids',
      description: 
      <p>En el Centro Educativo Carrusel seguimos impulsando nuestro proyecto de emprendimiento, formando niños con visión de futuro e ideas innovadoras.
        Hoy recibimos la inspiradora visita de el lider, un niño emprendedor que compartió con nuestros estudiantes su testimonio y experiencia, 
        motivándolos a soñar en grande y a creer en sus capacidades para transformar el mundo.</p>,
      imageId: 'news-4',
      date: 'AGOSTO 22, 2025',
      category: 'Proyecto'
    }
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Noticias y Eventos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Mantente al día con los últimos acontecimientos, comunicados y celebraciones de nuestra comunidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => {
            const newsImage = PlaceHolderImages.find(img => img.id === item.imageId);
            return (
              <Card key={item.id} className="flex flex-col overflow-hidden group">
                {newsImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={newsImage.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-90 object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={newsImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <Badge variant={item.category === 'Evento' ? 'default' : 'secondary'} className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="font-headline text-xl h-14">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/110 line-clamp-20">{item.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                   <div className="text-sm text-foreground/60 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="#">Leer más <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
