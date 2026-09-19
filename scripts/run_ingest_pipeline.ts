import { SignalCuratorEngine } from '../src/lib/ai';
import { RawSignalSource } from '../src/types';

async function runPipeline() {
  console.log('📡 DailySignal - Iniciando Pipeline de Ingesta y Curación con IA...\n');

  const mockRawSource: RawSignalSource = {
    id: 'raw_101',
    title: 'Actualización urgente sobre tasas de interés y mercado de capitales',
    content: 'El banco central anuncia cambio en la normativa bancaria y ajuste del 0.5% en tasas.',
    url: 'https://financial-times.com/news/101',
    sourceName: 'Financial Feed',
    publishedAt: new Date().toISOString()
  };

  const curated = await SignalCuratorEngine.processRawSource(mockRawSource, 'finanzas');

  console.log('✅ Señal Procesada y Curada con Éxito:');
  console.log('--------------------------------------------------');
  console.log(`📌 Título: ${curated.title}`);
  console.log(`🏷️  Nicho: ${curated.sector.toUpperCase()}`);
  console.log(`⭐ Score de Relevancia: ${curated.relevanceScore}/100`);
  console.log(`🚨 Alerta Disparada: ${curated.isAlertTriggered ? 'SÍ (' + curated.alertReason + ')' : 'NO'}`);
  console.log('📝 Resumen Ejecutivo:');
  curated.summaryBullets.forEach(b => console.log(`   - ${b}`));
  console.log('--------------------------------------------------\n');
}

runPipeline();
