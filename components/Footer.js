"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-violetaOscuro text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Casa RyN. Todos los derechos reservados.</p>
        <p className="text-sm text-white/80 mt-2">
          Desarrollado por <a href="#" className="hover:text-lila transition-colors">Hrodric Studios</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;