# Anish Srivastava – Portfolio

React (Vite) portfolio built from my CV. Static site, so it can be hosted for free.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Edit content

All text (experience, skills, links, contact) is in [`src/data/content.js`](src/data/content.js).
Photo: `public/profile.jpg` · CV download: `public/Anish_Srivastava_Resume.pdf` (replace to update).

## Free deployment

### Option A – GitHub Pages (workflow included)

1. Create a GitHub repo (for a URL like `https://anishsri97.github.io/`, name it `anishsri97.github.io`; any other name gives `https://anishsri97.github.io/<repo>/`).
2. Push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/anishsri97/<repo>.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and publishes the site.

The build uses relative asset paths (`base: './'`), so it works under a repo sub-path without extra config.

### Option B – Vercel / Netlify / Cloudflare Pages

Import the GitHub repo, then use: build command `npm run build`, output directory `dist`.
