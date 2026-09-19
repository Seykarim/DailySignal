export type NicheSector = 'finanzas' | 'ia_tech' | 'regulacion' | 'clima_energia' | 'salud';

export interface RawSignalSource {
  id: string;
  title: string;
  content: string;
  url: string;
  sourceName: string;
  publishedAt: string;
}

export interface CuratedSignal {
  id: string;
  sector: NicheSector;
  title: string;
  summaryBullets: string[];
  relevanceScore: number; // 0 a 100
  isAlertTriggered: bool;
  alertReason?: string;
  originalUrl: string;
  timestamp: string;
}

export interface UserPreference {
  userId: string;
  subscribedSectors: NicheSector[];
  deliveryFrequency: 'daily' | 'realtime_alerts' | 'weekly_digest';
  tier: 'free' | 'premium_niche' | 'enterprise_api';
}
