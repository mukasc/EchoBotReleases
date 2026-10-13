# Roadmap Oficial de Evolução

O **EchoBot** segue um plano de desenvolvimento transparente e contínuo, focado em trazer o estado da arte em inteligência artificial, processamento de áudio local e usabilidade para mestres e jogadores de RPG de mesa.

Abaixo estão agrupados todos os recursos planejados, especificações técnicas em andamento e marcos futuros do ecossistema.

---

## 🎲 1. Integrações com Plataformas & VTTs

* **Módulo Nativo do Foundry VTT (Extensão em JavaScript):**
  * *Objetivo:* Criar um módulo oficial para o Foundry VTT que adiciona um botão no menu do mestre (*"Iniciar Gravação com EchoBot"*), capturando o áudio diretamente do canal WebRTC do Foundry (LiveKit / JitsiRTC) e sincronizando rolagens, falas e resumos direto no chat do VTT.
* **Sincronização Direta de VTT via Protocolo MCP (Ouroboros):**
  * *Objetivo:* Integração padronizada via Model Context Protocol para leitura de fichas, criação automática de atores e atualização de status em mesas do Foundry VTT e Roll20.
* **Voice Bridge Autônomo para Jitsi Meet (WebRTC):**
  * *Objetivo:* Um bot autônomo baseado em WebRTC para gravação de chamadas em servidores Jitsi Meet (`meet.jit.si` e instâncias privadas), atendendo comunidades que não utilizam o Discord.
* **Ingestão Direta de Logs de Texto de VTT e Discord:**
  * *Objetivo:* Importar transcrições ou históricos exportados de chats de texto do Foundry VTT e Discord para processamento imediato pelo LLM sem necessidade de etapa de áudio.

---

## 🎙️ 2. Transcrição & Motores de Áudio Futuros

* **Motor STT Moonshine ONNX Ultraleve (Para CPUs e Máquinas de Entrada):**
  * *Objetivo:* Integrar a arquitetura Speech-to-Text não-autoregressiva Moonshine via ONNX Runtime. O Moonshine processa o tamanho exato da fala sem adicionar padding fixo, operando até 5x mais rápido em CPUs fracas e notebooks sem GPU dedicada.
* **Provedor Microsoft Edge TTS Neural (Gratuito):**
  * *Objetivo:* Adicionar o Microsoft Edge TTS via biblioteca assíncrona Python como alternativa gratuita de voz neural de alta qualidade em nuvem para narração de NPCs.
* **Player de Áudio Avançado com Waveform (Componentes Lobe-TTS):**
  * *Objetivo:* Enriquecer a interface de reprodução de áudio com visualizador de onda sonora interativo, marcadores de tempo por capítulo e controles rápidos de velocidade.
* **Transcrição em Tempo Real por Streaming / VAD Dinâmico:**
  * *Objetivo:* Evoluir o Voice Bridge para fatiar o áudio por detecção de pausas de fala (Voice Activity Detection), transcrevendo micro-chunks durante a sessão e zerando o tempo de espera pós-jogo.
* **Modo Híbrido com Fallback Dinâmico em Nuvem para STT:**
  * *Objetivo:* Roteamento inteligente para APIs de transcrição em nuvem (Groq / Deepgram) caso os recursos locais de GPU do computador estejam saturados.

---

## 💾 3. Otimização de Armazenamento & Infraestrutura

* **Instalação Adaptativa de GPU (Setup Otimizado):**
  * *Objetivo:* Diagnóstico em tempo de setup para detectar se a máquina possui placa de vídeo NVIDIA. Máquinas com apenas CPU baixam apenas o PyTorch CPU e omitem os pacotes pesados do CUDA Toolkit, poupando ~2.0 GB de download e disco.
* **Purga Automática de Cache (`uv_cache`) e Gestão Física de Modelos:**
  * *Objetivo:* Limpeza silenciosa de caches temporários pós-instalação e interface para purga atômica no disco de modelos de IA inativos/antigos preservando apenas os essenciais.
* **Fila de Processamento Assíncrono Persistente (Message Broker Local):**
  * *Objetivo:* Evoluir a fila em memória `BackgroundTasks` para um broker leve e resiliente a reinicializações (Huey com SQLite), prevenindo perdas de tarefas em caso de reboot.
* **Camada de Cache em Disco para Chamadas de LLM (DiskCache):**
  * *Objetivo:* Armazenamento em cache de respostas de IA baseado em SQLite local, reduzindo drasticamente o consumo de tokens repetidos.
* **Política Ativa de Deleção de Áudios Brutos:**
  * *Objetivo:* Opção configurável para exclusão automática de arquivos binários de áudio brutos após a transcrição ter sido concluída e confirmada, maximizando a privacidade e liberando espaço em disco.

---

## 🎬 4. Narrativa, Mídia & IA Criativa

* **Gerador de Video Recap MP4 (<10MB para Discord Free):**
  * *Objetivo:* Geração de vídeos leves com arte de capa, legenda da sessão e áudio narrado, comprimidos sob o limite de 10MB para envio direto no Discord sem exigir Nitro.
* **Presets Adicionais de Estrutura de Roteiro:**
  * *Objetivo:* Seleção de formatos estilísticos de crônica: *Roteiro Curto*, *Focado em Combate & Estatísticas* ou *Narrativa Detalhada com Descrições Sensoriais*.
* **Sistema de Aliases e Apelidos para Entidades:**
  * *Objetivo:* Mapear apelidos alternativos de NPCs e personagens (ex: *"O Rei Louco"* ➔ *"Aerys Targaryen"*) para que a IA agrupe menções sob a mesma entidade na Wiki e no Diário.

---

## 📱 5. Mobile, Ecossistema & Nuvem

* **Companion App Mobile Nativo (iOS / Android):**
  * *Objetivo:* Aplicativo móvel nativo para consulta ultrarrápida do Compêndio e Diário de Campanha durante partidas de RPG presenciais físicas.
* **Plataforma Cloud SaaS Multi-Usuário (Multi-Tenancy):**
  * *Objetivo:* Versão hospedada em nuvem com contas de usuário, cotas de consumo, compartilhamento de campanhas com múltiplos mestres e cobrança por créditos de sessão ativa.
* **Servidor Oficial da Comunidade no Discord:**
  * *Objetivo:* Espaço oficial para troca de experiências entre mestres, suporte técnico para instâncias locais e publicação de pacotes de vozes e temas.
