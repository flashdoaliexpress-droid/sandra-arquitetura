# Google Ads — Estratégia para o site da Sandra

## A diferença fundamental entre SEO e Google Ads

| | **SEO** | **Google Ads** |
|---|---|---|
| Quando aparece | Resultados orgânicos (abaixo dos anúncios) | Topo da página, marcado "Patrocinado" |
| Custo | Grátis por clique | Você paga por clique (CPC) |
| Tempo pra funcionar | Semanas a meses | **Imediato** (liga hoje, aparece hoje) |
| Depois que para de investir | Continua trazendo tráfego | Some no dia seguinte |
| Escala | Limitada pela sua posição | Quanto mais paga, mais aparece |

**Analogia:** SEO é construir uma casa (leva tempo, é sua para sempre). Google Ads é alugar um outdoor na esquina mais movimentada (aparece hoje, mas só enquanto paga).

---

## Por que fazem sentido juntos

- **Fase inicial (0–6 meses):** SEO ainda não ranqueou → Ads traz os primeiros leads pagando.
- **Fase madura (6m+):** SEO já traz tráfego constante → Ads amplifica em campanhas específicas ou palavras muito concorridas.
- **Sinergia com GMN:** anúncios de "Google Ads for Local Services" aparecem *dentro* do Maps e ao lado do GMN — reforça o que Sandra já tem.

---

## Como se conectam tecnicamente

Depois do SEO estar pronto, pra rodar Ads bem você precisa de:

### 1. Landing pages que convertem
O site atual já serve — Hero direto, CTA de WhatsApp claro, prova social (depoimentos + projetos). Ads não funciona bem se manda a pessoa pra um site ruim; o nosso está bom.

### 2. Google Tag / Google Ads Conversion Tracking
Um script no site que avisa o Google Ads sempre que alguém:
- Clica no botão de WhatsApp
- Preenche um formulário (se tiver no futuro)
- Passa X segundos numa página

Sem isso, você paga cliques mas não sabe qual campanha *realmente* gera cliente. É como investir dinheiro sem extrato.

### 3. Google Analytics 4 (GA4)
Para ver de onde vem o tráfego (Ads, orgânico, direto, Instagram), quanto tempo ficam, quais páginas visitam. **Grátis.** Praticamente obrigatório se for rodar Ads.

### 4. Google Business Profile + Ads conectado
GMN da Sandra pode ser vinculado à conta do Google Ads → anúncios locais aparecem com endereço, telefone, avaliações. Poderoso pra arquiteta.

---

## Tipos de campanha que fazem sentido pra Sandra

### 1. Search Ads (mais óbvio)
Alguém digita *"arquiteta porto alegre"* → anúncio aparece no topo.
- **Custo típico Brasil:** R$3–15 por clique nessa categoria
- **Orçamento inicial razoável:** R$30–50/dia (R$1.000–1.500/mês)

### 2. Performance Max
Google decide sozinho onde mostrar (Search + Maps + YouTube + Gmail). Menos controle, mas escala rápido. Bom pra depois que já tem histórico de conversão.

### 3. Local Services Ads (LSA)
Formato específico pra prestadores locais — aparece com selo "Garantido pelo Google". **Ainda não está disponível pra arquitetura no Brasil** (só EUA/UK/CA por enquanto), mas fica no radar.

### 4. Remarketing
Quem já visitou o site vê anúncios no Instagram/YouTube depois. Aquece o lead. Depende de ter GA4 + tag configurados.

---

## Ordem prática de implementação

1. **Agora:** SEO técnico do site (em andamento — ver plano SEO)
2. **Junto ou logo depois:** GA4 + Google Tag Manager instalados no site
3. **Depois:** Conta Google Ads criada, conectada ao GA4 e ao GMN
4. **Depois:** Primeira campanha Search com 5–10 palavras-chave bem escolhidas
5. **Otimização contínua:** ver o que converte, cortar o que não, expandir o que dá certo

---

## Divisão de responsabilidades

### O que eu (dev) faço no código
- Instalar GA4 no site (só cola um script)
- Instalar Google Tag Manager (mais flexível pra event tracking)
- Configurar o tracking de conversão do botão WhatsApp
- Adicionar `data-gtm-event` nos CTAs pra medir cliques

### O que Sandra / gestor de tráfego faz (fora do código)
- Criar as campanhas dentro do Google Ads
- Definir orçamento e lances
- Escrever os textos dos anúncios
- Escolher palavras-chave
- Otimizar campanhas com base nos dados

---

## Recomendação prática

**Antes de gastar em Ads,** vale:
1. Terminar o SEO técnico (o que estamos fazendo agora)
2. Rodar 1 mês só com SEO + GMN pra ver a "linha de base" (quantos leads sem pagar)
3. Aí ligar Ads em cima — vai saber exatamente o quanto Ads está adicionando

Rodar Ads antes de ter SEO mínimo é possível, mas você paga clique pra mandar a pessoa pra um site que não converte tão bem — desperdício.

---

## Palavras-chave iniciais candidatas (Porto Alegre / RS)

Para a primeira campanha Search:

- arquiteta porto alegre
- arquiteta poa
- reforma apartamento porto alegre
- design de interiores porto alegre
- projeto arquitetônico poa
- arquiteta reforma apartamento
- arquiteta comercial porto alegre
- reforma escritório porto alegre

**Negativas** (evitar cliques desperdiçados):
- curso arquitetura
- faculdade arquitetura
- vaga arquiteto
- salário arquiteto
- concurso

---

## Próximos passos

- [ ] Terminar SEO técnico do site
- [ ] Instalar GA4 + GTM
- [ ] Configurar conversões (clique WhatsApp, formulário)
- [ ] Criar conta Google Ads
- [ ] Vincular Ads ↔ GA4 ↔ GMN
- [ ] Definir orçamento inicial
- [ ] Rodar primeira campanha Search
- [ ] Revisar performance semanalmente nos primeiros 60 dias
