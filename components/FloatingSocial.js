"use client";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp con nuevo número */}
      <a
        href="https://wa.me/542477467749?text=Hola%20Casa%20RyN,%20me%20gustaría%20solicitar%20un%20presupuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300 animate-heartbeat"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
      
      {/* Instagram (sin cambios) */}
      <a
        href="https://www.instagram.com/casa.ryn/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300 animate-heartbeat"
        aria-label="Instagram"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
};

export default FloatingSocial;