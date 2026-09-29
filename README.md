# YOUR NAME — One-Page Portfolio

Modern, responsive, single-page personal portfolio built with **React + Vite + Tailwind CSS**.
Dark developer aesthetic, glassmorphism cards, scroll-reveal animations, and zero backend —
ready to deploy to Vercel, Netlify, or GitHub Pages.

Story flow: `INTRO → WHO I AM → JOURNEY → STACK → BUILT → CONNECT`

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
├── index.html                  # title, fonts, meta
├── vite.config.js              # base:'./' so GitHub Pages subpaths work
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── profile.jpg             # ← put YOUR photo here (see below)
└── src/
    ├── main.jsx
    ├── index.css               # theme, glass/btn utilities, reveal animation
    ├── App.jsx                 # one-page composition
    ├── data/portfolio.js       # ★ ALL editable content lives here
    ├── hooks/useReveal.js      # IntersectionObserver scroll reveal
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Journey.jsx
        ├── Skills.jsx
        ├── ProjectCard.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SectionHeading.jsx
```

## Customize (2 minutes)

### 1. Replace profile image
1. Save your square photo (800×800px or larger) as `public/profile.jpg`.
2. Done — `src/data/portfolio.js` already points at `./profile.jpg`.
3. If the file is missing, a styled monogram fallback renders automatically.

### 2. Replace personal info
Open `src/data/portfolio.js` and edit:
- `profile` — name, roles, tagline, email, GitHub/LinkedIn URLs
- `about` — heading, paragraphs, quick facts, stats
- `journey` — year / title / text per milestone (`highlight: true` for glow)
- `skillGroups` — categories + items
- `contact` — email, social handles, location

### 3. Add / edit projects
In the same file, edit the `projects` array:

```js
{
  title: 'My Cool App',
  description: 'What it does…',
  technologies: ['React', 'Node.js'],
  features: ['Auth', 'Dashboard'],
  github: 'https://github.com/you/repo',
  demo: 'https://demo-link…',
}
```

## Deploy

### Vercel
1. Push to GitHub → import repo at vercel.com → framework preset **Vite**.
2. Build command `npm run build`, output dir `dist`. Deploy.

### Netlify
- Drag-and-drop `dist/` **or** connect the repo with:
  - Build command: `npm run build`
  - Publish directory: `dist`
- `netlify.toml` equivalent: no redirects needed (single `index.html`).

### GitHub Pages
1. `vite.config.js` already uses `base: './'` for subpath hosting.
2. Build, then publish `dist/`:
   ```bash
   npm run build
   # push dist/ to gh-pages via your preferred method, e.g.:
   npx gh-pages -d dist
   ```
3. In repo Settings → Pages, serve from `gh-pages` branch.

## Notes
- Frontend-only: no backend, no router, minimal deps (`react`, `react-dom` only at runtime).
- Accessibility: semantic landmarks, skip link, labeled form fields, focus rings,
  `prefers-reduced-motion` support, alt text on the portrait.
