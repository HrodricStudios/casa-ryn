"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const Hero = () => {
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
    <section
      ref={sectionRef}
      className="fade-up relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/frente.png"
          alt="Fondo Casa RyN"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Contenedor del texto con padding izquierdo para alinear con el final del logo */}
          <div className="pl-0 md:pl-52">
            <div className="border border-white/40 bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl inline-block">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-violetaOscuro 
                           [text-shadow:_2px_2px_0_white,_4px_4px_0_white,_6px_6px_0_white,_8px_8px_0_white] 
                           whitespace-nowrap tracking-tight leading-tight"
              >
                CASA RyN
              </h1>
              <div className="mt-6">
                <p
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 bg-white/70 inline-block 
                             px-6 py-2 rounded-full backdrop-blur-sm"
                >
                  "Te esperamos con los mejores productos"
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-yellow-100 border border-yellow-400 rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
                <span className="font-bold text-yellow-700 text-sm md:text-base whitespace-nowrap">
                  ¡Cumplimos 3 meses!
                </span>
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
              </div>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="md:mt-16">
            <a
              href="https://wa.me/542477619534?text=Hola%20Casa%20RyN,%20me%20gustaría%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-violetaClaro text-white font-semibold text-xs md:text-sm 
                        border-2 border-violetaClaro hover:border-white
                        shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-violetaOscuro
                        flex flex-col items-center justify-center gap-1 animate-heartbeat transform rotate-3 hover:rotate-6"
            >
              <span className="text-xl md:text-2xl">📋</span>
              <span className="text-center px-1 leading-tight">Pedir Presupuesto</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;