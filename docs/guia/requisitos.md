# Requisitos do Sistema

Antes de baixar e instalar o **EchoBot**, verifique se o seu computador atende às especificações necessárias para o modo de operação desejado (Aceleração por GPU NVIDIA ou Modo Leve em CPU).

---

## 💻 Requisitos de Hardware

### Configuração Recomendada (Aceleração por GPU NVIDIA CUDA)
Ideal para transcrição ultrarrápida com o modelo **Whisper Large-v3-Turbo**, identificação biométrica de oradores em segundos e narração em alta fidelidade:

* **Sistema Operacional:** Windows 10 ou 11 (64-bit) ou Linux (Ubuntu 22.04+ / Docker)
* **Placa de Vídeo (GPU):** NVIDIA GeForce com arquitetura Turing ou superior (GTX 1660, RTX 2060, RTX 3060, RTX 4060 ou superior) com no mínimo **6 GB de VRAM**.
* **Driver Gráfico:** Driver NVIDIA atualizado (com suporte a CUDA 12.x).
* **Processador (CPU):** Intel Core i5/i7 (9ª geração+) ou AMD Ryzen 5/7 (3000 series+).
* **Memória RAM:** 16 GB DDR4/DDR5.
* **Armazenamento:** 10 GB de espaço livre em disco SSD (NVMe recomendado para carregamento instantâneo de modelos).

### Configuração Mínima (Modo CPU / Whisper Tiny-Base)
Projetada para notebooks e computadores sem placa de vídeo dedicada:

* **Sistema Operacional:** Windows 10 ou 11 (64-bit).
* **Processador (CPU):** Intel Core i5 (8ª geração+) ou AMD Ryzen 5 2600+ (mínimo 4 núcleos / 8 threads).
* **Memória RAM:** 8 GB.
* **Armazenamento:** 5 GB de espaço livre em disco (SSD recomendado).
* **Modelos Suportados em CPU:** `tiny`, `base` ou processamento via provedores em nuvem.

---

## 🌐 Conectividade e Portas de Rede

* **Operação 100% Offline (Local):** Quando configurado com os modelos locais de Speech-to-Text (**Faster-Whisper**) e Text-to-Speech (**Kokoro Local ONNX**), o EchoBot funciona inteiramente sem conexão com a internet.
* **Provedores de IA em Nuvem (Opcional):** Caso prefira utilizar APIs externas como **Google Gemini**, **OpenAI GPT-4o**, **Claude 3.5**, **Groq**, **OpenRouter**, **ElevenLabs** ou **Deepgram**, é necessária uma conexão de banda larga ativa para envio de prompts e streaming de áudio.
* **Portas Utilizadas na Máquina Local:**
  * **Porta `8000`:** Servidor principal FastAPI e aplicação web frontend do Mestre.
  * **Porta `8001`:** Whisper Sidecar dedicado para isolamento de memória de IA.
* **Firewall do Windows:** Durante a primeira execução, autorize a comunicação em redes privadas para permitir a troca de mensagens com o bot do Discord e a conexão do túnel do Portal do Jogador.
