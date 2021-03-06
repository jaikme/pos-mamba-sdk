# Collection

O módulo `Collection` é composto de dois componentes: `Collection` e `Row` que juntos, ajudam a organizar itens em listas.


<!-- @example ./example/Example.html -->

## Parâmetros

<Collection ...props />

| Parâmetro   | Descrição                         | Tipo               | Padrão        |
|-------------|-----------------------------------|--------------------|---------------|
| title       | Título da coleção                 | `string`           | `undefined`   |

<Row ...props />

| Parâmetro   | Descrição                         | Tipo               | Padrão        |
|-------------|-----------------------------------|--------------------|---------------|
| href        | Link acionado quando a `<Row/>` é clicada  | `string`           | `undefined`   |
| showExtra   | Mostra o conteúdo extra           | `boolean`          | `false`       |
| shortcut    | Tecla de atalho para a ação da `<Row/>`: `0..9`,`enter`,`shortcuts`,`help` | `string` (keyname) | `undefined`   |
| description | Texto de descrição abaixo do título          | `string`           | `undefined`   |