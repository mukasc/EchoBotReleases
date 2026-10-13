# Voz & Transcrição (STT / TTS)

O núcleo do **EchoBot** combina modelos modernos de inteligência artificial acústica e síntese neural para processar o áudio da sua mesa com velocidade extrema e fidelidade dramática.

---

## 🎧 Transcrição de Fala para Texto (Speech-to-Text)

### Faster-Whisper com Modelo Large-v3-Turbo
O sistema utiliza a arquitetura otimizada **Faster-Whisper (CTranslate2)**:

* **Modelo Padrão `large-v3-turbo`:** Reduz o número de camadas do decodificador de 32 para 4, proporcionando uma aceleração de **4x a 6x em relação ao Whisper tradicional**, mantendo a alta acurácia do modelo Large. Uma sessão inteira de 3 horas é processada em poucos minutos.
* **Modelos Alternativos:** Seleção via interface entre os modelos `tiny`, `base`, `small`, `medium` e `large-v3-turbo`.
* **Aceleração por Hardware NVIDIA CUDA:** Inferência direta em GPU com quantização `int8_float16`, compatível com placas GeForce GTX 1660 e linhas RTX 20/30/40.
* **Fallback Automático para CPU:** Em máquinas sem placa de vídeo NVIDIA, o sistema aciona automaticamente a versão compilada em C++ do **`whisper.cpp`** ou modo multi-thread de CPU.

### Arquitetura Desacoplada (Sidecar Pattern)
O processamento pesado de áudio não trava a interface web:
* O motor de IA é executado em um processo servidor FastAPI independente na porta `8001`.
* Isso impede vazamentos de memória, mantém o instalador desktop principal ultraleve (<60MB) e baixa os modelos de IA sob demanda com feedback visual de progresso.

### Identificação Biométrica de Vozes (Speaker ID)
* **Reconhecimento por Padrão Vocal:** Utilizando o modelo acústico `UniSpeech-SAT` e inferência em lote com fatiamento em memória via NumPy, o sistema analisa as frequências vocais de cada participante.
* **Associação Automática:** As falas são atribuídas aos personagens cadastrados na campanha sem depender exclusivamente do Discord.

### Filtro Inteligente IC (In-Character) vs OOC (Out-of-Character)
* Durante a partida, jogadores alternam entre falas na narrativa (*"Eu conjuro um míssil mágico contra o monstro"*) e conversas fora do personagem (*"Alguém quer pedir pizza?"*).
* O EchoBot classifica automaticamente cada fala e permite ao Mestre alternar o status através de botões rápidos na transcrição, garantindo que conversas paralelas não poluam a crônica épica.
* Suporte a deleção individual ou em lote (*bulk delete*) de trechos indesejados.

---

## 🗣️ Síntese de Voz (Text-to-Speech) & Narração de NPCs

### Kokoro TTS v1.0 (Local & Gratuito)
Dê voz aos seus NPCs e aos resumos da sessão sem pagar assinaturas de terceiros:
* **Execução 100% Offline:** Modelo ONNX executado nativamente em Python, com baixíssimo consumo de CPU e RAM.
* **Qualidade de Estúdio:** Vozes expressivas e naturais com ritmo dramático, adequadas para a narração de crônicas de fantasia.
* **Zero Custo de API:** Narre resumos ilimitados sem depender de internet ou créditos pagos.

### Provedores em Nuvem de Alta Fidelidade
Para mestres que buscam clonagem de voz ou timbres específicos:
* **ElevenLabs:** Suporte a vozes personalizadas com modulação de estabilidade e clareza.
* **Deepgram Aura:** Síntese em tempo real de altíssima velocidade.

---

## 🎵 Mixagem com Trilha Sonora Autônoma

O EchoBot inclui um estúdio de mixagem automática de áudio:
* **Biblioteca Embutida Royalty-Free:** Seleção de trilhas instrumentais e ambientes imersivos curados para fantasia e RPG.
* **Duck / Mixer Dinâmico:** O volume da música de fundo é suavizado automaticamente quando a voz do narrador está falando.
* **Download Duplo:** Na tela de revisão do roteiro, você pode baixar tanto o **áudio final mixado** quanto o **Stem isolado** (apenas a voz limpa sem música de fundo, ideal para edição no Audacity ou software de podcast).
