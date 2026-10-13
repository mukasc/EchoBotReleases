# Guia de Instalação (.exe & Desktop)

A distribuição do **EchoBot** foi construída no modelo desktop "Zero-Config" para Windows: você não precisa instalar manualmente servidores de banco de dados, interpretadores externos ou pacotes complexos de desenvolvimento.

---

## 📥 Passo 1: Download da Versão Oficial

1. Acesse o repositório de lançamentos no GitHub: [Releases Oficiais do EchoBot](https://github.com/mukasc/EchoBotReleases/releases).
2. Localize a versão mais recente com a tag **`Latest`**.
3. Na seção de **Assets**, faça o download do instalador:
   * **Instalador Completo:** `EchoBot-Setup-vX.X.X.exe`
   * *(Opcional)* **Versão Portátil:** `EchoBot-Portable-vX.X.X.zip`

---

## 🛠️ Passo 2: Executando o Instalador

1. Dê um duplo clique no arquivo executável baixado.
2. Caso o Windows SmartScreen exiba o aviso *"O Windows protegeu o seu computador"*, clique em:
   * **Mais informações** ➔ **Executar assim mesmo**.
3. Siga as instruções do assistente do Inno Setup escolhendo o diretório de destino desejado (por padrão em `Arquivos de Programas`).
4. Ao concluir, marque a opção para **Iniciar o EchoBot**.

---

## 🚀 Passo 3: Inicialização & Launcher na Bandeja

Ao ser iniciado, o EchoBot opera através de um launcher desktop silencioso:

* **Ícone na Bandeja do Sistema (System Tray):** Um ícone do EchoBot aparecerá ao lado do relógio do Windows.
* **Menu de Controle Rápido:**
  * **Abrir Dashboard:** Inicia o navegador padrão diretamente na interface do Mestre em `http://localhost:8000`.
  * **Ver Logs:** Abre o Console Administrativo de diagnóstico em tempo real (`/logs`).
  * **Reiniciar Motores:** Reinicia os serviços de API e do Whisper Sidecar de forma controlada.
  * **Encerrar:** Finaliza todos os processos em segundo plano com liberação imediata de memória.
* **Abertura Automática:** O navegador abrirá a tela inicial na primeira inicialização.

---

## 📂 Onde ficam salvos os meus dados?

Para facilitar backups, migrações e privacidade:
* Por padrão, todas as suas campanhas, artigos de compêndio, gravações e modelos ficam armazenados em:
  ```text
  %LOCALAPPDATA%\EchoBotData
  ```
* Se desejar transferir seus dados para outro disco rígido ou SSD com mais espaço, você pode utilizar o assistente automático em **Configurações ➔ Armazenamento ➔ Migrar Dados**.

---

## 🐳 Alternativa: Execução via Docker (Linux / Servidor)

Se você preferir rodar o EchoBot em um servidor local com Docker:
```bash
# Para servidores com aceleração NVIDIA GPU:
docker compose -f docker-compose.gpu.yml up -d

# Para servidores em modo CPU:
docker compose up -d
```
Acesse a aplicação no navegador em `http://localhost:8000`.
