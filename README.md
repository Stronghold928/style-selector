# Transitional Modern — Stronghold 928

Static site showcasing three interior design directions (Transitional Modern,
Organic Modern, European Modern) for the Stronghold 928 brief.

## Live site

Once deployed, the site is served from GitHub Pages at:

```
https://<your-username>.github.io/<repo-name>/
```

## Project layout

```
.
├── index.html              # Entry point
├── src/                    # JSX components (Babel-transformed in browser)
│   ├── app.jsx             # Mounts <App /> into #root
│   ├── styles-data.jsx     # Style definitions + tokens
│   ├── shared.jsx          # Layout primitives (TopBar, SectionHead, etc.)
│   ├── cover.jsx           # Cover / hero section
│   ├── glance.jsx          # At-a-glance comparison
│   ├── dna.jsx             # Style DNA section
│   ├── method.jsx          # Process / method section
│   ├── splurge.jsx         # Splurge vs save section
│   └── tweaks-panel.jsx    # Floating tweaks UI
├── assets/
│   └── moodboards/         # Moodboard imagery (.png)
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions → Pages deploy
└── .nojekyll               # Tells Pages to skip Jekyll processing
```

No build step is required — `index.html` pulls React, ReactDOM, and
`@babel/standalone` from a CDN and transpiles the `.jsx` files in the
browser. This keeps the repo deployable as a pure static site.

## Local development

Because the JSX files are loaded with `<script src>`, you need to serve
the folder over HTTP (opening `index.html` from `file://` will hit CORS
errors). Any static server works:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open <http://localhost:8000>.

## Deploying to GitHub Pages

1. **Push this repo to GitHub** on the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs automatically on
   every push to `main` and on manual dispatch. After the first
   successful run, the site is live at the URL shown in the workflow
   summary and in **Settings → Pages**.

### How the workflow works

The workflow has two jobs:

- **build** — checks out the repo, calls `actions/configure-pages`, and
  uploads the repo root as a Pages artifact via
  `actions/upload-pages-artifact`.
- **deploy** — calls `actions/deploy-pages` to publish the artifact.

No Node, no bundler, no build cache to manage. If you later add a build
step (e.g. precompile the JSX with Vite for production), wire it into
the **build** job and point the upload action at the output directory.
