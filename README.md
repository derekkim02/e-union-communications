# E Union Communications PTY LTD Website

A modern, responsive website for E Union Communications PTY LTD, an electrical contractor specializing in electrical and communications solutions.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** for fast development and optimal performance.

## Features

- Company information and services overview
- Contact details and inquiry form
- Clean, professional design
- Responsive layout for all devices

---

## Theming

| Role             | Color                             | Hex Code          | Tailwind Equivalent    |
| ---------------- | --------------------------------- | ----------------- | ---------------------- |
| **Primary**      | Electric Blue                     | `#00BFFF`         | `sky-400` or custom    |
| **Accent**       | Bright Yellow                     | `#FFD700`         | `yellow-400` or custom |
| **Secondary**    | Light Gray                        | `#D1D5DB`         | `gray-300`             |
| **Surface**      | Very Dark Gray (semi-transparent) | `rgba(0,0,0,0.6)` | `bg-black/60`          |
| **Text (Light)** | White                             | `#FFFFFF`         | `white`                |
| **Text (Muted)** | Cool Gray                         | `#9CA3AF`         | `gray-400`             |

---

## Development Setup

This project uses a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (Babel for Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) (SWC for Fast Refresh)

### Expanding the ESLint Configuration

If you are developing a production application, update the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or use ...tseslint.configs.strictTypeChecked for stricter rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
