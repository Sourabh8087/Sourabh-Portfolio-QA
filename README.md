# Sourabh Chavan — QA Portfolio

A single-page portfolio site for a QA / Test Automation Engineer. Pure HTML, CSS and
JS — no build step, no framework, no photo. Built to be hosted for free on GitHub Pages.

## What's inside
```
index.html                          → the entire site (structure + styles + script)
assets/Sourabh_Chavan_Resume.pdf    → resume, linked from the nav "Resume" button
```

## Before you publish — 2 things to update
1. **LinkedIn URL** — open `index.html`, find this line near the bottom `<script>` block:
   ```js
   document.getElementById('linkedinLink').setAttribute('href', 'https://www.linkedin.com/in/your-profile');
   ```
   Replace `your-profile` with your real LinkedIn handle.
2. **Portfolio link** — once this is live on GitHub Pages, add that URL to your resume
   and LinkedIn "Portfolio" field.

Everything else (name, role, experience, projects, certifications, skills, contact
details) was pulled directly from your resume — double check it still matches once you
update your resume in future.

## How to publish on GitHub Pages (free, ~2 minutes)
1. Create a new **public** GitHub repository, e.g. `sourabh-portfolio`.
2. Upload `index.html` and the `assets/` folder to the repo (drag-and-drop on
   github.com works fine, or `git push` if you use Git locally).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch
   `main`, folder `/ (root)`. Save.
5. GitHub gives you a link like `https://yourusername.github.io/sourabh-portfolio/`
   after a minute — that's the link you can put anywhere (resume, LinkedIn, email
   signature).

## Customizing
- **Colors / fonts**: all defined once at the top of `index.html` inside `:root { ... }`
  in the `<style>` block — change a value there and it updates everywhere.
- **Content**: every section is plain HTML with clear comments (`<!-- ===== SECTION ===== -->`)
  so you can find and edit text directly.
- **Contact form**: it has no backend — submitting it opens the visitor's email app
  pre-addressed to you (a `mailto:` link). That's intentional for a static, free-to-host
  site; if you later want real form submissions without a backend, services like
  Formspree or Web3Forms can be dropped in with a couple of lines.

## Notes
- No personal photo is used anywhere, by request — the hero uses an animated
  terminal panel instead, which fits a QA/automation identity.
- The site is fully responsive (phone/tablet/desktop) and respects
  "reduce motion" accessibility settings.
