# Publish and update this portfolio with GitHub Pages

This project now has a separate static build for GitHub Pages. The existing
portfolio source remains the single place to update content and design.

## First publication

1. On GitHub, create a **public** repository named `sharears.github.io`.
2. Put this complete project in that repository and push it to the `main` branch.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the repository's **Actions** tab and wait for
   **Deploy portfolio to GitHub Pages** to finish.

The public address will be:

`https://sharears.github.io`

## Update the portfolio later

Edit the relevant source file, commit the change, and push it to `main`.
GitHub automatically rebuilds and republishes the site.

Common files:

- Home page and shared portfolio content: `app/page.tsx`
- Research page: `app/research/page.tsx`
- Publications page: `app/publications/page.tsx`
- Teaching documents and sample materials: `app/teaching/`
- Service and outreach page: `app/service/page.tsx`
- Site-wide appearance: `app/globals.css`
- Images and downloadable PDFs: `public/`

## Check the static build before publishing

```bash
npm ci
npm run build:pages
```

The finished static site is written to `out/`. Do not edit that folder by hand;
GitHub recreates it from the source whenever you push an update.
