import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto text-center flex min-h-[70vh] flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[350px] bg-[var(--color-brand-primary)]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <span>🚀 Transformación Digital de Alto Nivel</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Agencia Digital <span className="text-[var(--color-brand-primary)]">AgencyWeb</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-normal">
          Soluciones web de alto rendimiento construidas con Next.js, Tailwind CSS v4 y desplegadas en Netlify.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/services"
            className="rounded-lg bg-[var(--color-brand-primary)] px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:opacity-90 shadow-blue-500/25"
          >
            Ver Servicios
          </Link>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-lg glass-card text-gray-200 font-medium transition-all"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[var(--color-brand-primary)] font-bold mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Velocidad Extrema</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquitecturas SSR/SSG integradas con CDN global para tiempos de respuesta menores a 100ms.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-6">
              🔒
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Seguridad Zero-Trust</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Implementación de mejores prácticas de DevSecOps, cabeceras estrictas e infraestructura aislada.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-6">
              ☁️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Serverless Ready</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Despliegues automatizados en Netlify con Funciones Serverless eficientes y costo-efectivas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pt-12">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">¿Tienes un proyecto en mente?</h2>
            <p className="text-gray-400 text-sm mt-2">Completa el formulario y responderemos en menos de 24 horas.</p>
          </div>

          <form action="/api/contact" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-700/80 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-700/80 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 border border-gray-700/80 text-white focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors resize-none"
                placeholder="Detalles sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[var(--color-brand-primary)] hover:opacity-90 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
