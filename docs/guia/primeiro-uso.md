# Guia de Primeiro Uso

Bem-vindo ao **EchoBot**! Siga este tutorial passo a passo para configurar seu ambiente e conduzir sua primeira crônica de RPG do início ao fim.

---

## ⚙️ 1. Configurações Iniciais & Provedores de IA

Antes de iniciar sua primeira mesa, abra o menu **Configurações** na barra superior para ajustar seus motores de preferência:

1. **Aba IA (LLM):**
   * Selecione seu provedor primário de narrativa. O **Google Gemini** é o padrão recomendado pela velocidade e custo, mas você pode utilizar **OpenAI (GPT-4o)**, **Anthropic Claude 3.5**, **Groq** ou **OpenRouter**.
   * Insira a chave de API correspondente.
   * *(Opcional)* Configure provedores de **Fallback** na lista encadeada para contingência automática caso sua chave primária atinja limites de requisição.
2. **Aba Áudio & Voz:**
   * Escolha o provedor de narração dos NPCs e resumos. Selecione **Kokoro Local** para síntese neural gratuita e offline, ou **ElevenLabs / Deepgram** para vozes customizadas em nuvem.
3. **Aba Motor STT (Transcrição):**
   * Confirme o modelo padrão: **`large-v3-turbo`** (com aceleração GPU) ou `tiny`/`base` (para computadores sem placa de vídeo).
4. **Aba Discord (Se for gravar chamadas no Discord):**
   * Cole o Token do seu Bot do Discord, Application ID e Public Key caso deseje utilizar o comando `/entrar` nos canais de voz.

---

## 🗺️ 2. Criando seu Mundo (World)

No EchoBot, a organização do seu universo segue uma hierarquia de 3 níveis: **Mundos ➔ Campanhas ➔ Sessões**.

1. Na barra superior, clique em **Mundos** (ou navegue para `/worlds`).
2. Clique em **Novo Mundo**.
3. Defina o nome do seu cenário (ex: *"Cenário de Tormenta - Arton"* ou *"Forgotten Realms - Faerûn"*), selecione o sistema de regras (ex: *D&D 5e, Tormenta20, Chamado de Cthulhu, Vampiro V20*, etc.) e faça upload de uma imagem de capa.
4. Seu mundo agora possui um **Compêndio Enciclopédico**, **Grafo de Conhecimento** e **Oráculo RAG** exclusivos!

---

## ⚔️ 3. Criando uma Campanha & Mapeando Personagens

Dentro do seu Mundo, crie a campanha dos seus aventureiros:

1. Na página do Mundo, clique em **Nova Campanha** (ou na aba Campanhas).
2. Dê um nome à crônica (ex: *"A Queda de Valkaria - Temporada 1"*).
3. Na página da Campanha, clique em **Mapear Personagens**:
   * Cadastre os personagens dos jogadores com nome, raça, classe e avatar.
   * **Vincular Discord ID:** Permite que o EchoBot identifique automaticamente quem está falando durante as chamadas gravadas no Discord.
   * **Biometria Vocal (Opcional):** Grave ou envie uma amostra de áudio de 15 segundos da voz do jogador para habilitar a identificação biométrica por IA.

---

## 🎙️ 4. Gravando e Ingerindo o Áudio da Sessão

Abra sua campanha e clique em **Nova Sessão**. O EchoBot oferece **4 formas flexíveis** de capturar a partida:

### Método A: Bot de Voz no Discord
1. No canal de voz da sua mesa no Discord, digite o comando:
   ```text
   /entrar sessao_id:ID_DA_SUA_SESSAO
   ```
2. O bot ingressará na chamada gravando as faixas de áudio isoladas de cada jogador.
3. Ao término da partida, digite `/sair` ou clique no botão de encerrar no Discord. O áudio será enviado automaticamente para a sessão.

### Método B: Gravador WebRTC no Navegador
1. Dentro dos detalhes da sessão no EchoBot, abra a caixa do **Gravador WebRTC**.
2. Selecione seu microfone e ative o botão opcional **"Capturar Áudio do Sistema"** (permitindo gravar o som do Discord ou Roll20 que sai no seu fone).
3. Clique em **Iniciar Gravação** e narre a sessão livremente pelo navegador.

### Método C: Upload Manual em Lote (Bulk Upload)
1. Se você já gravou o áudio pelo OBS, Craig, Audacity ou gravador de celular, simplesmente arraste e solte múltiplos arquivos (`.mp3`, `.wav`, `.ogg`, `.m4a`) na área de upload.
2. O servidor converterá todos os arquivos silenciosamente para o formato otimizado Ogg/Opus.

### Método D: Importação Direta de Transcrição (.md / .txt)
1. Caso você possua um arquivo de texto já transcrito por outra ferramenta, clique no botão **"Importar Transcrição (.md)"**.
2. O parser inteligente interpretará oradores e timestamps, pulando a etapa de áudio e indo direto para o processamento de narrativa.

---

## 🔮 5. Processando a Crônica com IA

Com o áudio ou texto carregado na sessão:

1. Clique em **Processar com IA**.
2. Acompanhe as barras de progresso dinâmicas:
   * **Whisper Turbo:** Transcrição precisa com timestamps e separação de falas.
   * **Identificação de Vozes:** Correlaciona os padrões vocais aos personagens mapeados.
3. Explore as abas geradas:
   * **Transcrição:** Revise as falas, alterne o botão **IC / OOC** (In-Character / Fora do Personagem) e faça ajustes rápidos.
   * **Diário Técnico:** Consulte os NPCs encontrados, locais visitados, itens saqueados e o **rastreador de Quests** com status (*Ativa, Concluída, Falha*).
   * **Roteiro de Revisão:** Leia a crônica épica em prosa e clique em **Gerar Narração** para sintetizar o áudio com voz neural e trilha sonora misturada.

---

## 🏰 6. Alimentando o Compêndio e Conectando os Jogadores

* **Sincronizar com o Compêndio:** No Diário Técnico da sessão, clique em **Sincronizar com a Wiki** para transformar NPCs e locais encontrados em artigos permanentes no compêndio do mundo.
* **Explorar o Grafo de Lore:** Acesse a aba **Grafo de Conhecimento** no seu Mundo para ver visualmente como os personagens se conectam às cidades e facções.
* **Compartilhar com Jogadores:** No menu da campanha, abra o **Portal do Jogador**, copie o link do túnel seguro ou exiba o QR Code. Seus amigos poderão consultar a lore pública e submeter propostas diretamente pelo celular!
