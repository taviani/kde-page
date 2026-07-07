# KDE minisite

**Un site pour dire au revoir**

Petite présentation statique de mon activité en tant qu'indépendant pendant 13 ans.

## Stack

- [Astro](https://astro.build/) (static site)
- SCSS (HTML5 UP Dimension template)

## Development

Requires Node 22+.

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

## Deploy

Deployment runs via GitHub Actions on push to `master` (or manually from the Actions tab).

Configure these repository secrets under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `DEPLOY_SSH_KEY` | Private SSH key for the deploy user — **no passphrase** (required for CI) |
| `DEPLOY_USER` | SSH username with write access to the web root (e.g. `deploy`) |
| `DEPLOY_HOST` | Server hostname |
| `DEPLOY_PATH` | Absolute path to the web root, trailing slash (e.g. `/var/www/kde/`) |

The deploy user only needs SSH access and write permission on the target directory — no root login required.

Hard-refresh https://kde.fr/ after deploy.
