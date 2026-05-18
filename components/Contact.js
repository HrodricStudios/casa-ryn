"use client";
import { useEffect, useRef } from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
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
    <section id="contacto" ref={sectionRef} className="fade-up py-16 md:py-24 bg-gradient-to-b from-white to-lila/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-violetaOscuro mb-12">
          Contacto
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-violetaOscuro mb-6">Información</h3>
            <div className="space-y-5">
              {/* Teléfono unificado */}
              <div className="flex items-center gap-3">
                <Phone className="text-violetaClaro" size={24} />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-700">+54 2477 467749</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-violetaClaro" size={24} />
                <div>
                  <p className="font-semibold">Horarios de atención</p>
                  <p className="text-gray-700">Lun a Vie: 7:30 a 15:00 hs</p>
                  <p className="text-gray-700">Sábados: 8:00 a 12:00 hs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram className="text-violetaClaro" size={24} />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a
                    href="https://www.instagram.com/casa.ryn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violetaOscuro hover:underline break-all"
                  >
                    @casa.ryn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-violetaClaro" size={24} />
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-gray-700">Blvd. Florencio Sánchez 1090, Pergamino, Bs. As.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl h-80 md:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d106480.56568033837!2d-60.5882235!3d-33.8939827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b84badbdeef27d%3A0x3d58dac26035d7a2!2sCasa%20RyN%20S!5e0!3m2!1ses!2sar!4v1712697654321!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Casa RyN"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;