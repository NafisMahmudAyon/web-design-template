---
name: ui-ux-design-patterns
description: Expert UI/UX engineering guide for interpreting static design mockups (Figma/images) into living, interactive web components. Covers card polymorphism & hover-driven active states ("one different card" pattern), zero layout shift (CLS) height stability, carousel active slide vs hover distinction, scroll-driven lighting/gradients, and edge-faded infinite marquees.
---

# UI/UX Design Patterns & Static-to-Interactive Translation

This skill teaches how to decode static visual artifacts into dynamic, fluid web applications without causing layout shifting (CLS) or breaking component flows.

---

## 1. The "One Different Card" Pattern & Zero-CLS Spacing Stability

### The Designer's Intent
In a static Figma design, when a section displays 3, 4, or 5 cards of the same nature in a grid (e.g. 5 session cards, 3 pricing tiers, 4 service offerings), and **one card looks different** (e.g. white background instead of dark, expanded with descriptions and buttons, highlighted ring, or larger scale):
- **NEVER hardcode that single card as permanently different.**
- **The different card is the design demonstration of the ACTIVE / HOVER STATE!**

### The Layout Fluctuation Trap (CRITICAL)
- **The Mistake**: Allowing the active drawer to increase the card's outer height dynamically (e.g. expanding from `h-80` to `h-[450px]`). This causes the entire section height to fluctuate, jump, and jolt as the user hovers across cards.
- **The Solution (Zero CLS)**:
  1. Give the card container a **fixed, identical outer height** across all states (e.g., `h-[440px] sm:h-[460px] flex flex-col justify-between`).
  2. In the resting card (`!isActive`), the media area occupies the entire card (`h-full`).
  3. In the active card (`isActive`), the media area flexes (`h-[280px]`), and the bottom white content drawer slides in (`h-[170px]`).
  4. The total height of every card remains **exactly 460px** whether active or inactive. The parent grid and page section have **ZERO height fluctuation**.

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function StableInteractiveGrid({ items }) {
  const [activeId, setActiveId] = useState(items[1]?.id || items[0]?.id);

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch"
      onMouseLeave={() => setActiveId(items[1]?.id)}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
            className="flex flex-col cursor-pointer group"
          >
            {/* Constant Outer Height: h-[450px] - NEVER fluctuates */}
            <div
              className={`relative h-[450px] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                isActive
                  ? 'ring-2 ring-[#E2F844] shadow-2xl bg-white'
                  : 'border border-white/10 hover:border-white/30 bg-[#0e2118]'
              }`}
            >
              {/* Internal Media Area Flexes Gracefully */}
              <div className={`relative overflow-hidden transition-all duration-300 ${isActive ? 'h-[285px] flex-shrink-0' : 'h-full'}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <h4 className="absolute bottom-4 left-4 font-bold text-lg text-white">{item.title}</h4>
              </div>

              {/* Fixed Content Drawer Allocation: Zero Layout Shift */}
              {isActive && (
                <div className="h-[165px] p-4 bg-white text-gray-900 flex flex-col justify-between flex-shrink-0">
                  <p className="text-xs text-gray-600 line-clamp-3">{item.description}</p>
                  <button className="text-xs font-bold text-emerald-900 hover:text-black">
                    {item.ctaText || 'Learn More'}
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

---

## 2. Carousel / Slider vs. Hover Distinction (Preventing Track Reflow Breaks)

### The Designer's Intent
In a horizontal carousel (e.g. course showcase, customer stories) with **navigation controls (Prev/Next buttons, pagination arrows)**:
- One card is shown wide/featured (`w-[480px]`), while others are compact (`w-[320px]`).
- **THIS IS THE ACTIVE SLIDE IN THE CAROUSEL, NOT A HOVER TRIGGER!**

### The Width-Expansion Trap (CRITICAL)
- **The Mistake**: Attaching width changes (`w-80` $\rightarrow$ `w-[480px]`) to mouse hover. Moving the mouse across cards causes adjacent cards to be shoved sideways, breaks scroll boundaries, and causes chaotic layout reflows.
- **The Solution**:
  1. The **featured card is position-driven** (e.g. `idx === 0` in the visible window is the active featured card).
  2. The active slide changes via **navigation buttons (Prev/Next)** or clicking a card directly (`onClick={() => setStartIndex(selectedIdx)}`).
  3. **Hover on carousel cards must ONLY trigger subtle micro-interactions** (subtle image zoom `group-hover:scale-105`, slight lift `-translate-y-1`, border highlight) without mutating dimensions!

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function StableCarousel({ items }) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => setStartIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + items.length) % items.length);

  const visibleItems = [
    items[startIndex % items.length],
    items[(startIndex + 1) % items.length],
    items[(startIndex + 2) % items.length],
  ];

  return (
    <div className="relative">
      {/* Edge-faded horizontal track */}
      <div className="overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent)]">
        <div className="flex gap-6 py-4 px-6">
          {visibleItems.map((item, idx) => {
            const isFeatured = idx === 0;

            if (isFeatured) {
              return (
                <div key={item.id} className="w-[480px] flex-shrink-0 bg-white text-gray-900 rounded-3xl p-6 shadow-2xl">
                  {/* Active Featured Slide */}
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <img src={item.image} alt={item.title} className="mt-4 rounded-xl aspect-[16/9] object-cover" />
                </div>
              );
            }

            return (
              <div 
                key={item.id} 
                onClick={() => setStartIndex((prev) => (prev + idx) % items.length)}
                className="w-[320px] flex-shrink-0 rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer hover:-translate-y-1 transition-transform"
              >
                {/* Compact Slide: Clicking promotes it to featured slide */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Stable Carousel Controls */}
      <div className="flex gap-3 mt-6">
        <button onClick={handlePrev}><ArrowLeft /></button>
        <button onClick={handleNext}><ArrowRight /></button>
      </div>
    </div>
  );
}
```

---

## 3. Scroll-Driven Illumination & Progress (Light-to-Dark Sections)

### The Designer's Intent
When a mockup shows a section where one part is lighter and another part is darker, or background tones fade as content progresses down the page, it represents a **Scroll-Driven Progressive Section**.

### Implementation Architecture
Use `framer-motion`'s `useScroll` and `useTransform` hooks:
```jsx
const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
const bgOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.2, 0.85, 1]);
```

---

## 4. Horizontal Stacks with Fading Edges (Infinite Marquee)

Always apply CSS gradient mask:
```css
mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
```

---

## 5. Review Checklist for Zero-CLS & Layout Stability

- [ ] Does any card expansion cause the parent grid or section height to jump? **Fix**: Use fixed outer card height (`h-[450px]`) and flex internal media.
- [ ] Does a horizontal carousel change card widths (`w-80` to `w-[480px]`) on mouse hover? **Fix**: Move featured slide state to navigation controls and clicks; keep hover limited to non-layout-breaking micro-interactions.
- [ ] Are edge-faded horizontal components static? **Fix**: Apply CSS mask gradient and infinite marquee or smooth track.
