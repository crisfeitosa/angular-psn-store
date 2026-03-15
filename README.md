# 🎮 Angular PSN Store

Interface inspirada na **PlayStation Store**, construída com **Angular 21** como projeto de estudo da [DIO](https://www.dio.me/).

## 🖼️ Preview

A aplicação exibe um catálogo de jogos com cards contendo capa, tipo de plataforma, selo e preço, reproduzindo o visual da loja da PlayStation.

## 🚀 Tecnologias

| Tecnologia    | Versão |
| ------------- | ------ |
| ⚡ Angular    | 21     |
| 🟦 TypeScript | 5.9    |
| 🧪 Vitest     | 4      |

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── 🏠 app.ts                 # Componente raiz
│   ├── 🔀 app.routes.ts          # Definição de rotas
│   ├── 🧩 components/
│   │   ├── 🃏 card/               # Card de jogo (capa, selo, preço)
│   │   │   ├── 🏷️ card-label/     # Selo do card (ex: "Exclusive")
│   │   │   └── 💲 card-pricing/   # Preço e tipo de plataforma
│   │   └── 📌 menu-bar/           # Barra de navegação com logo
│   └── 📄 pages/
│       └── 🏠 home/               # Página principal com grid de cards
└── 🖼️ assets/                     # Imagens (capas de jogos, logo)
```

## ▶️ Como Executar

```bash
# 📦 Instalar dependências
npm install

# 🖥️ Iniciar servidor de desenvolvimento
npm start
```

Acesse `http://localhost:4200/`.

## 📋 Scripts Disponíveis

| Comando         | Descrição                                |
| --------------- | ---------------------------------------- |
| `npm start`     | 🖥️ Servidor de desenvolvimento           |
| `npm run build` | 📦 Build de produção (saída em `dist/`)  |
| `npm run watch` | 👀 Build em modo watch (desenvolvimento) |
| `npm test`      | 🧪 Testes unitários com Vitest           |
