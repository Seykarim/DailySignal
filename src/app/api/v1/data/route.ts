import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = request.headers.get('x-api-key');
  const sector = searchParams.get('sector') || 'ia_tech';

  // Validación de acceso B2B
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API Key no proporcionada. Acceso restringido a clientes B2B.' },
      { status: 401 }
    );
  }

  // Respuesta estructurada Data-as-a-Service (DaaS)
  const sampleData = {
    meta: {
      provider: 'DailySignal DaaS Engine',
      sectorRequested: sector,
      timestamp: new Date().toISOString()
    },
    signals: [
      {
        id: 'sig_001',
        title: 'Nueva regulación de Gobernanza de IA aprobada en la UE',
        summary: [
          'Exige auditorías de modelos generativos de alto riesgo.',
          'Plazo de implementación: 6 meses para cumplimiento.',
          'Afecta a empresas con operaciones directas en Europa.'
        ],
        relevanceScore: 98,
        source: 'https://official-journal.eu/act-2026'
      }
    ]
  };

  return NextResponse.json(sampleData, { status: 200 });
}
