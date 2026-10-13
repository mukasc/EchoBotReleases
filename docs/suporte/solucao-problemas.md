# Solução de Problemas & FAQ

Consulte as respostas e procedimentos recomendados para solucionar dúvidas técnicas e comportamentos inesperados no uso do **EchoBot**.

---

### ❓ O EchoBot não está reconhecendo meu microfone ou áudio
1. **Permissões do Windows:** Vá em **Configurações do Windows > Privacidade e Segurança > Microfone**. Certifique-se de que a opção *"Permitir que aplicativos da área de trabalho acessem seu microfone"* está **Ativada**.
2. **Seleção de Dispositivo:** No Gravador WebRTC da sessão, verifique se você selecionou o dispositivo correto de entrada (headset ou microfone principal).
3. **Áudio do Sistema (Loopback):** Se estiver gravando o som dos jogadores via navegador, certifique-se de autorizar o compartilhamento de áudio da aba ou do sistema na janela de permissão do navegador.

---

### ❓ Como garantir que a aceleração por GPU (CUDA) está ativa?
1. **Driver NVIDIA:** Certifique-se de ter os drivers mais recentes da sua GPU instalados via GeForce Experience ou site oficial da NVIDIA.
2. **Configuração no EchoBot:** Em **Configurações ➔ Motor STT**, defina o dispositivo de execução como **`cuda`** (ou `auto`).
3. **Logs do Whisper Sidecar:** Abra o Console de Logs (`/logs` ou ícone da bandeja). Você deverá ver a mensagem indicando carregamento das DLLs do CUDA Toolkit (`cublas64_12.dll` / `cudnn_ops64_9.dll`).
4. **Fallback:** Se o sistema não detectar os binários do CUDA, ele alternará automaticamente e com segurança para o modo CPU (`whisper.cpp`).

---

### ❓ Onde ficam salvas as minhas campanhas e gravações?
Por padrão, no Windows:
```text
%LOCALAPPDATA%\EchoBotData
```
Dentro deste diretório estão:
* `data/`: Banco de dados Flat-File com mundos, campanhas, sessões e compêndio.
* `recordings/`: Gravações de áudio salvas em formato Ogg/Opus.
* `models/`: Modelos baixados de IA acústica e vozes (Whisper e Kokoro).

Para transferir todos os dados para outro HD ou SSD com mais espaço livre, utilize o assistente em **Configurações ➔ Armazenamento ➔ Migrar Dados**.

---

### ❓ Os jogadores não conseguem acessar o Portal do Jogador
1. **Túnel Ativo:** No modal de colaboração, certifique-se de que o botão **Iniciar Túnel Cloudflare** foi clicado e exibe o status *"Ativo"*.
2. **Rede Local (LAN):** Caso prefira conectar sem túnel pela mesma rede Wi-Fi, certifique-se de que o Firewall do Windows não está bloqueando conexões de entrada na porta `8000`.
3. **Acesso aos Dados:** Lembre-se de que visitantes externos são restritos pelo Firewall do Mestre e só conseguem acessar `/player` (todas as telas de configuração e sessões são protegidas).

---

### ❓ Como coletar logs e obter suporte técnico?
1. Acesse o **Console de Logs Administrativo** navegando para:
   ```text
   http://localhost:8000/logs
   ```
2. Você poderá filtrar por nível de severidade (*ERROR*, *WARN*, *INFO*) ou por componente (*Whisper Sidecar, Voice Bridge, Backend API*).
3. Clique em **Exportar Logs (.txt)** para gerar um arquivo detalhado para enviar ao suporte no repositório oficial do GitHub.
