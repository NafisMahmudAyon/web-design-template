# Workflow Rule: "new-template" Execution Protocol

When the user gives the command **`new-template`** in chat (or asks to process the next pending template), you MUST follow this exact, automated end-to-end pipeline:

## Step 1: Trigger Automation Script & Fetch Pending Data
Run:
```bash
node scripts/new-template.js
```
This script automatically:
1. Communicates with the Google Apps Script Web App URL (`https://script.google.com/macros/s/AKfycbxO1Ukc2baTIAkk9QilFkRqf7gaavuSzVeOf0ODfnz2gpayRCU6Wl8JYNN4X5lYM56C/exec`).
2. Grabs the first pending template row (e.g. `template-13`, Row 2).
3. Creates the target directory (e.g., `template-13/`).
4. Downloads the preview images into `template-13/design sections/`.
5. Scaffolds Vite, React, Tailwind CSS, Framer Motion, and starter components.

## Step 2: Visual Inspection of Downloaded Design
1. View the images in `<template-name>/design sections/` using `view_file` on the image files (e.g., `Full Page.png`, `section-1.png`, etc.).
2. Deconstruct the design thoroughly:
   - Color palette (backgrounds, accents, gradients, glass effects, borders).
   - Typography hierarchy (hero titles, section headers, badges, body copy, stat numbers).
   - Component architecture (Navbar/Header, Hero, Feature grids, Showcase, Testimonials, CTA, Footer).
   - Layout geometry (cards, rounded corners, pill tags, spacing, icons).

## Step 3: Code Generation & Design Replication
Replicate the design in React code inside `<template-name>/src/`:
1. Use **Framer Motion** for:
   - Scroll-triggered reveals (`whileInView`, `viewport={{ once: true }}`).
   - Smooth entrance animations (`initial`, `animate`, `transition`).
   - Interactive hover lift, scale, and subtle glowing effects.
2. Ensure full responsiveness across all screen sizes (mobile, tablet, desktop).
3. Use Lucide React icons (`lucide-react`) matching the icons visible in the design.
4. Separate code cleanly into modular section components in `<template-name>/src/components/`.

## Step 4: Visual Verification via Browser Subagent
1. Launch the local dev server:
   ```bash
   cd <template-name>
   npm run dev
   ```
2. Use the `browser_subagent` to open the local URL, capture screenshots, and visually inspect:
   - Does it match the design preview in `design sections/`?
   - Are animations smooth?
   - Are there any console errors or styling flaws?
   - Adjust any discrepancies until pixel-perfect.

## Step 5: Mark Completed in Google Apps Script
Once visual parity and quality are verified, run:
```bash
node scripts/update-status.js --row <rowNumber> --status Completed
```
Or execute the POST fetch:
```javascript
await fetch(WEB_APP_URL, {
  method: 'POST',
  body: JSON.stringify({ rowNumber: row.rowNumber, status: 'Completed' })
});
```

## Step 6: Loop / Next Template
Notify the user of the completed template with a summary, and proceed to the next pending template if requested.
