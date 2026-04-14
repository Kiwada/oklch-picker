# Roteiro de Apresentação

## Objetivo

Mostrar um conversor de cores interativo capaz de receber cores em formatos conhecidos, como `HEX`, `RGB` e `HSL`, e exibir a equivalência no espaço `OKLCH` com atualização em tempo real.

## Escolhas de design

- Interface em português para facilitar a demonstração para a turma.
- Bloco inicial com exemplos prontos para reduzir atrito na primeira interação.
- Separação visual entre entrada, saída e ajustes finos da cor.
- Manutenção dos gráficos de `luminosidade`, `croma` e `matiz` para explicar como o espaço de cor funciona.
- Aviso de fallback em `sRGB` para mostrar o limite entre cor ideal e cor suportada pelo dispositivo.

## Desafios encontrados

- Traduzir uma interface originalmente técnica sem perder precisão nos termos de cor.
- Organizar a base técnica da aplicação com foco didático em vez de foco experimental.
- Explicar gamuts como `sRGB`, `Display P3` e `Rec. 2020` de forma simples.
- Ajustar a experiência para ficar clara tanto no desktop quanto no mobile.

## Como demonstrar em sala

1. Abra a aplicação e clique em um dos exemplos iniciais.
2. Mostre que cada botão usa um formato diferente de entrada (`HEX`, `RGB`, `HSL` e `OKLCH`).
3. Explique que a mesma cor é convertida automaticamente para o espaço principal do projeto.
4. Ajuste `luminosidade`, `croma` e `matiz` para mostrar a mudança visual em tempo real.
5. Troque o formato de saída para `HEX`, `RGB`, `HSL` ou `P3`.
6. Se aparecer fallback, explique que algumas cores não cabem em todos os dispositivos.

## Fechamento sugerido

O principal diferencial da aplicação é combinar conversão precisa de cores com uma interface que ajuda a entender o que está acontecendo visualmente, e não apenas mostrar números.
