# 🎙️ EchoBot v1.0.0 — O Cronista das Sombras
Bem-vindo ao lançamento oficial do **EchoBot**! O EchoBot é uma plataforma completa e moderna para gravação, transcrição, análise inteligente e narração de sessões de RPG e podcasts.
---
## ✨ Destaques Desta Versão
### 🎙️ Gravação Multicanal
- **Voice Bridge para Discord:** Bot dedicado que grava o canal de voz com qualidade OGG/Opus (64k mono).
- **Gravador WebRTC no Navegador:** Grave áudios e sessões diretamente pelo microfone do navegador.
- **Divisão Inteligente de Áudio:** Suporte a upload em lote e fatiamento automático de gravações longas.
### 🧠 IA & Transcrição Inteligente (Sidecar Pattern)
- **Whisper STT Desacoplado:** Transcrição local executada em processo isolado (porta 8001), garantindo alta performance e estabilidade de memória.
- **Fallback Automático para Gemini Flash:** Transcrição resiliente via API oficial do Google Gemini (`gemini-flash-latest`, `gemini-pro-latest`, `gemini-2.0-flash`).
- **Geração de Diário Técnico e Roteiro Narrado:** Análise profunda com RAG (Retrieval-Augmented Generation) contextualizado pelo histórico da campanha.
### 🔊 Síntese de Voz (TTS)
- **Narração Local com Kokoro TTS:** Vozes neurais com alta fidelidade rodando localmente no seu computador.
- **Integração com ElevenLabs:** Suporte a vozes customizadas e clonadas via chave de API.
- **Mixagem com Trilha Sonora:** Áudio narrado automaticamente mesclado com música de fundo atmosférica.
### 📊 Painel Administrativo de Diagnósticos (`/logs`)
- Console em tempo real com streaming de eventos e filtros por serviço (Voice Bridge, Backend, Whisper Sidecar, Kokoro TTS, Gemini IA).
- Exportação em `.txt`, busca textual e monitoramento de saúde do sistema.
---
## 💾 Instalação no Windows
1. Baixe o arquivo **`EchoBot_Setup.exe`** anexado nesta release abaixo.
2. Execute o instalador e siga as instruções na tela (não requer permissões de Administrador).
3. O EchoBot criará um atalho na sua Área de Trabalho e inicializará todos os serviços automaticamente.
---
### 🧪 Qualidade e Confiabilidade
- Cobertura de **100% de aprovação na suíte de testes automatizados** (127 testes cobrindo Backend, Frontend e Voice Bridge).
