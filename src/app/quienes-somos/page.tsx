import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, Target, Users } from 'lucide-react';

export default function QuienesSomosPage() {
  const historyImage = PlaceHolderImages.find(img => img.id === 'about-us-history');
  const team = [
    { name: 'Directora Académica', imageId: 'team-director' },
    { name: 'Docente Titular', imageId: 'team-teacher-1' },
    { name: 'Docente de Apoyo', imageId: 'team-teacher-2' },
    { name: 'Coordinadora de Bienestar', imageId: 'team-teacher-3' },
  ];
  const values = ['Alegría', 'Respeto', 'Misericordia', 'Amor', 'Solidaridad', 'Honestidad', 'Gratitud', 'Paz'];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Nuestra Esencia
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Más de 25 años formando corazones y mentes bajo un mismo lema: "El amor al prójimo es paralelo al amor a Dios."
          </p>
        </div>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold text-accent mb-4">Nuestra Historia</h2>
              <p className="text-foreground/1000 mb-4 text-lg">
                 El Centro Educativo Carrusel nació en el municipio de Juan de Acosta, Atlántico, en el año 1996, motivado por el deseo profundo de brindar una educación de calidad, humana y cristiana a los niños y niñas de la región. <p></p>
                 <p></p>
                 Su fundadora y directora, Milagros Coronell Arteta, visualizó la institución como un espacio donde el amor, la fe, la disciplina y el aprendizaje se unieran para formar seres humanos íntegros, capaces de transformar su entorno.

                 <p></p> 
                 Desde sus inicios, el colegio se ha destacado por ser un lugar cálido, cercano y familiar, donde cada niño es acompañado de manera personal y afectuosa. <p></p>
                 <p></p> 
                 Aunque comenzó como una institución pequeña, su compromiso con la excelencia educativa y su enfoque en valores le permitieron crecer rápidamente y ganarse el respeto de la comunidad.

                 <p></p> 
                 Un acontecimiento importante en su trayectoria fue la graduación de la primera promoción en el año 2001, un logro que consolidó el camino académico del Colegio Carrusel y marcó el inicio de muchas generaciones formadas en principios, respeto y responsabilidad.
                 <p></p>

                 Con el paso del tiempo, el colegio ha fortalecido sus programas pedagógicos, ha ampliado sus espacios de formación y ha consolidado un equipo humano profesional compuesto por docentes licenciados, normalistas, personal de apoyo, psicólogos y especialistas en inclusión. <p></p>
                 <p></p>
                 Además, ha trabajado intensamente para atender a estudiantes con aprendizajes diferenciados, promoviendo una educación verdaderamente inclusiva y respetuosa de las diferencias.
                 <p></p>
                 Hoy, el Centro Educativo Carrusel sigue creciendo desde su identidad católica, su compromiso social y su vocación pedagógica. 
                 <p></p> 
                 Su modelo educativo, inspirado en el constructivismo y en enfoques como Reggio Emilia, fomenta el aprendizaje significativo, la creatividad, la autonomía y el trabajo colaborativo.
                

                <h1 className="font-headline text-3xl font-bold text-accent mb-4" ></h1>


                 <h1 className="font-headline text-3xl font-bold text-accent mb-4" >
                 UN ORGULLO DE LA INSTITUCION
                 </h1>

                 La historia del colegio también la cuentan sus estudiantes y exalumnos. <p></p>
                 <p></p>
                 Entre ellos, uno de los más grandes orgullos es un joven que se formó en las aulas de Carrusel, cursó su primaria en la institución, se graduó con honor y actualmente está culminando sus últimos semestres como Ingeniero de Sistemas.<p></p>
                 Con gratitud hacia su colegio y como muestra del impacto que Carrusel dejó en él, este exalumno fue el encargado de diseñar y desarrollar la página web oficial del Centro Educativo Carrusel, aportando sus conocimientos para modernizar la institución y fortalecer su presencia digital.

                Este logro refleja no solo la calidad humana y académica con la que se forman los estudiantes, sino también el vínculo emocional que conservan con su colegio, al que reconocen como el lugar donde se sembraron sus bases y donde comenzaron sus sueños.              
                
                </p>
             
            </div>
            {historyImage && (
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={historyImage.imageUrl}
                  alt={historyImage.description}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={historyImage.imageHint}
                />
              </div>
            )}
          </div>
        </section>

        <section className="mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Target className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Brindar una educación integral basada en valores que promueva el desarrollo académico, emocional y social de nuestros estudiantes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Sparkles className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Ser una institución líder reconocida por su excelencia educativa y su profundo impacto en la formación de ciudadanos compasivos y competentes.</p>
            </CardContent>
          </Card>
          
         <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="flex-row items-center gap-4">
              <Heart className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Filosofía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Creemos que cada niño es un don de Dios, con un potencial único que debe ser cultivado con amor, paciencia y sabiduría.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20 text-center">
            <h2 className="font-headline text-3xl font-bold text-accent mb-8">Valores Institucionales</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {values.map(value => (
                    <div key={value} className="bg-primary/10 text-primary font-semibold py-2 px-4 rounded-full shadow-sm">
                        {value}
                    </div>
                ))}
            </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent">Nuestro Equipo Directivo y Docente</h2>
            <p className="mt-2 text-lg text-foreground/80">Profesionales apasionados por la educación.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => {
              const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
              return (
                <Card key={member.name} className="text-center overflow-hidden">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover object-top"
                      data-ai-hint={memberImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
