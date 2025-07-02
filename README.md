# Projeto Front-end - Estágio Econverse

Este projeto é uma aplicação front-end desenvolvida com React, TypeScript e Vite, focada em simular uma interface de e-commerce. Ele inclui componentes para exibição de produtos, categorias, parceiros e um sistema de newsletter.

### Desenvolvido por Guilherme Santos, como parte do desafio técnico para a vaga de estágio front-end na Econverse.

## Estrutura do Projeto

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── logo.png
│   └── vite.svg
├── src
│   ├── App.module.scss
│   ├── App.tsx
│   ├── assets
│   │   ├── images
│   │   │   ├── footer
│   │   │   │   ├── facebook.svg
│   │   │   │   ├── instagram.svg
│   │   │   │   └── linkedin.svg
│   │   │   ├── header
│   │   │   │   ├── box.svg
│   │   │   │   ├── card.svg
│   │   │   │   ├── cart.svg
│   │   │   │   ├── crown.svg
│   │   │   │   ├── glass.svg
│   │   │   │   ├── heart.svg
│   │   │   │   ├── shield.svg
│   │   │   │   ├── truck.svg
│   │   │   │   └── user.svg
│   │   │   └── main
│   │   │       ├── auxiliar_banner.png
│   │   │       ├── banner.png
│   │   │       ├── categories
│   │   │       │   ├── beverages.svg
│   │   │       │   ├── fashion.svg
│   │   │       │   ├── health.svg
│   │   │       │   ├── sports.svg
│   │   │       │   ├── supermarket.svg
│   │   │       │   └── tech.svg
│   │   │       ├── chevron_left.svg
│   │   │       └── chevron_right.svg
│   │   └── scss
│   │       └── _variables.scss
│   ├── components
│   │   ├── Category
│   │   │   ├── Category.module.scss
│   │   │   └── index.tsx
│   │   ├── Footer
│   │   │   ├── Footer.module.scss
│   │   │   └── index.tsx
│   │   ├── Modal
│   │   │   ├── Modal.module.scss
│   │   │   └── index.tsx
│   │   ├── Partners
│   │   │   ├── Partner
│   │   │   │   ├── Partner.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── Partners.module.scss
│   │   │   └── index.tsx
│   │   └── Showcase
│   │       ├── Product
│   │       │   ├── Product.module.scss
│   │       │   └── index.tsx
│   │       ├── Showcase.module.scss
│   │       └── index.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── test-svg-import.tsx
│   └── types
│       ├── Product.ts
│       └── swiper.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.paths.json
└── vite.config.ts
```

## Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode verificar as versões instaladas com os seguintes comandos:

```bash
node -v
npm -v
```

Se você não os tiver instalados, pode baixá-los do site oficial do Node.js: [nodejs.org](https://nodejs.org/)

## Instalação

Para configurar o ambiente de desenvolvimento e instalar as dependências do projeto, siga os passos abaixo:

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/guilhermesantos0/teste-front-end.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd teste-front-end/estagio-econverce
   ```

3. Instale as dependências do projeto usando o npm:
   ```bash
   npm install
   ```

## Como Rodar o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Este comando iniciará o servidor de desenvolvimento do Vite e abrirá a aplicação no seu navegador padrão (geralmente em `http://localhost:5173/`). O servidor possui Hot Module Replacement (HMR), o que significa que as alterações no código serão refletidas instantaneamente no navegador sem a necessidade de recarregar a página.

## Como Compilar o Projeto (Build)

Para gerar uma versão otimizada para produção do projeto, utilize o comando de build:

```bash
npm run build
```

Este comando compilará o código TypeScript e React, otimizará os assets e gerará os arquivos estáticos na pasta `dist/`. Essa pasta pode ser então servida por qualquer servidor web estático.

## Testes

O arquivo `package.json` não especifica scripts de teste automatizados. No entanto, você pode realizar testes manuais após rodar o projeto com `npm run dev` para verificar a funcionalidade e a interface do usuário.

## Configuração de Importação de SVG

Este projeto utiliza `vite-plugin-svgr` para importar arquivos SVG como componentes React. A configuração foi ajustada para resolver problemas de importação, garantindo que os SVGs sejam tratados corretamente pelo TypeScript e pelo React.

**Detalhes da configuração:**

- **`vite.config.ts`**: O plugin `vite-plugin-svgr` está configurado para transformar SVGs em componentes React.
- **`src/vite-env.d.ts`**: Contém a declaração de tipos necessária para que o TypeScript reconheça as importações de SVG com o sufixo `?react` como componentes React.
- **Importações em componentes**: Os SVGs são importados usando a sintaxe `import NomeDoComponente from 'caminho/para/seu/arquivo.svg?react';` e podem ser usados diretamente no JSX, aceitando props como `width`, `height` e `className`.

