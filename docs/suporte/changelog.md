# Histórico de Versões & Releases

Acompanhe as principais novidades, marcos arquiteturais e melhorias de estabilidade adicionadas ao ecossistema do **EchoBot**.

---

## 🚀 Versão 1.9.0 (Versão Atual Estável)

### 🗺️ Worldbuilding & Colaboração
* **Hierarquia Canônica de 3 Níveis:** Suporte estruturado a Mundos (Cenários/Sistemas de Regras), Campanhas (Crônicas) e Sessões.
* **Portal do Jogador & Colaboração Segura:** Portal mobile dedicado (`/player`) para consulta de lore pública e envio de propostas de novos artigos com moderação em tempo real (diff visual estilo Git).
* **Firewall Remoto do Mestre:** Isolamento automático bloqueando acessos externos a telas administrativas e configurações.
* **Grafo de Conhecimento Interativo (React Flow):** Visualização e edição de conexões entre entidades, filtros por categoria e salvamento de coordenadas 2D.
* **Linhagens & Genealogia (D3.js):** Visualizador de árvores genealógicas e organogramas dinásticos interativos.
* **Oráculo Semântico do Mundo (World RAG):** Busca vetorial local com álgebra linear em NumPy agregando compêndio e histórico de sessões.

### 🎙️ Processamento Acústico & Voz
* **Aceleração STT com Whisper Large-v3-Turbo:** Adoção do modelo Turbo como padrão, proporcionando ganho de até 6x em velocidade com baixo consumo de VRAM em GPUs NVIDIA CUDA.
* **Identificação Biométrica de Vozes (Speaker ID):** Pipeline acelerada por GPU para correlacionar padrões vocais aos personagens cadastrados em menos de 3 minutos.
* **Gravador WebRTC no Navegador:** Captação de áudio diretamente pela interface web com suporte a microfone e loopback do áudio do sistema.
* **Importação e Exportação de Transcrição (.md):** Parser inteligente para ingestão de transcrições externas com timestamps e oradores.

### 📦 Infraestrutura & Portabilidade
* **Banco de Dados Flat-File ("Zero-Config"):** Abstração dual para persistência em JSON atômico sem exigir instalação do MongoDB.
* **Assistente de Migração de Armazenamento:** Monitoramento de uso de disco e transferência segura da pasta `%LOCALAPPDATA%\EchoBotData` para outras unidades.
* **Atualizador Interno In-App (1-Click Auto-Updater):** Verificação de novas versões no GitHub Releases com download e instalação silenciosa.
* **Console Administrativo de Logs (`/logs`):** Streaming de eventos em tempo real com filtros por componente e exportação em `.txt`.
* **11 Temas Visuais & i18n Completo:** Suporte a temas de fantasia e ficção e internacionalização integral em Português (PT-BR) e Inglês (en-US).

---

## 🏛️ Versão 1.0.0 (Fundação do Sistema)

* **Voice Bridge para Discord (Node.js):** Captura de canais de voz em faixas separadas via comandos `/entrar` e `/sair`.
* **Conversão Ogg/Opus:** Otimização acústica reduzindo o tamanho dos arquivos em até 90%.
* **Síntese de Voz Kokoro Local (ONNX):** Narração de resumos 100% offline, gratuita e sem custos de API.
* **Diário Técnico Automatizado:** Extração de NPCs, Locais, Itens e Quests com máquina de estados.
* **Roteiro Épico & Trilha Sonora:** Geração de crônica de revisão com trilha musical royalty-free integrada.
* **Exportação:** Suporte a arquivos PDF estilizados, Markdown e integração com Notion.so.
