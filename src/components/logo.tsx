"use client"
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      
      {/* Logo modo claro */}
      <div className="w-100 h-100 rounded-full overflow-hidden dark:hidden">
        <Image
          src="/images/logo_light.png"
          alt="Logo claro"
          width={45}
          height={45}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Logo modo oscuro */}
      <div className="w-100 h-100 rounded-full overflow-hidden hidden dark:block">
        <Image
          src="/images/logo_dark.png"
          alt="Logo oscuro"
          width={45}
          height={45}
          className="object-cover w-full h-full"
          priority
        />
      </div>

    </div>
  );
}
