# Elprofessor BuildLab

Multilingual learning platform for BIM, sustainable construction and digital workflows.

## Local Development

```bash
npm install
npm run dev
```

Astro will print the local preview URL, usually `http://localhost:4321`.

## Useful Commands

```bash
npm run check
npm run build
npm run preview
```

## Content Model

- Subjects live in `src/data/subjects.ts`.
- Video placeholders and future embeds live in `src/data/videos.ts`.
- Lesson templates live in `src/data/lessons.ts`.
- Shared Danish, English, and Arabic interface text lives in `src/i18n.ts`.

The first public version is Danish-only. The data model keeps room for English and Arabic later, but the generated routes and visible navigation are currently Danish.

Do not commit video files to this repository. Store public videos on YouTube and student-only videos on Panopto, unlisted YouTube, or another access-controlled provider. Keep only metadata and links in the repo.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: set `NODE_VERSION` to `22.12.0` or newer.

The project is static-first and does not require a server adapter for the initial version.

## GitHub Pages

This repository includes a GitHub Actions workflow for GitHub Pages.

Live URL after deployment:

```text
https://elprofessor1990.github.io/Elprofessor-buildlab/
```

If GitHub Pages still shows 404 after the workflow has run, open repository settings and choose:

- Settings -> Pages
- Source: `GitHub Actions`
