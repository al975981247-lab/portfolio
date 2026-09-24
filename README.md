# React Portfolio

Vite + React 18. No other dependencies.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Make it yours
Edit `src/data/portfolio.js` (name, intro, skills, projects, email).
Colors and fonts live at the top of `src/styles/global.css`.

## Structure
- `src/components/` UI pieces (Header, Hero, About, Skills, Projects, Contact, Footer)
- `src/context/ThemeContext.jsx` light/dark theme via Context API
- `src/hooks/` `useLocalStorage`, `useScrollSpy` custom hooks
- `src/styles/` one CSS file per component, tokens in `global.css`

## Deploy
Push to GitHub and import the repo in Vercel. Vite is detected automatically.
