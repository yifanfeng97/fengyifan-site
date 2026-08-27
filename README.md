# fengyifan-site

Personal homepage of Yifan Feng — <https://fengyifan.site>

Built with [Astro](https://astro.build). All site code lives in [`site/`](site/);
content is edited in the bilingual data files under `site/src/data/`.

## Develop

```
cd site
npm install
npm run dev
```

## Build & preview

```
cd site
npm run build     # outputs to site/dist
npm run preview
```

## Deploy

Every push to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds `site/` and publishes
`site/dist` to the `gh-pages` branch. The custom domain is kept via
`site/public/CNAME` (`fengyifan.site`).
