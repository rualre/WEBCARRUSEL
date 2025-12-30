import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Globe, Heart, Users, Leaf, Microscope, BrainCircuit, PenTool, Bot, MessageSquare, Bone } from 'lucide-react';

export default function OfertaEducativaPage() {
  const preschoolImage = PlaceHolderImages.find(img => img.id === 'preschool-kids');
  const elementaryImage = PlaceHolderImages.find(img => img.id === 'elementary-kids');
  
  const dimensions = [
    { icon: BrainCircuit, title: 'Dimensión Cognitiva', description: 'Desarrollo del pensamiento lógico, la resolución de problemas y la curiosidad intelectual.' },
    { icon: Heart, title: 'Dimensión Ética, Actitudes y Valores', description: 'Formación del carácter, el respeto, la responsabilidad y la conciencia moral.' },
    { icon: PenTool, title: 'Dimensión Estética', description: 'Fomento de la sensibilidad, la apreciación artística y la expresión creativa.' },
    { icon: Bone, title: 'Dimensión Corporal', description: 'Conocimiento y cuidado del propio cuerpo, y desarrollo de habilidades motrices.' },
    { icon: MessageSquare, title: 'Dimensión Comunicativa', description: 'Desarrollo de habilidades para expresar ideas, sentimientos y pensamientos oralmente y por escrito.' },
    { icon: Users, title: 'Dimensión Socio-afectiva', description: 'Construcción de la identidad, autoestima y habilidades para la interacción social.' },
  ];

  const projects = [
    { icon: Leaf, title: 'Educación Ambiental', description: 'Proyectos para cultivar el amor y respeto por la creación de Dios, nuestra "casa común".' },
    { icon: Users, title: 'Convivencia y Paz', description: 'Estrategias para promover un ambiente escolar armónico, basado en el diálogo y el respeto mutuo.' },
    { icon: Heart, title: 'Inclusión y Diversidad', description: 'Programas que aseguran que cada estudiante se sienta valorado, respetado y parte de nuestra familia.' },
    { icon: Bot, title: 'Tecnología con Propósito', description: 'Integración de herramientas tecnológicas para potenciar el aprendizaje y preparar a los estudiantes para el futuro.' },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Nuestra Oferta Educativa
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Un camino de aprendizaje y descubrimiento desde los primeros pasos.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="font-headline text-3xl font-bold text-accent mb-8 text-center">Niveles Educativos</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="flex flex-col">
              {preschoolImage && <Image src={preschoolImage.imageUrl} alt="Preescolar" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg" data-ai-hint={preschoolImage.imageHint} />}
              <CardHeader><CardTitle className="font-headline text-2xl">Preescolar</CardTitle></CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">En esta etapa fundamental, nos centramos en el desarrollo de la autonomía, la creatividad y la socialización a través de un enfoque lúdico y experiencial. Inspirados en el modelo Reggio Emilia, consideramos el ambiente como el tercer maestro, creando espacios que invitan a explorar, descubrir y maravillarse.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              {elementaryImage && <Image src={elementaryImage.imageUrl} alt="Básica Primaria" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg" data-ai-hint={elementaryImage.imageHint} />}
              <CardHeader><CardTitle className="font-headline text-2xl">Básica Primaria</CardTitle></CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">Consolidamos las bases del conocimiento y fomentamos el pensamiento crítico. A través de un enfoque constructivista, los estudiantes son protagonistas de su aprendizaje, desarrollando competencias académicas y habilidades para la vida en un entorno de apoyo y colaboración que atiende a su desarrollo integral.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-accent">Dimensiones del Desarrollo</h2>
            <p className="mt-2 text-lg text-foreground/80">Formamos seres humanos completos en todas sus facetas.</p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {dimensions.map((dim, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-headline text-lg">
                  <dim.icon className="mr-3 h-5 w-5 text-primary" /> {dim.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-10">
                  {dim.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent">Proyectos Pedagógicos Destacados</h2>
            <p className="mt-2 text-lg text-foreground/80">Aprendizaje que trasciende el aula.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="text-center bg-secondary/30">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <project.icon size={32} />
                  </div>
                  <CardTitle className="font-headline">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
