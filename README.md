# Conversor de Cores Interativo

Aplicação acadêmica para apresentar conversão de cores em tempo real com foco em usabilidade, clareza visual e demonstração em sala.

## O que esta versão entrega

- Conversão entre `HEX`, `RGB`, `HSL`, `OKLCH` e outros formatos CSS.
- Controles visuais para luminosidade, croma, matiz e opacidade.
- Exemplos prontos para demonstrar entradas em formatos diferentes.
- Aviso de fallback quando a cor sai do gamut disponível em `sRGB`.
- Interface em português, adequada para demonstração em sala.

## Desenvolvimento

1. Garanta `Node.js 20+`.
2. Instale as dependências:

   ```sh
   corepack pnpm install
   ```

3. Rode o ambiente local:

   ```sh
   corepack pnpm start
   ```

4. Gere a versão de produção:

   ```sh
   corepack pnpm build
   ```

## Apresentação

Use o roteiro em [APRESENTACAO.md](./APRESENTACAO.md) para explicar as escolhas de design, os desafios do desenvolvimento e a forma de demonstrar a aplicação.
