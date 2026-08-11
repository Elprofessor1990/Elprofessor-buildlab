# Elprofessor BuildLab — Codex Project Brief

## Project purpose

Build a multilingual learning platform for construction technology and sustainable building design. The platform is owned by Ali Kadum Hassan, engineer and lecturer. Its purpose is to make complex construction topics practical through videos, structured learning paths, exercises, and supplementary materials.

## Brand

- **Name:** Elprofessor BuildLab
- **Tagline:** Learn · Design · Build
- **Primary audience:** Students and construction professionals.
- **Languages:** Danish, English, and Arabic. Keep the brand name unchanged in every language.
- **Tone:** Clear, professional, practical, evidence-based, and welcoming.

### Visual system

- Navy: `#112A46`
- Orange: `#F28C28`
- Mint: `#46C2A8`
- Sand: `#F5F2EA`
- White: `#FFFFFF`

Use generous whitespace, high contrast, modern sans-serif typography, and simple geometric construction-inspired details. Avoid clutter, generic stock imagery, and decorative effects that reduce readability.

## Planned content areas

Create a scalable structure for these subjects:

1. BIM
2. AI in construction
3. pyRevit
4. Semester 3
5. Semester 4
6. Semester 5
7. Building physics
8. NBS Nordic
9. LCAbyg — whole-building life-cycle assessment
10. LCCbyg — building life-cycle costing
11. FEM-Design

Each subject must be able to contain a description, learning objectives, video lessons, downloadable material, exercises, and links.

## Video and material strategy

- Do **not** store video files in the Git repository.
- Use embedded YouTube videos for public material.
- Use Panopto, unlisted YouTube videos, or another access-controlled provider for student-only material.
- Store video metadata, descriptions, lesson order, and resource links in the website repository.
- Do not publish student data, internal institutional material, copyrighted documents, or credentials.

## Technical direction

- Repository: `elprofessor-buildlab`
- Hosting: Cloudflare Pages connected to GitHub.
- Prefer a fast static-first site using Astro, TypeScript, and clean component-based architecture.
- The site must be responsive, accessible, and easy to update.
- Keep course and video content separate from page layout so new lessons can be added without changing components.
- Use GitHub commits with short, descriptive messages.

## Initial website scope

Build a first version with:

1. A front page with brand, purpose, and subject overview.
2. Subject cards for the 11 content areas.
3. A video library layout with filtering by subject and language.
4. A lesson page template with video embed, objectives, resources, and next lesson.
5. An About page for Ali Kadum Hassan and AKLCA.
6. Language-ready navigation for Danish, English, and Arabic. Arabic pages must support right-to-left text.
7. Clear placeholders where real videos and materials will later be added.

## Working rules for Codex

- Inspect the repository before changing files.
- Explain the proposed implementation briefly before major changes.
- Build the smallest useful version first, then improve it iteratively.
- Do not invent factual course material, legal guidance, citations, or video links.
- Keep all visible text easy to translate.
- Before deployment, run the available checks and fix errors.
- Do not change hosting, privacy, or licensing settings without explicit approval.

## First task

Create the initial Astro website in this repository. Use the brand system above and create polished placeholder content for the front page, topic cards, video library, and one lesson page. Then provide local preview instructions and prepare the project for Cloudflare Pages deployment.
