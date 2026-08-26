# Elprofessor BuildLab

Elprofessor BuildLab is a static Astro website for practical construction teaching, BIM workflows, sustainable building design, and digital construction tools.

Live site:

```text
https://elprofessor1990.github.io/Elprofessor-buildlab/
```

## Current Website Structure

The site currently includes:

- A front page with the Elprofessor BuildLab brand and a clickable subject overview.
- Individual subject pages with a short introduction, expected video types, connected subjects, resources, and videos.
- A video library with subject filtering.
- Video detail pages with YouTube embeds and playlist context.
- An About page for Ali Kadum Hassan and AKLCA.

## Current Subjects

- BIM
- AI
- pyRevit
- Dalux
- Building Physics / Bygfys
- NBS Nordic
- LCAByg
- LCCByg
- FEM-Design

Semester 3, Semester 4, and Semester 5 have been removed from the public subject structure.

## Video Content

The repository stores video metadata and links, not video files.

Current public YouTube content includes:

- Dalux playlist with 2 videos.
- NBS Nordic playlist with 7 videos.
- LCAByg videos and placeholders.

Do not commit video files to this repository. Store public videos on YouTube and student-only videos on Panopto, unlisted YouTube, or another access-controlled provider. Keep only metadata, lesson descriptions, ordering, and resource links in the repo.

## Content Model

- Subjects live in `src/data/subjects.ts`.
- Subject-page overview text lives in `src/data/subjectHubs.ts`.
- Video metadata and embeds live in `src/data/videos.ts`.
- Lesson templates live in `src/data/lessons.ts`.
- Shared interface text lives in `src/i18n.ts`.
- Subject pages are generated from `src/pages/subjects/[slug].astro`.
- Video pages are generated from `src/pages/videos/[id].astro`.

The visible site is currently Danish-first. The data model keeps room for English and Arabic content later.

## Local Development

```bash
npm install
npm run dev
```

Because the project is configured for GitHub Pages with `base: "/Elprofessor-buildlab"`, the local preview URL is usually:

```text
http://127.0.0.1:4321/Elprofessor-buildlab/
```

## Useful Commands

```bash
npm run check
npm run build
npm run preview
```

## GitHub Pages

This repository deploys to GitHub Pages through GitHub Actions.

Deployment workflow:

```text
.github/workflows/deploy.yml
```

GitHub Pages settings should use:

- Source: `GitHub Actions`
- Build command: `npm run build`
- Build output directory: `dist`

## Cloudflare Pages

The project can also be connected to Cloudflare Pages if needed.

Recommended Cloudflare Pages settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.12.0` or newer

The project is static-first and does not require a server adapter.
