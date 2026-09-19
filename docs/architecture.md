# Arquitectura Técnica del Sistema DailySignal

```text
    [ FUENTES DE DATOS ] (APIs, Web Scraping, Feeds RSS)
              │
              ▼
   ┌────────────────────────────────────────┐
   │ Next.js API Routes / Cron Scheduler    │ -> Ingesta automatizada cada hora
   └──────────────────┬─────────────────────┘
                      │
                      ▼
   ┌────────────────────────────────────────┐
   │ Pipeline de IA (LLM + Embeddings)      │ -> Filtrado, Categorización y Resúmenes
   └──────────────────┬─────────────────────┘
                      │
              ┌───────┴───────┐
              ▼               ▼
      [ Base de Datos ]   [ Motor de Alertas ]
      (PostgreSQL)        (Email / Telegram / WhatsApp / Push)
              │
              ├──────────────────────────────┐
              ▼                              ▼
   [ App Web / Mobile ]             [ Endpoint API B2B ]
   (Feed Personalizado)             (JSON Data-as-a-Service)
10. Archivo README Principal (`README.md`)

```bash
cat << 'EOF' > README.md
# 📡 DailySignal — Tu Capa de Inteligencia Diaria

> *"No es un lector de noticias; es un producto de inteligencia de datos curada para nichos específicos."*

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript)](https://www.typescriptlang.org)
[![OpenAI](https://img.shields.io/badge/AI-LLM%20Curator-green.svg?logo=openai)](https://openai.com)
[![License: MIT](https://img.shields.io/badge/Licencia-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Visión General

**DailySignal** transforma la sobrecarga de información diaria en una capa de inteligencia accionable. Mediante un pipeline de ingesta automatizada e IA de síntesis, toma datos relevantes de sectores clave (finanzas, tecnología, regulación, clima) y los entrega resumidos, estructurados y listos para consumir o integrar mediante API.

```text
Entrada de Fuentes -> Curación con IA -> Resumen en 3 Bullets + Alertas -> Entrega Web / API B2B
DailySignal/
├── README.md               # Presentación principal
├── LICENSE                 # Licencia libre MIT
├── package.json            # Configuración de dependencias
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── ingest/     # Cron jobs de ingesta
│   │       ├── summarize/  # Pipeline con LLM
│   │       └── v1/data/    # Endpoint API B2B
│   ├── lib/
│   │   └── ai.ts           # Motor de curación
│   └── types/
│       └── index.ts        # Tipado TypeScript
├── scripts/
│   └── run_ingest_pipeline.ts # Prueba del pipeline en consola
└── docs/
    ├── architecture.md     # Flujo del sistema
    └── monetization_roadmap.md # Estrategia DaaS
11. Licencia MIT (`LICENSE`)

```bash
cat << 'EOF' > LICENSE
MIT License

Copyright (c) 2026 Seykarim R. Mestre Zalabata

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
