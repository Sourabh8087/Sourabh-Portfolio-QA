# Sourabh Chavan — Portfolio

A static one-page portfolio built from scratch: plain HTML, CSS, and JS — no build step, no dependencies.

## Structure

```
index.html   — page content + all styling (CSS is inlined in <style>, so this file is self-contained)
script.js    — nav, scroll reveal, checklist/stat animations
assets/      — resume PDF (linked from the nav and contact section)
```

Styling is inlined directly into `index.html` on purpose — that way the page always renders correctly no matter how it's opened (double-clicked, previewed on its own, dragged into a browser), with no risk of a missing stylesheet leaving it unstyled.

## Run it locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to Vercel (replacing the current live site)

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd portfolio
vercel --prod
```
When prompted, choose the existing `sourabh-chavan-portfolio` project so it deploys to the same URL.

**Option B — Git**
1. Push this folder to a GitHub repo (or your existing portfolio repo, replacing its contents).
2. In the Vercel dashboard, open your existing project → **Settings → Git** → make sure it points at that repo/branch.
3. Push to the connected branch — Vercel redeploys automatically.

No framework preset or build command is needed — set **Framework Preset** to "Other" and leave build/output settings blank; Vercel will serve `index.html` as-is.

## Updating content later

- **Resume PDF**: replace `assets/Sourabh_Chavan_Resume.pdf` with a new export (keep the same filename, or update the two links in `index.html`).
- **Projects/experience/skills**: all content lives directly in `index.html`, grouped under clearly commented sections (`HERO`, `EXPERIENCE`, `PROJECTS`, `SKILLS`, `CONTACT`).
- **Colors/fonts**: all design tokens are CSS custom properties at the top of the `<style>` block in `index.html`, under `:root`.
