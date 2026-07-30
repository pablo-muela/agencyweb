import Link from 'next/link';

export const metadata = {
  title: 'Servicios de Producción | AgencyWeb',
  description: 'Servicios de producción audiovisual para Redes Sociales, Streaming, Cine y Televisión.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Redes Sociales & Formatos Cortos',
      description: 'Estrategias de producción acelerada para TikTok, Instagram Reels y YouTube Shorts con optimización de hooks e interacciones.',
      tags: ['TikTok', 'Instagram Reels', 'Shorts', 'Analytics'],
      icon: '📱',
      accent: 'border-[#ffba08]',
    },
    {
      title: 'Plataformas de Streaming (OTT/VOD)',
      description: 'Producción de contenido original, series web, documentales y transmisiones en vivo multicanal para plataformas OTT.',
      tags: ['Netflix', 'Twitch', 'VOD', 'Live Broadcast'],
      icon: '🎬',
      accent: 'border-[#f48c06]',
    },
    {
      title: 'Producción Cinematográfica',
      description: 'Dirección de fotografía, corrección de color Davinci Resolve, efectos visuales (VFX) y masterización DCP para cine.',
      tags: ['Cinema 4K/8K', 'VFX', 'Color Grading', 'DCP Master'],
      icon: '🎥',
      accent: 'border-[#e85d04]',
    },
    {
      title: 'Televisión & Broadcast Studio',
      description: 'Producción de programas de televisión, señal en directo, teleprompter, escenografía virtual y transmisión satelital.',
      tags: ['TV Shows', 'Satellite Broadcast', 'Live News', 'Full HD/4K'],
      icon: '📺',
      accent: 'border-[#dc2f02]',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 rounded-full bg-[#370617] text-[#ffba08] border border-[#6a040f] text-xs font-bold uppercase tracking-wider">
          Servicios Especializados
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Servicios de Producción Audiovisual</h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Soluciones de alta calidad para agencias de publicidad, estudios de cine, cadenas de TV y creadores de contenido.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className={`glass-card p-8 rounded-2xl flex flex-col justify-between border-t-2 ${service.accent}`}>
            <div>
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-3 py-1 rounded-md bg-[#370617] border border-[#6a040f] text-[#ffba08] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-10 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border border-[#9d0208]/40">
        <h2 className="text-2xl font-bold text-white">¿Quieres integrar esta plataforma en tu productora?</h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm">
          AgencyWeb es un proyecto open-source alojado en GitHub. Puedes clonar el repositorio o contactar para consultoría personalizada.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-xl btn-fiery text-white font-bold shadow-lg shadow-[#dc2f02]/30 transition-all"
          >
            Iniciar Proyecto
          </Link>
          <a
            href="https://github.com/pablo-muela/agencyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl glass-card text-[#ffba08] font-bold transition-all"
          >
            Ver GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
