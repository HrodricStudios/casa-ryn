"use client";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
  { id: 1, src: "/productos/combo1.png", alt: "Combo sanitario" },
  { id: 2, src: "/productos/tanque1.png", alt: "Tanque de cisterna eficiente" },
  { id: 3, src: "/productos/combo3.png", alt: "Desague lineal" },
  { id: 4, src: "/productos/ducha1.png", alt: "Ducha columna moderna" },
  { id: 5, src: "/productos/combo2.png", alt: "Combo sanitario completo" },
  { id: 6, src: "/productos/tanque2.png", alt: "Tanque de polietileno" },
  { id: 7, src: "/productos/mono1.png", alt: "Monocomando de alta calidad" },
  { id: 8, src: "/productos/cani1.png", alt: "Bidet monocomando" },
];

const ProductsCarousel = () => {
  const sectionRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="productos" ref={sectionRef} className="fade-up py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-violetaOscuro mb-12">
          Nuestros Productos
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] relative rounded-xl overflow-hidden shadow-lg group bg-white border-2 border-lila"
                >
                  <div className="relative w-full pt-[75%]">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-violetaOscuro/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white font-semibold text-lg">{product.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/90 hover:bg-white text-violetaOscuro p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/90 hover:bg-white text-violetaOscuro p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all z-10"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;