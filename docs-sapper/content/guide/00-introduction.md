---
title: Introdução
---

## O que é o MAMBA?

Mamba é um sistema e framework desenvolvido dentro da Stone especificamente para o POS (Ponto de Venda)!
Com ele você pode utilizar a programação web para desenvolver aplicativos utilizando tecnologias web, de acordo com as necessidades do cliente.

> Você precisará ter o [Node.js](https://nodejs.org/en/) instalado e ter alguma familiaridade com a linha de comando

> Antes de tentar ou começar a usar o Mamba Web, é necessária uma boa base de conhecimento do [JavaScript ES2015](http://babeljs.io/docs/learn-es2015/).


## Começando

### 1. Crie um novo projeto

```bash
git clone https://github.com/stone-payments/pos-mamba-websdk-template.git <my-app>
cd <my-app>
```
Quando isso for feito, instale as dependências do projeto. É recomendado que você use `Yarn` para gerenciamento de dependências determinísticas, mas `npm install` será suficiente.

```bash
yarn  # Instala dependências do projeto (ou `npm install`)
```

### 2. Rode o projeto

Depois de concluir a etapa de instalação, você está pronto para iniciar o projeto!

```bash
yarn start # Inicie o ambiente de desenvolvimento
```

### 3. Usando alguns componentes do Mamba

**Para componentes Web, instale o componente/pacote que deseja usar no projeto:**

```bash
yarn install @mamba/buttom # Componente do botão


# Se quiser usar o dialog por ex:

yarn install @mamba/dialog
```



**Para importar o componente instalado, pode seguir uma das formas abaixo:**

```js
<script>
  import Button from '@mamba/buttom';

  export default {
    components: { Button }
  }
</script>

// ou 

<script>
  export default {
    components: {
      Button: '@mamba/buttom'
    }
  }
</script>
```

#### Para modules da API nativa:

```bash
yarn install @mamba/native
```

Agora só importar o módulo que deseja, sempre descontruindo objeto do pacote `@mamba/native`:

```js
import System from '@mamba/native/system.js'
```

### Compatibilidade

O Mamba foi desenvolvido para rodar com o Safari 5.1+, que é a versão do navegador no POS.