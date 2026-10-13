# Integrações (Discord, Áudio Virtual & Notion)

O **EchoBot** conecta-se aos canais de comunicação e ferramentas de anotação que você já utiliza na sua mesa de RPG, mantendo sua crônica acessível e compartilhável.

---

## 🎧 Bot de Voz do Discord (Voice Bridge)

O EchoBot inclui um serviço nativo Node.js desenvolvido especificamente para canais de voz do Discord:

### Comandos Slash
* **`/entrar [sessao_id] [duracao_chunk]`:**
  * O bot conecta-se imediatamente ao canal de voz onde você está.
  * O parâmetro `sessao_id` vincula a gravação diretamente a uma sessão aberta no EchoBot.
  * O bot captura o áudio de cada participante em faixas separadas, convertendo em tempo real para o formato ultraleve **Ogg/Opus**.
* **`/sair`:**
  * O bot desconecta da chamada e dispara a transmissão e finalização dos áudios no painel do EchoBot.

### Modo Gravador de Podcast Standalone
Precisa gravar uma chamada avulsa sem criar previamente uma sessão de campanha?
* Execute `/entrar` sem especificar um ID de sessão.
* O bot gravará todas as faixas individuais diretamente na pasta local `/recordings` com um arquivo descritor `metadata.json`, funcionando como um gravador de podcast multitrack independente.

---

## 🎙️ Transmissão de Vozes de NPCs (VB-Cable / VoiceMeeter)

Você pode transmitir as falas sintetizadas dos NPCs (via Kokoro TTS ou ElevenLabs) diretamente para os seus amigos na chamada do Discord:

1. Instale um driver gratuito de cabo de áudio virtual (recomendado: [VB-Audio Virtual Cable](https://vb-audio.com/Cable/)).
2. No Windows, configure o reprodutor de áudio ou defina o **CABLE Input** como saída de som do sistema.
3. No Discord, em **Configurações de Voz & Vídeo**, selecione **CABLE Output** como seu dispositivo de entrada (Microfone).
4. *(Dica com VoiceMeeter):* Se desejar falar no seu microfone real e tocar a voz dos NPCs ao mesmo tempo, use o VoiceMeeter para mixar seu microfone físico + o CABLE Input no mesmo canal de saída.
5. Agora, sempre que você clicar em reproduzir a fala de um NPC ou a narração épica no EchoBot, todos os jogadores ouvirão com alta fidelidade na chamada!

---

## 📑 Integração com Notion.so

Sincronize automaticamente os resumos e diários das suas partidas com o seu banco de notas do Notion:

1. Em **Configurações ➔ Integrações**, insira sua **Chave de Integração do Notion (Internal Integration Token)** e o **ID da Página/Database**.
2. Na página de detalhes da sessão, clique em **Exportar ➔ Notion**.
3. O EchoBot criará uma página estilizada contendo:
   * Título, data e duração da sessão.
   * Diário técnico organizado por categorias (NPCs, Locais, Itens, Quests e XP).
   * Roteiro completo da história.

---

## 📄 Exportação Multiformato & Importação de Transcrições

* **PDF Premium:** Gera um documento elegante com tipografia de fantasia, bordas decorativas e organização em duas colunas, ideal para imprimir ou compartilhar com o grupo.
* **Markdown (.md):** Exportação completa para quem utiliza ferramentas de notas como Obsidian, Logseq ou VS Code.
* **Importação de Transcrição (.md / .txt):** Permite importar transcrições geradas fora do EchoBot, analisando oradores e timestamps para gerar diários técnicos e roteiros sem precisar do arquivo de áudio bruto.

---

## 🎲 Nota sobre VTTs (Foundry VTT & Roll20)

> **Status de Desenvolvimento:** A integração automatizada via módulo nativo de extensão JavaScript para o **Foundry VTT** e conexões diretas via protocolo MCP (Ouroboros) estão em fase de arquitetura e constam no nosso [Roadmap Oficial](/recursos/roadmap). Atualmente, a interação com mesas virtuais é realizada através do áudio do Discord/WebRTC e exportação de textos.
