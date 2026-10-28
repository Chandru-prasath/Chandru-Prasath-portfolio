# Chandru Prasath — Premium Developer Portfolio

A responsive, editorial-style dark portfolio built with React, Vite, Tailwind CSS v4 integration, and Lucide icons. The design uses restrained lime accents, a code-inspired hero visual, expandable project case studies, technical skills, experience, education, and contact links. It intentionally avoids cartoon/game UI so the result stays creative while remaining recruiter-friendly.

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Deploy free with Vercel

1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Use build command `npm run build` and output directory `dist`.
4. Deploy. Vercel will provide a public URL.

## Personalization

Update profile links and content in `src/App.jsx`. The resume is served from `public/resume.pdf`. Project cards currently link to the GitHub profile because individual repository URLs were not provided; replace those links with direct repository URLs when available.
