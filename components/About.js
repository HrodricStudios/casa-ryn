"use client";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // aparece cuando esté al 20% visible
    );

    const elements = [videoRef.current, text1Ref.current, text2Ref.current, text3Ref.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="quienes-somos" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-violetaOscuro mb-12">
          Quiénes Somos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Video con animación individual */}
          <div
            ref={videoRef}
            className="fade-up flex justify-end md:sticky md:top-24"
          >
            <video
              src="/videopromo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[360px] md:max-w-[400px] rounded-2xl shadow-xl"
            />
          </div>

          {/* Columna de textos con animaciones individuales */}
          <div className="max-w-[360px] md:max-w-[400px] space-y-12">
            {/* Bloque 1 */}
            <div ref={text1Ref} className="fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-violetaOscuro mb-4 font-montserrat">
                Más de 20 años construyendo realidades
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                La historia de nuestra empresa se escribe a través del esfuerzo familiar y la pasión por el trabajo bien hecho. Nacimos hace más de dos décadas bajo el nombre de <span className="font-semibold text-violetaOscuro">RyN Construcciones</span>, consolidándonos como una sociedad pequeña, unida y orientada a dar respuestas sólidas en el mercado. El pilar fundamental de nuestro equipo cuenta con más de 30 años de trayectoria activa en el sector, una experiencia que nos ha permitido afrontar con éxito desde complejos proyectos de construcción rural hasta el diseño y ejecución de viviendas unifamiliares. Cada obra a lo largo de este tiempo ha sido un desafío que aceptamos con responsabilidad, permitiéndonos aprender, innovar y perfeccionar nuestras técnicas.
              </p>
            </div>

            {/* Bloque 2 */}
            <div ref={text2Ref} className="fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-violetaOscuro mb-4 font-montserrat">
                La evolución natural: <span className="text-violetaClaro">Casa RyN</span>
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Con el conocimiento adquirido tras tantos años pisando las obras y entendiendo las necesidades reales de cada estructura, en febrero de 2026 decidimos dar un paso estratégico hacia adelante. Así nació <span className="font-semibold text-violetaOscuro">Casa RyN</span>, una extensión natural de nuestra constructora que mantiene la misma esencia, pero con una identidad propia y un propósito claro: ofrecer un punto de encuentro físico y de venta directa al público. Elegimos incorporar la palabra "Casa" porque representa el destino final de nuestro trabajo y el espacio donde queremos recibirte. En este nuevo local, ponemos a tu disposición toda nuestra experiencia técnica especializada en el sector sanitarista, ofreciendo una línea completa de sanitarios, griferías y soluciones específicas tanto para la etapa inicial de una obra gruesa como para los detalles finales del hogar.
              </p>
            </div>

            {/* Bloque 3 */}
            <div ref={text3Ref} className="fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-violetaOscuro mb-4 font-montserrat">
                Nuestro Compromiso
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                No somos simplemente un comercio de materiales; somos constructores que asesoran a otros constructores, familias y profesionales. Trabajamos día a día para garantizar que cada cliente encuentre el respaldo técnico, la calidad de producto y la atención personalizada que un proyecto importante merece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;