import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgencyWeb | Open-Source Platform for Media & Production Agencies',
  description: 'Open-source application designed for advertising and content creation agencies targeting Social Media, Streaming Platforms, Film Production, and Television.',
  keywords: ['Open-Source', 'Advertising Agency', 'Content Creation', 'Film Production', 'Streaming Platforms', 'Television', 'Social Media', 'Next.js'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen flex flex-col justify-between bg-[#03071e] text-gray-100 antialiased selection:bg-[#dc2f02] selection:text-white">
        <header className="sticky top-0 z-50 glass-panel border-b border-[#370617]">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 text-xl font-bold tracking-tight">
              <span className="h-10 w-10 rounded-xl bg-fiery-gradient flex items-center justify-center text-white font-black shadow-lg shadow-[#dc2f02]/30">
                A
              </span>
              <span className="text-white">Agency<span className="text-[#ffba08]">Web</span></span>
              <span className="ml-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#370617] text-[#ffba08] border border-[#6a040f]">
                Open-Source
              </span>
            </a>
            <div className="flex items-center space-x-8 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-[#ffba08] transition-colors">Inicio</a>
              <a href="/services" className="hover:text-[#ffba08] transition-colors">Servicios</a>
              <a href="https://github.com/pablo-muela/agencyweb" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffba08] transition-colors flex items-center gap-1.5">
                <span>GitHub</span>
                <span className="text-xs">↗</span>
              </a>
              <a href="#contact" className="px-5 py-2.5 rounded-xl btn-fiery text-white font-semibold shadow-md shadow-[#dc2f02]/20">
                Contacto
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-[#370617] bg-[#03071e] text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <span className="h-8 w-8 rounded-lg bg-fiery-gradient flex items-center justify-center text-white font-bold text-xs">
                A
              </span>
              <span className="text-gray-200 font-semibold text-sm">AgencyWeb (Open-Source)</span>
            </div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AgencyWeb. Plataforma Open-Source para Agencias de Publicidad y Producción Audiovisual.
            </p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <a href="https://github.com/pablo-muela/agencyweb" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffba08] transition-colors">Repository</a>
              <a href="/services" className="hover:text-[#ffba08] transition-colors">Servicios</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
