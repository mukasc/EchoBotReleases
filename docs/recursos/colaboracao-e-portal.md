# Portal do Jogador & Colaboração Segura

O RPG de mesa é uma experiência coletiva. O **EchoBot** oferece um ambiente seguro e em tempo real para conectar seus jogadores ao universo da campanha sem comprometer o sigilo das anotações do Mestre.

---

## 📱 O Portal do Jogador (`/player`)

O Portal do Jogador é uma interface web dedicada, responsiva e mobile-first projetada para que os jogadores consultem informações e participem da construção do cenário:

* **Consulta à Lore Pública:** Os jogadores podem explorar os artigos de compêndio, entender a história das cidades, ler sobre facções e consultar divindades.
* **Omissão Automática de Segredos:** O backend filtra 100% dos blocos de anotações confidenciais do Mestre (*GM Secrets*). Nenhum segredo ou ficha privada é transmitida para os jogadores.
* **Exploração do Grafo de Lore:** Visualização pública das relações conhecidas entre as entidades do mundo.
* **Zero Necessidade de Instalação:** Os jogadores acessam diretamente pelo navegador do celular ou computador, sem precisar baixar softwares ou criar contas.

---

## 🛡️ Firewall do Mestre & Segurança de Acesso Remoto

Para garantir que ninguém na sua rede ou na internet acesse suas telas de mestre:

* **Isolamento Automático de Conexões:** O middleware de segurança do EchoBot identifica quando uma requisição vem de fora do computador principal (`localhost`), seja via IP de rede local ou túnel remoto.
* **Bloqueio de Painel Administrativo:** Todas as rotas de gerenciamento (`/settings`, `/api/sessions`, `/logs`, rotas de chaves de API) são bloqueadas com código `403 Forbidden` para acessos externos.
* **Redirecionamento Seguro:** Qualquer tentativa de acesso ao domínio principal por um visitante externo é automaticamente redirecionada para `/player`.

---

## 🌐 Túnel Cloudflare Integrado & Conexão por QR Code

Conectar seus amigos leva menos de 10 segundos:

1. No menu superior ou dentro do Mundo, abra o modal de **Colaboração com Jogadores**.
2. Clique em **Iniciar Túnel Cloudflare**.
3. O EchoBot iniciará um túnel seguro temporário e exibirá:
   * Um link público com criptografia HTTPS (ex: `https://seu-mundo.trycloudflare.com/player`).
   * Um **QR Code na tela**.
4. Os jogadores presentes na mesa física podem apenas apontar a câmera do smartphone para o QR Code e entrar imediatamente no portal.

---

## ✍️ Sistema de Propostas & Moderação do Mestre

Estimule seus jogadores a enriquecerem o mundo criando NPCs, tavernas ou detalhes de seus históricos:

```
┌──────────────────────────┐             ┌──────────────────────────┐
│   Portal do Jogador      │             │   Painel do Mestre       │
│  (Celular / Navegador)   │             │   (Dashboard Local)      │
└────────────┬─────────────┘             └────────────┬─────────────┘
             │                                        │
             │ 1. Submete Proposta                    │
             ├───────────────────────────────────────►│ 2. Notificação WebSocket
             │                                        │
             │                                        │ 3. Abre Gaveta de Moderação
             │                                        │    com Visualizador de Diff
             │                                        │
             │                                        │ 4. Aprovar / Editar / Rejeitar
             │ 5. Atualização Instantânea da Wiki    │
             │◄───────────────────────────────────────┤
```

1. **Submissão:** O jogador escreve um novo artigo de compêndio ou propõe alterações em um existente através do Portal.
2. **WebSocket em Tempo Real:** O Mestre recebe um aviso visual instantâneo na interface.
3. **Visualizador de Diff:** A gaveta de moderação do Mestre compara o texto atual com a proposta do jogador lado a lado com realce de adições e remoções (estilo Git).
4. **Decisão do Mestre:** O Mestre pode:
   * **Aprovar:** O artigo é incorporado automaticamente à Wiki do Mundo e ao Grafo.
   * **Editar & Aprovar:** O Mestre ajusta o texto para adequar ao tom da campanha antes de publicar.
   * **Rejeitar:** A proposta é descartada com feedback para o autor.
