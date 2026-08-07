# Georeferencer WebUI

A browser-based tool for georeferencing images — align a raster image (e.g. a scanned map) to real-world coordinates by placing control points on an interactive map.

Built with React, TypeScript, Vite, MapLibre GL, and MUI.

It is available under [GitHub Pages](https://nils-witt.github.io/Georeferencer-WebUI/).

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start the development server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build locally
- `npm run lint` / `npm run lint:fix` – lint with oxlint
- `npm run format` / `npm run format:check` – format with Prettier

## Docker

```bash
docker build -t georeferencer-webui .
docker run -p 8080:80 georeferencer-webui
```
