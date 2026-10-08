# Solução de Problemas (FAQ)

Aqui estão as respostas e soluções para as dúvidas e situações mais comuns no uso do EchoBot.

---

### ❓ O EchoBot não está reconhecendo minha voz / microfone
1. Vá em **Configurações do Windows > Privacidade e Segurança > Microfone** e certifique-se de que o acesso ao microfone está ativado para aplicativos da área de trabalho.
2. No menu de configurações do EchoBot, teste se o dispositivo selecionado corresponde à sua entrada principal de áudio.
3. Se estiver usando o modo CPU, aumente a sensibilidade do VAD ou selecione o modelo Whisper *Tiny* para diminuir a latência.

---

### ❓ Como habilitar a aceleração por GPU (CUDA)?
1. Certifique-se de ter uma placa de vídeo NVIDIA compatível.
2. Baixe e instale os drivers mais recentes da sua GPU via GeForce Experience ou site oficial da NVIDIA.
3. Nas configurações do EchoBot, selecione o dispositivo `cuda` para ativar o processamento paralelo.

---

### ❓ Onde ficam salvas as minhas campanhas e gravações?
Todos os dados das suas campanhas, logs e configurações são salvos localmente na pasta `data/` do seu diretório de instalação do EchoBot, garantindo total privacidade e facilidade de backup.
