# Tasks: GSAP & Visual Enhancement

## Phase 1: Global Styles & Hooks
- [ ] 1.1 Add `.reveal-text`, `.reveal-mask`, and `.grid-line` utility classes in `app/globals.css`.
- [ ] 1.2 Create a `useGsap` or `useScrollReveal` hook if needed for reusable animation logic.

## Phase 2: Hero & About Enhancement
- [ ] 2.1 Generate 2 abstract "Swiss Style" images (black/white/gray) for the Hero and About sections using `generate_image`.
- [ ] 2.2 Update `app/components/Hero.tsx`: Implement parallax on the "JPM" monogram and stagger reveal for the main heading.
- [ ] 2.3 Update `app/components/About.tsx`: Add the new abstract image with a rectangular mask reveal and bio text stagger.

## Phase 3: Work & Experience Enhancement
- [ ] 3.1 Update `app/components/Experiences.tsx`: Add horizontal "grid lines" that animate into position on scroll.
- [ ] 3.2 Update `app/components/Portafolio.tsx`: Implement a staggered project reveal (video previews sliding up into the grid).
- [ ] 3.3 Update `app/components/Certifications.tsx` and `app/components/Skills.tsx`: Add subtle text reveals.

## Phase 4: Final Polish
- [ ] 4.1 Update `app/components/NavBar.tsx` and `app/components/Footer.tsx` with subtle line animations.
- [ ] 4.2 Verify all animations are performant and correctly triggered.
