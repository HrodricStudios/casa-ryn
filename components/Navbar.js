"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Wallet } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false); // ocultar al bajar
      } else {
        setIsVisible(true);  // mostrar al subir
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar principal (color violeta claro) */}
      <nav className={`bg-violetaClaro py-3 md:py-4 ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo clickable */}
            <button onClick={handleLogoClick} className="relative h-12 md:h-16 w-40 md:w-52 focus:outline-none">
              <Image src="/logo.png" alt="Casa RyN Logo" fill className="object-contain" priority />
            </button>

            {/* Enlaces */}
            <ul className="flex gap-6 md:gap-10 text-base md:text-xl font-semibold">
              <li>
                <button onClick={() => handleLinkClick("servicios")} className="text-white hover:text-violetaOscuro transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("productos")} className="text-white hover:text-violetaOscuro transition-colors">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("quienes-somos")} className="text-white hover:text-violetaOscuro transition-colors">
                  Quienes Somos
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("contacto")} className="text-white hover:text-violetaOscuro transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Barra de promociones (violeta más intenso) */}
      <div className="bg-violetaOscuro py-2 md:py-3 text-white text-sm md:text-base font-medium">
        {/* Barra de promociones más fina (1/3 de altura) */}
        <div className="bg-violetaOscuro py-0.5 md:py-1 text-white text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap">
            <div className="animate-marquee">
                <span className="inline-flex items-center gap-1 mx-3">
                <Wallet size={14} className="inline" />
                <span>Todos los medios de pago</span>
                <span className="hidden md:inline mx-1">•</span>
                <span>4 y 6 cuotas <span className="font-bold text-yellow-200">SIN INTERÉS!!</span></span>
                <span className="hidden md:inline mx-1">•</span>
                <span>Todos los días con tu tarjeta de crédito Banco Provincia</span>
                </span>
                {/* Duplicado para efecto continuo */}
                <span className="inline-flex items-center gap-1 mx-3">
                <Wallet size={14} className="inline" />
                <span>Todos los medios de pago</span>
                <span className="hidden md:inline mx-1">•</span>
                <span>4 y 6 cuotas <span className="font-bold text-yellow-200">SIN INTERÉS!!</span></span>
                <span className="hidden md:inline mx-1">•</span>
                <span>Todos los días con tu tarjeta de crédito Banco Provincia</span>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;