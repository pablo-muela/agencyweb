import Link from 'next/link';

export const metadata = {
  title: 'Servicios | AgencyWeb',
  description: 'Servicios de desarrollo web, consultoría cloud y diseño de infraestructura digital.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Desarrollo Web Full Stack',
      description: 'Construcción de aplicaciones web robustas con Next.js, React y TypeScript enfocadas en alto rendimiento.',
      tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Infraestructura Cloud & DevOps',
      description: 'Diseño e implementación de pipelines CI/CD, automatización IaC con Terraform y despliegues Jamstack en Netlify/AWS.',
      tags: ['Netlify', 'Docker', 'CI/CD', 'Terraform'],
    },
    {
      title: 'APIs & Serverless Microservices',
      description: 'Creación de endpoints ultra-rápidos y escalables utilizando arquitectura Serverless y funciones Edge.',
      tags: ['REST', 'GraphQL', 'Serverless', 'Edge Functions'],
    },
    {
      title: 'Optimización de Performance & SEO',
      description: 'Auditoría y optimización de Core Web Vitals para maximizar la velocidad de carga y el posicionamiento en buscadores.',
      tags: ['Core Web Vitals', 'SEO Technical', 'Web Vitals'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-white">Nuestros Servicios</h1>
        <p className="text-gray-400 text-lg">
          Soluciones tecnológicas a medida diseñadas para hacer crecer tu plataforma digital con estándares de nivel enterprise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-10 rounded-3xl text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white">¿Listo para impulsar tu producto digital?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Contacta con nuestro equipo técnico para evaluar los requerimientos de tu infraestructura o desarrollo web.
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all"
        >
          Solicitar Cotización
        </Link>
      </div>
    </div>
  );
}
