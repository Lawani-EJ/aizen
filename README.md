<p align="center">
    <a href="#" style="display: block;" align="center">
        <img src="https://getstream.io/stream-light.png" alt="sosuke aizen" width="60%" />
    </a>
</p>

## Getting started with Strean Phase 1 
<p align="center">
    <a href="#" style="display: block;" align="center">
        <img src="https://i.pinimg.com/originals/0b/6f/35/0b6f35f8b4a78a8b7e0586e44569db74.gif" alt="sosuke aizen" width="60%" />
    </a>
</p>

## Project Setup and Installation
The easiest way to build a Stream Chat React JS application s to create a new project using Vite. 
Vite allows you create a boilerplate React application that you can run locally with just a few simple commands.

```shell
C:\Users\USER\Desktop\Stream-ChatApplication>npm create vite@latest

> npx
> create-vite

√ Project name: ... .
√ Package name: ... stream-chatapplication
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Users\USER\Desktop\Stream-ChatApplication...

Done. Now run:

  npm install
  npm run dev


C:\Users\USER\Desktop\Stream-ChatApplication>npm install

added 181 packages, and audited 182 packages in 3m

43 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Setup Stream SDK

```shell
C:\Users\USER\Desktop\Stream-ChatApplication>npm i stream-chat stream-chat-react

added 241 packages, and audited 423 packages in 4m

154 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
