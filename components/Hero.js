"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

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
      className="fade-up relative min-h-[90vh] md:min-h-[90vh] flex items-start justify-start overflow-hidden"
    >
      {/* Fondo con ajuste para mobile */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nueva2.jpeg"
          alt="Fondo Casa RyN"
          fill
          className="object-cover object-center md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Contenido desplazado hacia abajo (el doble en móvil) */}
      <div className="container mx-auto px-4 relative z-10 w-full mt-48 md:mt-24 lg:mt-32">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight font-montserrat bg-gradient-to-r from-white via-violetaClaro to-white bg-clip-text text-transparent animate-shimmer">
            CASA RyN
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-3 md:mt-4 font-oswald">
            Te esperamos con los mejores productos
          </p>

          <div className="mt-8 md:mt-10 animate-float">
            <a
              href="https://wa.me/542477619534?text=Hola%20Casa%20RyN,%20me%20gustaría%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-violetaClaro hover:bg-violetaOscuro text-white font-bold py-2.5 px-5 md:py-3 md:px-6 rounded-full text-sm md:text-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl md:text-2xl">📋</span>
              <span className="font-oswald">Pedir Presupuesto</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;