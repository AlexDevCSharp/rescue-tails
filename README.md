# 🐾 Rescue Tails Ukraine

A volunteer-powered platform to support stray and shelter animals in Ukraine.  
Built with ❤️ using React, TypeScript, Tailwind CSS and Firebase.

---

## 🌍 Mission

Rescue Tails Ukraine connects kind people with animals in need — enabling donations, adoptions, fostering, and awareness.

---

## 🚀 Features

- Beautiful responsive UI (from Figma)
- Post listings with filters and tags
- Detailed post view `/posts/:id`
- Unified login/signup form
- Partner showcase
- Volunteer contact form
- User dashboard `/account`
- Admin-ready layout
- Firebase Auth & Firestore-ready

---

## 📁 Pages

| Path           | Description                     |
|----------------|----------------------------------|
| `/`            | Home                             |
| `/posts`       | All posts                        |
| `/posts/:id`   | Post details                     |
| `/about`       | Our story                        |
| `/support`     | How to help                      |
| `/contact`     | Contact form                     |
| `/stories`     | Gallery                          |
| `/calendar`    | Upcoming events                  |
| `/partners`    | Collaborators                    |
| `/signin`      | Auth page (login/register)       |
| `/account`     | User settings dashboard          |

---

## 🧠 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Auth & DB (planned)**: Firebase Auth, Firestore, Cloud Storage
- **Deployment**: GitHub Pages / Firebase / Vercel

---

## 📥 Local Setup

```bash
git clone https://github.com/AlexDevCSharp/rescue-tails.git
cd rescue-tails
npm install
npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
✨ Author
Made with ❤️ by @AlexDevCSharp

