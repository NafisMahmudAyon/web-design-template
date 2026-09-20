---
name: new-template
description: Orchestrates automated fetching of pending design templates from Google Apps Script, scaffolding the template workspace, downloading Figma design images, replicating the design to pixel-perfect React code with scroll/motion animations, verifying via browser, and updating completion status.
---

# New Template Orchestration Skill

Use this skill whenever the user asks for `new-template`, creating a new template from Figma/queue, or processing the next pending template.

## Workflow Instructions

1. **Fetch & Scaffold**:
   Execute:
   ```bash
   node scripts/new-template.js
   ```
   This pulls the pending item from Google Apps Script (or the local queue fallback), creates the template folder, downloads design images to `<template>/design sections/`, and sets up the React/Vite/Tailwind boilerplate.

2. **Inspect Visual Assets & Decode Designer Intent**:
   Use `view_file` on the downloaded screenshots in `<template>/design sections/`.
   **Decode static design mockups into interactive behavior**:
   - **"One Different Card" Pattern (Card Polymorphism)**: If 3, 4, or 5 cards look similar and one card is styled differently (e.g. white instead of dark, expanded drawer, highlighted border), that card represents the **HOVER / ACTIVE STATE**. In resting state without hover, all cards must look uniform; on hover (`onMouseEnter`), THAT hovered card dynamically transforms into the active state. Never hardcode one card permanently different!
   - **Scroll-Driven Lighting / Darkening**: Sections with progressive light-to-dark backgrounds or step illumination are scroll-driven triggers (`useScroll`, `useTransform`).
   - **Fading Edge Horizontal Stacks**: Horizontal stacks fading at both ends are infinite marquees or edge-masked carousels (`mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`).
   - **Interactive Accordions**: Expanding/collapsing rows with smooth height transitions on hover or click.

3. **Replicate Design**:
   Follow the refined prompt guidelines in `prompt.txt` to implement the landing page with:
   - Dynamic hover-driven card polymorphism & interactive states
   - Framer Motion scroll animations and layout springs
   - Tailwind CSS design system with exact color tokens
   - Responsive layout from mobile to desktop
   - Clean photographic assets from Unsplash/Pexels or AI generation (no baked-in text crops, no placeholder boxes)
   - Interactive modals/drawers
   - Lucide React icons

4. **Verify in Browser**:
   Start dev server (`npm run dev`) and run `browser_subagent` to visually review the page against the Figma design.
   Verify:
   - Hovering over cards dynamically transforms the hovered card into the active state.
   - Marquee components scroll smoothly with gradient edge fades.
   - All images are crisp, authentic, and free of duplicate text or cropping artifacts.

5. **Update Google Apps Script**:
   ```bash
   node scripts/update-status.js --row <rowNumber> --status Completed
   ```
