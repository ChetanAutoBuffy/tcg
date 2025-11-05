# The Chadha Group — Landing Page

Modern, mobile-first landing site built with **React (Vite) + TailwindCSS**. Single page today, ready for multipage later (React Router wired). No backend.

## Quick Start
```bash
npm install
npm run dev
```

Open the URL shown (e.g., http://localhost:5173).

## Customize
- Replace `src/assets/logo.png` with your logo (same filename) or update the import in `App.jsx`.
- Update copy in `src/components/*`.
- Colors are defined in `tailwind.config.js` under `theme.extend.colors.tcg`.
- Add pages by creating a component and a `<Route>` in `App.jsx`.

## Contact Form
Currently uses `mailto:thechadhagroupllc@gmail.com`. Submitting opens the visitor's email client populated with the form values.
For hosted, form-handling alternatives without a backend:
  - Formspree, Web3Forms, or EmailJS (drop-in in ~5 minutes).

## Build & Deploy
```bash
npm run build
```
Deploy the `dist/` folder to Vercel/Netlify/Cloudflare Pages.
