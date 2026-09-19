import { RawSignalSource, CuratedSignal, NicheSector } from '../types';

/**
 * Motor de Curación de DailySignal:
 * Procesa fuentes crudas, evalúa la relevancia para el nicho y extrae resúmenes ejecutivos.
 */
export class SignalCuratorEngine {
  
  public static async processRawSource(
    raw: RawSignalSource, 
    sector: NicheSector
  ): Promise<CuratedSignal> {
    
    // Simulación de procesamiento con LLM (GPT-4o-mini / Embeddings)
    const isAlert = raw.content.toLowerCase().includes('urgente') || 
                    raw.content.toLowerCase().includes('normativa') ||
                    raw.content.toLowerCase().includes('quiebra');

    const bullets = [
      `Impacto directo en el sector de ${sector.toUpperCase()}: Cambio registrado en la fuente original.`,
      `Punto clave: ${raw.title}. Se detecta tendencia relevante para toma de decisiones.`,
      `Recomendación de acción: Evaluar implicaciones operativas en las próximas 48 horas.`
    ];

    return {
      id: `sig_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      sector,
      title: raw.title,
      summaryBullets: bullets,
      relevanceScore: isAlert ? 95 : 82,
      isAlertTriggered: isAlert,
      alertReason: isAlert ? 'Detectada alteración regulatoria o métrica crítica.' : undefined,
      originalUrl: raw.url,
      timestamp: new Date().toISOString()
    };
  }
}
