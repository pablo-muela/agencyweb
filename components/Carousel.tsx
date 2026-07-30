'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Redes Sociales & Plataformas de Streaming',
    subtitle: 'Producción de contenido dinámico de alto impacto para TikTok, YouTube, Netflix y Twitch.',
    image: '/images/carousel_social_streaming.png',
    tag: 'Social & Streaming',
  },
  {
    id: 2,
    title: 'Producción Cinematográfica & Film Studio',
    subtitle: 'Rodaje, edición de grado cinematográfico, postproducción y VFX para la industria del cine.',
    image: '/images/carousel_film_production.png',
    tag: 'Film & Cinema',
  },
  {
    id: 3,
    title: 'Televisión Broadcast & Estudios de Transmisión',
    subtitle: 'Infraestructura de emisión en vivo, shows de TV y transmisiones multi-cámara de alta resolución.',
    image: '/images/carousel_tv_broadcast.png',
    tag: 'TV & Broadcast',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden glass-panel border border-[#9d0208]/40 shadow-2xl shadow-[#370617]">
      {/* Slide Container */}
      <div className="relative h-[380px] sm:h-[480px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />

            {/* Gradient Overlay matching coolors palette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03071e] via-[#03071e]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03071e]/90 via-[#370617]/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 space-y-4 max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#dc2f02]/20 border border-[#e85d04]/40 text-[#ffba08] text-xs font-bold uppercase tracking-wider">
                {slide.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {slide.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#03071e]/80 hover:bg-[#dc2f02] border border-[#f48c06]/30 text-white flex items-center justify-center transition-all shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#03071e]/80 hover:bg-[#dc2f02] border border-[#f48c06]/30 text-white flex items-center justify-center transition-all shadow-lg"
      >
        ›
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-8 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-8 bg-[#ffba08]' : 'w-2.5 bg-gray-500/50 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
