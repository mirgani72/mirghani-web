# MIRGHANI — website (React + Vite + TypeScript + Tailwind)

## Run it

```
npm install
npm run dev
```

Opens at http://localhost:5173 with live reload.

## Build for deployment

```
npm run build
```

Outputs static files to `dist/`. Those are what actually get hosted —
`dist/` is a plain HTML/CSS/JS folder that any static host (Cloudflare
Workers, Netlify, etc.) can serve directly.

## Structure

```
src/
  components/   NavBar, Footer, Button — shared across all pages
  pages/        Accueil, Approche, Services, APropos, Contact
  data/         contact info, nav items, photo URLs in one place
public/         logo assets, served as-is
reference/      original design reference image (not used by the app)
```

## Known open items

- Photos are licensed stock (Unsplash), not real photos of the buildings
  MIRGHANI manages — replace the URLs in `src/data/content.ts` and the
  images in `public/` when real photography is available.
- Mentions Légales / Confidentialité pages from the static-site version
  aren't included here yet — this project covers the 5 marketing pages.
- Not connected to the MIRGHANI backend (Cloudflare Worker + D1) — this
  is the public marketing site only.
