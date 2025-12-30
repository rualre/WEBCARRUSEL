import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Microscope, Palette } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-students');
  const preschoolImage = PlaceHolderImages.find(img => img.id === 'preschool-kids');
  const elementaryImage = PlaceHolderImages.find(img => img.id === 'elementary-kids');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
           <div className="absolute inset-0 bg-primary/60 dark:bg-black/60" />
           <div className="relative z-10 container mx-auto px-4 animate-fade-in-up">
           <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg dark:text-blue-200">
            Formación Integral en Valores
           </h1>
           <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl dark:text-blue-200">
            Centro Educativo Carrusel: donde el amor y el conocimiento se unen para formar el futuro.
           </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href="/quienes-somos">Conócenos <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Nuestra Misión</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            Brindar una educación integral basada en valores que promueva el desarrollo académico, emocional y social de nuestros estudiantes, preparándolos para ser ciudadanos comprometidos y compasivos.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Nuestra Oferta Educativa</h2>
            <p className="mt-2 text-lg text-foreground/80">Dos niveles de formación llenos de descubrimiento y crecimiento.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {preschoolImage && (
                <Image src={preschoolImage.imageUrl} alt={preschoolImage.description} width={600} height={400} className="w-full h-64 object-cover" data-ai-hint={preschoolImage.imageHint} />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Preescolar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Una etapa mágica donde sentamos las bases del aprendizaje a través del juego, la exploración y el afecto, inspirados en el modelo Reggio Emilia.</p>
                <Button asChild variant="link" className="p-0 h-auto mt-4 font-semibold">
                  <Link href="/oferta-educativa">Ver más <ArrowRight className="ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {elementaryImage && (
                <Image src={elementaryImage.imageUrl} alt={elementaryImage.description} width={600} height={400} className="w-full h-64 object-cover" data-ai-hint={elementaryImage.imageHint}/>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Básica Primaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Fomentamos el pensamiento crítico y la autonomía en un ambiente de respeto y colaboración, desarrollando todas las dimensiones del ser.</p>
                 <Button asChild variant="link" className="p-0 h-auto mt-4 font-semibold">
                  <Link href="/oferta-educativa">Ver más <ArrowRight className="ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Un Enfoque Pedagógico Único</h2>
            <p className="mt-2 text-lg text-foreground/80">Inspirado en los mejores modelos para un desarrollo completo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Microscope size={32} />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Constructivismo</h3>
              <p className="text-foreground/80">Los estudiantes construyen su propio conocimiento a partir de sus experiencias.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Modelo Reggio Emilia</h3>
              <p className="text-foreground/80">El ambiente como tercer maestro, fomentando la creatividad y la curiosidad.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <Palette size={32} />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Formación en Valores</h3>
              <p className="text-foreground/80">Educamos el corazón y la mente con un valor destacado cada mes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
