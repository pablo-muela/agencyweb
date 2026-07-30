import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgencyWeb | Next-Gen Digital Solutions',
  description: 'High-performance web applications, cloud architecture, and custom digital software development.',
  keywords: ['Web Development', 'Next.js', 'Cloud Solutions', 'Digital Agency', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen flex flex-col justify-between bg-[#090d16] text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
        <header className="sticky top-0 z-50 glass-panel border-b border-gray-800/60">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 text-xl font-bold tracking-tight">
              <span className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-indigo-500/30">
                A
              </span>
              <span className="text-white">Agency<span className="text-indigo-400">Web</span></span>
            </a>
            <div className="flex items-center space-x-8 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-indigo-400 transition-colors">Inicio</a>
              <a href="/services" className="hover:text-indigo-400 transition-colors">Servicios</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-md shadow-indigo-600/20">
                Contacto
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-gray-800/80 bg-[#060910] text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <span className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                A
              </span>
              <span className="text-gray-200 font-semibold text-sm">AgencyWeb</span>
            </div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AgencyWeb. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <a href="/" className="hover:text-indigo-400 transition-colors">Términos</a>
              <a href="/" className="hover:text-indigo-400 transition-colors">Privacidad</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
