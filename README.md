# Sai Keerthana Bala | SDET Portfolio

Static portfolio site: plain HTML, CSS and JavaScript. No build step.

## Structure
- `index.html` - page content (search for `[` to find placeholders to fill in)
- `css/style.css` - styles, light/dark theme tokens at the top
- `js/main.js` - theme toggle, sample test run, project pop-ups, skills search
- `assets/` - put your photo and resume PDF here
- `.github/workflows/deploy.yml` - deploys to GitHub Pages on every push to `main`

## Run locally
```
python -m http.server 4321
```
Open http://localhost:4321

## Deploy (GitHub Pages)
1. Push to the `main` branch.
2. In the repo go to Settings > Pages > Source and choose **GitHub Actions**.
3. Each push to `main` then publishes the site.

Prefer Netlify or Vercel? Import the repo, leave the build command empty and set the publish directory to `/`.
