import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, User, Users, Heart, ShieldCheck, Award } from 'lucide-react';

export default function ComunidadPage() {
  const programs = [
    {
      icon: Award,
      title: "Formación Docente Continua",
      description: "Capacitamos constantemente a nuestro equipo para asegurar una educación de vanguardia, alineada con las mejores prácticas pedagógicas."
    },
    {
      icon: Heart,
      title: "Educación en Valores",
      description: "Nuestro programa insignia que integra la vivencia de un valor diferente cada mes en todas las actividades académicas y extracurriculares."
    },
    {
      icon: ShieldCheck,
      title: "Bienestar Estudiantil",
      description: "Ofrecemos acompañamiento psicoafectivo y espiritual para garantizar el desarrollo saludable y feliz de cada uno de nuestros estudiantes."
    }
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Nuestra Comunidad Educativa
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Una familia unida por el amor a la educación y el servicio.
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-accent">Perfiles de Nuestra Comunidad</h2>
            <p className="mt-2 text-lg text-foreground/80">Cada miembro es un pilar fundamental de nuestro proyecto educativo.</p>
          </div>
          <Tabs defaultValue="student" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="student"><GraduationCap className="mr-2"/> Estudiante</TabsTrigger>
              <TabsTrigger value="teacher"><User className="mr-2"/> Docente</TabsTrigger>
              <TabsTrigger value="family"><Users className="mr-2"/> Familia</TabsTrigger>
              <TabsTrigger value="admin"><User className="mr-2"/> Personal</TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Perfil del Estudiante Carrusel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-foreground/80">
                  <p>Buscamos formar niños y niñas felices, curiosos, creativos y respetuosos, capaces de construir su propio conocimiento. Un estudiante Carruselista se caracteriza por su alegría, su amor por el aprendizaje, su sensibilidad social y su creciente autonomía. Es un agente activo en su proceso formativo, que valora la amistad, respeta la diversidad y cultiva una relación personal con Dios.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teacher" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Perfil del Docente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-foreground/80">
                  <p>Nuestros docentes son profesionales apasionados, comprometidos y en constante formación. Más que transmisores de conocimiento, son mediadores del aprendizaje, guías afectuosos y modelos de los valores que promovemos. Se caracterizan por su vocación de servicio, su capacidad de innovación, su trabajo en equipo y su fe en Dios.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="family" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Perfil de la Familia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-foreground/80">
                  <p>La familia es nuestro principal aliado. Esperamos padres y acudientes comprometidos con el proyecto educativo, que participen activamente en la vida escolar, refuercen en casa los valores y hábitos trabajados en el colegio. Una familia Carruselista dialoga, acompaña y apoya el proceso formativo de sus hijos en un ambiente de amor y confianza.</p>
                </CardContent>
              </Card>
            </TabsContent>
             <TabsContent value="admin" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Perfil del Personal Administrativo y de Servicios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-foreground/80">
                  <p>Nuestro personal administrativo y de servicios es fundamental para el buen funcionamiento de la institución. Se distinguen por su amabilidad, eficiencia, espíritu de servicio y sentido de pertenencia. Contribuyen a crear un ambiente seguro, organizado y acogedor para toda la comunidad educativa, reflejando nuestros valores en cada una de sus labores.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent">Programas Institucionales</h2>
            <p className="mt-2 text-lg text-foreground/80">Iniciativas que fortalecen nuestro proyecto educativo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="text-center">
                 <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <program.icon size={32} />
                  </div>
                  <CardTitle className="font-headline">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
