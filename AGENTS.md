# Workspace Guidelines: Web Design Template Engineering & UI/UX Standards

This repository specializes in turning static Figma/UI design mockups into pixel-perfect, living, production-grade React web templates.

---

## 1. Static Mockup UI/UX Interpretation Rules (Non-Negotiable)

Static design files freeze dynamic web interactions in a single visual screenshot. You must ALWAYS decode designer intent correctly without introducing layout instability:

### A. The "One Different Card" Rule & Zero-CLS Spacing Stability
- **Visual Clue**: A row or grid of 3, 4, 5, or more similar cards where ONE card is highlighted, expanded, has a white background instead of dark, or shows extra details.
- **Rule**: **NEVER hardcode that card as permanently different, and NEVER allow hover states to fluctuate section height.**
- **Implementation**:
  - Without hover: all cards share identical resting baseline design.
  - On hover/focus: THAT specific card dynamically adopts the active style.
  - **Zero Height Fluctuation (Zero CLS)**: The outer card container must have a **stable, fixed height** (e.g. `h-[440px] sm:h-[460px]`). In inactive cards, media fills the space; in active cards, media flexes while the content drawer slides into the reserved space. The parent section height must NEVER jump or jitter on hover.

### B. Carousels / Horizontal Sliders vs. Hover Distinction (Prevent Layout Breaks)
- **Visual Clue**: A horizontal track of cards with carousel navigation buttons (`Prev` / `Next` arrows, pagination dots), where one card is wide/featured and the rest are compact.
- **Rule**: **The featured card is the ACTIVE CAROUSEL SLIDE, NOT A MOUSE HOVER TRIGGER.**
- **Implementation**:
  - **NEVER attach width-expanding layout changes (`w-80` to `w-[480px]`) to mouse hover in a carousel.** It pushes adjacent cards and breaks track geometry.
  - Advance the active featured slide via **navigation buttons (Prev/Next)** or clicking a card directly.
  - **Hover on carousel cards must ONLY trigger subtle micro-interactions** (subtle image zoom `group-hover:scale-105`, slight lift `-translate-y-1`, border glow) that never mutate card dimensions.

### C. Scroll-Driven Illumination & Gradient Progress (Light-to-Dark Sections)
- **Visual Clue**: A section where one part is noticeably darker and another part is lighter, or where background lighting transitions down the section.
- **Rule**: This is a **scroll-driven section**, not a static background artifact.
- **Implementation**:
  - Connect the section's opacity, background luminance, or card highlights to scroll position using `useScroll` and `useTransform`.
  - As the user scrolls through the section, background tone smoothly deepens or illuminates.

### D. Horizontal Stacks with Faded Edges (Infinite Marquee & Carousels)
- **Visual Clue**: Identical components horizontally aligned that fade to transparent at the left and right borders of the screen.
- **Rule**: This is an **infinite continuous marquee** or **edge-masked carousel**.
- **Implementation**:
  - Apply dual gradient masks:
    `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);`
    `-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);`
  - Implement infinite horizontal scroll animation (with pause on hover) or smooth draggable carousel.

---

## 2. Visual Asset Sourcing & Quality
- Never use crops of mockups that contain baked-in text, UI buttons, or overlap artifacts.
- When an asset is needed, source editorial-grade photography from Unsplash/Pexels or generate photorealistic assets with AI (`generate_image`).
- Transparent subject cutouts (e.g. athletes, products) must have clean transparent alpha channels with zero rectangular box edges.

---

## 3. Tech Stack & Framework Standards
- **Core**: React + Vite + Tailwind CSS + Framer Motion + Lucide React.
- **Component Modularity**: Keep sections modular inside `src/components/`.
- **Validation**: Ensure `npm run build` exits with code 0 before concluding.
