# Conversor de Cores Interativo

Aplicação web para conversão e exploração visual de cores em tempo real, com foco em clareza de interface, demonstração didática e manipulação interativa dos componentes de cor.

O projeto permite inserir uma cor em formatos CSS conhecidos, converter o valor para `OKLCH` ou `LCH`, acompanhar a cor resultante na interface e ajustar `luminosidade`, `croma`, `matiz` e `opacidade` por meio de controles visuais.

## Visão Geral

Esta aplicação foi construída para servir como ferramenta de apoio em apresentação acadêmica e demonstração prática de conversão de cores. Em vez de atuar apenas como um campo de conversão textual, ela combina:

- entrada manual de cores em formatos como `HEX`, `RGB`, `HSL` e `OKLCH`
- conversão imediata para múltiplos formatos de saída
- visualização da cor resultante em tempo real
- gráficos interativos para ajuste fino dos componentes da cor
- visualização opcional do espaço de cor em `3D`

## Funcionalidades

- Conversão entre `HEX`, `RGB`, `HSL`, `OKLCH`, `LCH`, `LAB`, `OKLAB`, `P3` e formatos auxiliares.
- Ajuste interativo de `luminosidade`, `croma`, `matiz` e `opacidade`.
- Detecção de gamut para `sRGB`, `Display P3` e `Rec. 2020`.
- Pré-visualização da cor resultante com atualização imediata.
- Exemplos rápidos de entrada para demonstração em sala.
- Painel `3D` para exploração visual do espaço de cor.
- Persistência de preferências de interface no navegador.

## Arquitetura

O projeto segue uma organização modular, separando domínio, estado reativo, camada visual e infraestrutura de build.

### 1. Entrada e composição

- [index.ts](./index.ts) inicializa os módulos de interface.
- [index.css](./index.css) agrega os estilos por componente.
- [index.html](./index.html) carrega os templates e a aplicação no navegador.

### 2. Núcleo de domínio de cor

A pasta [lib](./lib) concentra a lógica de conversão e representação de cores.

- [lib/colors.ts](./lib/colors.ts) faz parsing, formatação, conversão entre espaços de cor e verificação de gamut.
- módulos auxiliares da pasta `lib/` cuidam de renderização, tempo, câmera e modelo 3D.

### 3. Estado reativo

A pasta [stores](./stores) centraliza o estado da aplicação com `Nanostores`.

- [stores/current.ts](./stores/current.ts) mantém a cor atual e coordena a atualização dos controles e gráficos.
- [stores/formats.ts](./stores/formats.ts) gera os formatos de saída exibidos na interface.
- [stores/settings.ts](./stores/settings.ts) persiste preferências como gráficos, `P3`, `Rec. 2020`, formato de saída e modelo `3D`.
- [stores/support.ts](./stores/support.ts) detecta suporte do navegador a espaços de cor avançados.
- [stores/url.ts](./stores/url.ts) controla o estado de navegação interna, como o modo `3D`.

### 4. Camada de interface

A pasta [view](./view) organiza a interface por componentes visuais independentes.

Principais módulos:

- `sample`: mostra a cor resultante.
- `code`: entrada e saída textual dos formatos de cor.
- `card`, `chart`, `range`, `field`: controlam os painéis de ajuste visual.
- `intro`, `title`, `layout`, `settings`: estruturam o fluxo principal da página.
- `minimodel` e `fullmodel`: renderizam a experiência 3D.

### 5. Build e configuração

- [vite.config.ts](./vite.config.ts) configura o build com `Vite`, `Pug` e transformação de CSS.
- [config.ts](./config.ts) define constantes globais do projeto, incluindo limites e variações entre `OKLCH` e `LCH`.

## Fluxo da Aplicação

1. O usuário informa uma cor por texto ou pelos controles visuais.
2. A entrada é interpretada e normalizada pela camada de domínio.
3. O estado global da cor é atualizado nos `stores`.
4. A interface reage automaticamente, atualizando preview, sliders, gráficos e formatos de saída.
5. Quando habilitado, o modelo `3D` utiliza o mesmo estado para representar a cor no espaço visual.

## Tecnologias Utilizadas

### Base da aplicação

- `TypeScript` para implementação tipada da lógica e da interface.
- `Vite` como servidor de desenvolvimento e pipeline de build.
- `Pug` para composição dos templates da interface.
- `PostCSS` e `Lightning CSS` para processamento e compatibilidade dos estilos.

### Estado e reatividade

- `Nanostores` para gerenciamento reativo de estado.
- `@nanostores/persistent` para persistência de preferências no navegador.

### Conversão e representação de cores

- `culori` para parsing, formatação e conversão entre espaços de cor.

### Visualização 3D

- `three` para renderização do modelo 3D do espaço de cor.

### Qualidade e validação

- `oxlint` para lint de JavaScript e TypeScript.
- `stylelint` para lint de CSS.
- `better-node-test` para testes unitários.
- `size-limit` para controle básico do tamanho de build.

## Estrutura de Pastas

```text
.
├── lib/        # lógica de domínio, utilitários, renderização e modelo 3D
├── stores/     # estado reativo e preferências da aplicação
├── view/       # componentes visuais, templates e estilos
├── public/     # arquivos públicos
├── test/       # testes automatizados
├── index.ts    # bootstrap da aplicação
├── index.css   # agregação dos estilos
├── index.html  # entrada HTML
├── config.ts   # constantes globais
└── vite.config.ts
```

## Como Executar Localmente

Pré-requisitos:

- `Node.js 20+`
- `pnpm` via `corepack`

Instalação:

```sh
corepack pnpm install
```

Ambiente de desenvolvimento:

```sh
corepack pnpm start
```

Build de produção:

```sh
corepack pnpm build
```

## Scripts Disponíveis

- `corepack pnpm start`: inicia o servidor local com Vite.
- `corepack pnpm build`: gera a versão de produção.
- `corepack pnpm test:unit`: executa os testes unitários.
- `corepack pnpm test:js`: executa lint de JavaScript e TypeScript.
- `corepack pnpm test:css`: executa lint de CSS.
- `corepack pnpm test:build`: valida a build e o limite de tamanho dos arquivos.
- `corepack pnpm test`: roda a suíte completa.

## Decisões Técnicas

- A aplicação usa arquitetura modular para facilitar manutenção e evolução da interface.
- O estado centralizado em `stores` reduz acoplamento entre campos, sliders, gráficos e visualização 3D.
- A separação entre `lib/`, `stores/` e `view/` mantém claras as responsabilidades de domínio, estado e apresentação.
- O uso de `culori` garante consistência nas conversões entre diferentes espaços de cor.
- A experiência visual foi adaptada para uso didático, com foco em leitura rápida e demonstração em tempo real.

## Observações

- O módulo de analytics da versão atual está neutro e não envia rastreamento externo.
- O build pode emitir aviso de chunk maior que `500 kB` por causa do módulo 3D, mas a aplicação continua funcional e a build é gerada normalmente.

## Material de Apoio

Para a apresentação em sala, consulte [APRESENTACAO.md](./APRESENTACAO.md).
