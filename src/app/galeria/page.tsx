"use client"
import Image from 'next/image';
import { useState } from 'react';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function GaleriaPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary">
            Galería de Momentos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Un vistazo a la vida, el aprendizaje y la alegría en el Centro Educativo Carrusel.
          </p>
        </div>

        <Dialog>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <DialogTrigger asChild key={image.id} onClick={() => setSelectedImage(image)}>
                <Card className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>

          {selectedImage && (
            <DialogContent className="max-w-3xl p-2">
              {/* Título requerido por Radix (pero oculto visualmente) */}
              <VisuallyHidden>
                <DialogHeader>
                  <DialogTitle>Vista de imagen</DialogTitle>
                </DialogHeader>
              </VisuallyHidden>

              <Image
                src={selectedImage.imageUrl.replace('/600/400', '/1200/800')}
                alt={selectedImage.description}
                width={1200}
                height={800}
                className="rounded-lg w-full h-auto"
                data-ai-hint={selectedImage.imageHint}
              />
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
}
