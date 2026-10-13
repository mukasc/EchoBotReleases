# Worldbuilding, Compêndio & Grafos de Conhecimento

O **EchoBot** organiza a história do seu universo de RPG através de ferramentas visuais e semânticas, impedindo que detalhes de tramas, NPCs e conexões de campanha se percam ao longo dos meses.

---

## 🏛️ A Hierarquia Canônica de 3 Níveis

Para acomodar crônicas longas e múltiplos grupos jogando no mesmo universo:
1. **Mundo (World):** O cenário maior (ex: *Arton, Faerûn, Golarion* ou um cenário caseiro). Guarda as regras do sistema, o compêndio enciclopédico, a árvore de linhagens e o grafo de lore.
2. **Campanhas (Crônicas):** Aventuras específicas que se passam dentro daquele Mundo (ex: *Mesa de Sexta*, *Mesa de Sábado*).
3. **Sessões:** As partidas individuais de cada campanha, com seus respectivos áudios, transcrições e diários.

---

## 📖 Compêndio / Wiki de RPG Integrada

Organize seu cenário como uma enciclopédia interativa:
* **Artigos Categorizados:** Cadastre entidades com atributos específicos nas categorias:
  * 👥 **Personagens & NPCs:** Biografia, motivações, alinhamento e papéis.
  * 📍 **Locais:** Cidades, tavernas, masmorras e reinos.
  * ⚔️ **Itens & Recompensas:** Artefatos mágicos, armas e relíquias.
  * 🛡️ **Facções:** Guildas, cultos, ordens de cavalaria e impérios.
  * 📜 **Conceitos & Lore:** Deuses, magias antigas e eventos históricos.
* **Segredos do Mestre (GM Secrets):** Cada artigo possui um bloco especial de anotações confidenciais. Informações inseridas nesse bloco **nunca são enviadas para o Portal dos Jogadores**, permanecendo visíveis apenas para o Mestre.
* **Sincronização com o Diário Técnico:** Com um único clique, transforme NPCs, locais ou itens descobertos durante uma sessão em artigos permanentes da Wiki.
* **Geração de Lore por IA:** Assistente integrado para expandir descrições de cenários e gerar ganchos dramáticos.

---

## 🗺️ Grafo de Conhecimento Interativo (React Flow)

Visualize a teia de relações do seu mundo:
* **Nós e Conexões Visuais:** Veja como NPCs se relacionam com facções, quem é rival de quem, quais heróis possuem artefatos e quais locais estão sob cerco.
* **Filtros Dinâmicos:** Isole a visualização por tipo de entidade (ex: mostrar apenas *Facções e Cidades* ou apenas *NPCs e Itens*).
* **Edição de Relacionamentos:** Crie novas conexões diretamente pelo grafo escolhendo o tipo de relação (ex: *aliado de, membro de, proprietário de, rival de*).
* **Persistência 2D:** Arraste e posicione os nós livremente na tela; as coordenadas espaciais são salvas automaticamente no banco de dados.

---

## 👑 Linhagens & Genealogia Interativa (D3.js)

Para campanhas de intriga política, famílias nobres ou clãs:
* **Organogramas Dinásticos em D3.js:** Navegue por árvores genealógicas colapsáveis com suporte a gerações e casamentos.
* **Sugestões de Parentesco por IA:** A IA pode sugerir herdeiros, irmãos ou ancestrais respeitando o tom da campanha.

---

## 🔮 Oráculo Semântico de Mundo (World RAG)

Nunca mais pare a sessão para folhear cadernos antigos:
* **Busca Semântica Local:** Pergunte em linguagem natural:
  * *"Qual era o nome da espada mágica que os jogadores encontraram nas ruínas de Port Coral na 3ª sessão?"*
  * *"Quais taverneiros conhecem o paradeiro do culto das sombras?"*
* **Álgebra Linear Local (NumPy):** A busca calcula similaridade de cosseno em vetores locais, correlacionando o conteúdo de artigos da Wiki, sessões anteriores e transcrições em milissegundos sem enviar seus dados para servidores externos de busca.
