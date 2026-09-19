import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface NicheData {
  title: string;
  description: string;
  keywords: string[];
  sampleBullet: string;
}

const NICHES_DB: Record<string, NicheData> = {
  'regulacion-ia': {
    title: 'Resumen Diario de Regulación de IA para Inversores y CTOs',
    description: 'Alertas en tiempo real y síntesis ejecutiva sobre leyes de IA en la UE, EE. UU. y América Latina.',
    keywords: ['Regulación IA', 'Gobernanza de Inteligencia Artificial', 'Leyes de IA 2026', 'Compliance Tech'],
    sampleBullet: 'Aprobado nuevo marco de auditoría para modelos generativos de alto riesgo.'
  },
  'mercados-latam': {
    title: 'Inteligencia de Mercados Financieros y Capital en LatAm',
    description: 'Análisis diario de tasas, cambios normativos bancarios y flujo de inversión en la región.',
    keywords: ['Finanzas LatAm', 'Venture Capital Colombia', 'Open Banking Regulación', 'Mercado de Capitales'],
    sampleBullet: 'Ajuste en la tasa de intervención impacta operaciones fintech en la región.'
  }
};

export async function generateStaticParams() {
  return Object.keys(NICHES_DB).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const niche = NICHES_DB[params.slug];
  if (!niche) return {};

  return {
    title: `${niche.title} | DailySignal`,
    description: niche.description,
    keywords: niche.keywords,
    openGraph: {
      title: niche.title,
      description: niche.description,
      type: 'article',
    }
  };
}

export default function NichePage({ params }: { params: { slug: string } }) {
  const niche = NICHES_DB[params.slug];
  if (!niche) notFound();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <span style={{ fontSize: '0.85rem', color: '#0070f3', fontWeight: 'bold' }}>SECTOR HUB</span>
        <h1>{niche.title}</h1>
        <p style={{ color: '#555', fontSize: '1.1rem' }}>{niche.description}</p>
      </header>

      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h3>⚡ Señal Reciente en este Nicho</h3>
        <ul>
          <li><strong>Punto Clave:</strong> {niche.sampleBullet}</li>
          <li><strong>Frecuencia:</strong> Actualización diaria a las 06:00 AM.</li>
        </ul>
      </section>

      <footer style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
        <p>¿Quieres recibir este feed en tu correo o vía API? <a href="/pricing">Suscríbete a DailySignal Premium</a>.</p>
      </footer>
    </main>
  );
}
