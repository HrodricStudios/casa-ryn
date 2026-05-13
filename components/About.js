"use client";
import { useEffect, useRef } from "react";

const About = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quienes-somos" ref={sectionRef} className="fade-up py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-violetaOscuro mb-12">
          Quiénes Somos
        </h2>

        {/* Contenedor flex con gap de 3mm y alineación superior */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-[3mm]">
          {/* Video: sin transform, sin márgenes adicionales */}
          <div className="flex justify-center md:block">
            <video
              src="/videopromo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[360px] md:max-w-[400px] rounded-2xl shadow-xl"
            />
          </div>

          {/* Texto: contenedor con el mismo ancho que el video y altura similar */}
          <div className="md:max-w-[400px] w-full bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md flex flex-col justify-center">
            <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">
              En <span className="font-bold text-violetaOscuro">Casa RyN</span> somos una nueva empresa familiar con experiencia en el rubro de la grifería y sanitarios. 
              Nos apasiona ofrecer productos de la más alta calidad, combinando diseño, funcionalidad y durabilidad.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed mt-4">
              Nuestro compromiso es brindar la mejor atención personalizada, asesorando a cada cliente para encontrar la solución perfecta para su hogar o proyecto.
              Trabajamos con las mejores marcas del mercado para garantizar tu satisfacción.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-12 h-1 bg-violetaClaro rounded-full"></div>
              <div className="w-6 h-1 bg-lila rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;