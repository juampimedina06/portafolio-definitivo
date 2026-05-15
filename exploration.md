## Exploration: GSAP & Visual Enhancement

### Current State
The portfolio has a solid 12-column grid and a clean monochrome Swiss aesthetic. However, it lacks dynamic interactions and "wow" factors (animations, high-quality visuals) that make it feel like a "crack" designer's site.

### Affected Areas
- `app/components/Hero.tsx` — Add GSAP parallax and reveal animations.
- `app/components/About.tsx` — Add image mask reveals and text animations.
- `app/components/Portafolio.tsx` — Add scroll-triggered project list animations.
- `app/components/Experiences.tsx` — Add line animations and stagger effects.
- `app/globals.css` — Add custom animation classes and maybe some "grid" lines that animate.

### Approaches
1. **Subtle & Structured (Swiss Core)** — Keep the grid visible and use GSAP to animate components *into* their grid positions.
   - Pros: Maintains the Swiss identity, feels extremely professional.
   - Cons: Might feel too "stiff" for some.
   - Effort: Medium

2. **Experimental & Dynamic (Crack Designer)** — Use heavy GSAP ScrollTrigger for parallax, horizontal scrolling sections, and large animated typography.
   - Pros: Huge "wow" factor, feels very modern.
   - Cons: Can easily become distracting or break the minimalist "Swiss" rules if not careful.
   - Effort: High

### Recommendation
I recommend **Approach 1 with elements of Approach 2**. We use GSAP `ScrollTrigger` to animate every section with a "reveal" effect (staggered text, line expansion, image masks) and add some high-quality abstract images to the Hero and About sections to elevate the visual fidelity.

### Risks
- **Performance**: Heavy GSAP animations on multiple sections can impact scroll smoothness if not optimized.
- **Clutter**: Over-animating can ruin the clean Swiss aesthetic.

### Ready for Proposal
Yes — I will propose a plan to integrate GSAP ScrollTrigger across all sections and add professional imagery.
