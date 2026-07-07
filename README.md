# KDE minisite

**Un site pour dire au revoir**

Petite présentation statique de mon activité en tant qu'indépendant pendant 13 ans.

Live site: https://kde.fr/

## Stack

- [Astro](https://astro.build/) 7 (static output)
- SCSS — [Dimension](https://html5up.net/dimension) template by HTML5 UP
- Vanilla TypeScript for panel navigation

## Development

Requires Node 22+ (see `.node-version`).

```bash
fnm use 22   # or nvm use 22
npm install
npm run dev
```

Open http://localhost:4321/

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format JS, Astro, and TS with Prettier |
