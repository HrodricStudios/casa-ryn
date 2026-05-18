"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Wallet } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar principal */}
      <div className={`bg-violetaClaro py-3 md:py-4 ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex justify-between items-center">
            {/* Logo clickable */}
            <button onClick={handleLogoClick} className="relative h-12 w-32 md:h-16 md:w-52 focus:outline-none">
              <Image src="/logo.png" alt="Casa RyN Logo" fill className="object-contain" priority />
            </button>

            {/* Menú hamburguesa en móvil, enlaces horizontales en desktop */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-2">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Enlaces desktop */}
            <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-xl font-semibold">
              <li><button onClick={() => handleLinkClick("servicios")} className="text-white hover:text-violetaOscuro">Servicios</button></li>
              <li><button onClick={() => handleLinkClick("productos")} className="text-white hover:text-violetaOscuro">Productos</button></li>
              <li><button onClick={() => handleLinkClick("quienes-somos")} className="text-white hover:text-violetaOscuro">Quiénes Somos</button></li>
              <li><button onClick={() => handleLinkClick("contacto")} className="text-white hover:text-violetaOscuro">Contacto</button></li>
            </ul>
          </div>

          {/* Menú móvil desplegable */}
          {menuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/30">
              <ul className="flex flex-col gap-3 text-center">
                <li><button onClick={() => handleLinkClick("servicios")} className="text-white text-lg py-2 hover:bg-violetaOscuro rounded-lg w-full">Servicios</button></li>
                <li><button onClick={() => handleLinkClick("productos")} className="text-white text-lg py-2 hover:bg-violetaOscuro rounded-lg w-full">Productos</button></li>
                <li><button onClick={() => handleLinkClick("quienes-somos")} className="text-white text-lg py-2 hover:bg-violetaOscuro rounded-lg w-full">Quiénes Somos</button></li>
                <li><button onClick={() => handleLinkClick("contacto")} className="text-white text-lg py-2 hover:bg-violetaOscuro rounded-lg w-full">Contacto</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Barra promocional (sin cambios) */}
      <div className="bg-violetaOscuro py-0.5 md:py-1 text-white text-xs md:text-sm font-medium overflow-hidden whitespace-nowrap">
        <div className="animate-marquee">
          {/* contenido del mensaje */}
          <span className="inline-flex items-center gap-1 mx-3">
            <Wallet size={14} className="inline" />
            <span>Todos los medios de pago</span>
            <span className="hidden md:inline mx-1">•</span>
            <span>4 y 6 cuotas <span className="font-bold text-yellow-200">SIN INTERÉS!!</span></span>
            <span className="hidden md:inline mx-1">•</span>
            <span>Todos los días con tu tarjeta de crédito Banco Provincia</span>
          </span>
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
  );
};

export default Navbar;