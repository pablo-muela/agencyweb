import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-6 max-w-7xl mx-auto text-center">
        {/* Ambient Fiery Glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[700px] h-[400px] bg-gradient-to-tr from-[#9d0208]/20 via-[#dc2f02]/15 to-[#ffba08]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#370617] border border-[#9d0208] text-[#ffba08] text-xs font-bold uppercase tracking-wider mb-8">
          <span>🔥 Open-Source Platform en GitHub</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-5xl mx-auto leading-tight">
          La Plataforma Open-Source para Agencias de <span className="text-fiery-gradient">Publicidad & Producción Audiovisual</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Diseñada para agencias creativas y productoras de contenido enfocadas en <strong className="text-[#ffba08]">Redes Sociales</strong>, <strong className="text-[#faa307]">Streaming</strong>, <strong className="text-[#f48c06]">Cine</strong> y <strong className="text-[#e85d04]">Televisión</strong>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/pablo-muela/agencyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl btn-fiery text-white font-bold shadow-xl shadow-[#dc2f02]/30 flex items-center gap-2"
          >
            <span>Explorar en GitHub</span>
            <span>↗</span>
          </a>
          <Link
            href="/services"
            className="px-7 py-3.5 rounded-xl glass-card text-gray-200 font-semibold hover:border-[#ffba08]/50 transition-all"
          >
            Ver Servicios Especializados
          </Link>
        </div>
      </section>

      {/* Animated Carousel Section */}
      <section className="px-6">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ffba08]">Producción & Medios Audiovisuales</h2>
          <p className="text-2xl font-extrabold text-white mt-1">Sectores de Cobertura Principal</p>
        </div>
        <Carousel />
      </section>

      {/* 4 Media Pillars Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Soluciones por Sector Creativo</h2>
          <p className="text-gray-400 text-sm mt-2">Herramientas y workflows de producción optimizados para la era digital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Social Media */}
          <div className="glass-card p-6 rounded-2xl border-t-2 border-t-[#ffba08]">
            <div className="w-12 h-12 rounded-xl bg-[#ffba08]/10 border border-[#ffba08]/30 flex items-center justify-center text-[#ffba08] text-2xl font-bold mb-4">
              📱
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Redes Sociales</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Campañas virales, gestión de activos en formato vertical (Reels, TikTok, Shorts) y analítica en tiempo real.
            </p>
          </div>

          {/* Streaming Platforms */}
          <div className="glass-card p-6 rounded-2xl border-t-2 border-t-[#f48c06]">
            <div className="w-12 h-12 rounded-xl bg-[#f48c06]/10 border border-[#f48c06]/30 flex items-center justify-center text-[#f48c06] text-2xl font-bold mb-4">
              🎬
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Plataformas de Streaming</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Contenido bajo demanda (VOD), codificación OTT, series originales y live-streaming multiseñal.
            </p>
          </div>

          {/* Film Production */}
          <div className="glass-card p-6 rounded-2xl border-t-2 border-t-[#e85d04]">
            <div className="w-12 h-12 rounded-xl bg-[#e85d04]/10 border border-[#e85d04]/30 flex items-center justify-center text-[#e85d04] text-2xl font-bold mb-4">
              🎥
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Producción de Cine</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Gestión de rodaje, corrección de color, VFX, masterización 4K/8K y pipelines de producción cinematográfica.
            </p>
          </div>

          {/* Television */}
          <div className="glass-card p-6 rounded-2xl border-t-2 border-t-[#dc2f02]">
            <div className="w-12 h-12 rounded-xl bg-[#dc2f02]/10 border border-[#dc2f02]/30 flex items-center justify-center text-[#dc2f02] text-2xl font-bold mb-4">
              📺
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Televisión Broadcast</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Formatos de emisión en vivo, estudios de televisión, transmisión por cable y señal satelital HD/UHD.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Open-Source Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-[#9d0208]/40 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 -bottom-0 w-1/3 bg-gradient-to-l from-[#e85d04]/10 to-transparent pointer-events-none" />
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#6a040f] text-[#ffba08] text-xs font-bold uppercase">
              Código Abierto en GitHub
            </span>
            <h2 className="text-3xl font-extrabold text-white">Licencia Open-Source para la Comunidad Creativa</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              AgencyWeb es completamente open-source. Puedes clonar el repositorio, extender la arquitectura de servicios o desplegarlo en tu propia infraestructura de forma gratuita.
            </p>
          </div>
          <a
            href="https://github.com/pablo-muela/agencyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#370617] hover:bg-[#6a040f] border border-[#f48c06]/40 text-[#ffba08] font-bold shadow-lg transition-all whitespace-nowrap"
          >
            Ver Repositorio GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pt-6">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#9d0208]/40">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white">Contacta con la Agencia</h2>
            <p className="text-gray-400 text-sm mt-2">¿Tienes una producción o proyecto audiovisual? Hablemos.</p>
          </div>

          <form action="/api/contact" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Nombre / Productora</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#03071e]/90 border border-[#6a040f] text-white focus:outline-none focus:border-[#ffba08] transition-colors"
                  placeholder="Ej: Studio Media Corp"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Email Profesional</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#03071e]/90 border border-[#6a040f] text-white focus:outline-none focus:border-[#ffba08] transition-colors"
                  placeholder="contacto@productora.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Requerimientos del Proyecto</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#03071e]/90 border border-[#6a040f] text-white focus:outline-none focus:border-[#ffba08] transition-colors resize-none"
                placeholder="Describe tu proyecto (Streaming, Cine, TV, Redes Sociales)..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl btn-fiery text-white font-bold shadow-lg shadow-[#dc2f02]/30 transition-all text-base"
            >
              Enviar Mensaje de Cotización
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
