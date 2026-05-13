"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="fade-up py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-violetaOscuro mb-12">
          Nuestros Servicios
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
          {/* Griferías */}
          <div className="flex-1 bg-gradient-to-br from-lila/50 to-violetaClaro/20 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/productos/logogriferia.png"
                  alt="Logo Griferías"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-violetaOscuro mb-2">Griferías</h3>
            <p className="text-gray-700">Amplia variedad de griferías para cocina y baño</p>
          </div>

          {/* Accesorios */}
          <div className="flex-1 bg-gradient-to-br from-lila/50 to-violetaClaro/20 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/productos/logoaccesorio.png"
                  alt="Logo Accesorios"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-violetaOscuro mb-2">Accesorios</h3>
            <p className="text-gray-700">Todo en accesorios para tu hogar</p>
          </div>

          {/* Sanitarios */}
          <div className="flex-1 bg-gradient-to-br from-lila/50 to-violetaClaro/20 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20 md:w-24 md:h-24">
                <Image
                  src="/productos/logosanitario.png"
                  alt="Logo Sanitarios"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-violetaOscuro mb-2">Sanitarios</h3>
            <p className="text-gray-700">Inodoros, bidets, lavatorios y más</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;