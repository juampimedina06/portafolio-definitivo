# Proposal: GSAP & Visual Enhancement

## Intent
Elevate the portfolio's visual fidelity and interactivity to a "crack" designer level by integrating GSAP ScrollTrigger animations and high-quality imagery while maintaining the core Swiss Style principles.

## Scope

### In Scope
- Integrate GSAP ScrollTrigger across all main components.
- Implement text reveal, image mask reveal, and staggered list animations.
- Generate and place 3-5 high-quality abstract images using `generate_image`.
- Add visual "grid" line animations between sections.
- Refine typography scale and whitespace for a more dynamic look.

### Out of Scope
- Changing the monochrome color palette.
- Adding complex 3D scenes (Three.js) unless strictly requested later.
- Modifying the underlying 12-column grid structure.

## Approach
Use GSAP `ScrollTrigger` to create a "reveal on scroll" experience. Each section will have a trigger that fires a timeline of subtle animations:
1. Grid lines drawing in.
2. Text blocks fading/sliding in with staggers.
3. Images revealing through rectangular masks.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `app/components/Hero.tsx` | Modified | Add parallax monogram and text reveal. |
| `app/components/About.tsx` | Modified | Add image reveal and bio text stagger. |
| `app/components/Portafolio.tsx` | Modified | Add staggered reveal for project items. |
| `app/components/Experiences.tsx` | Modified | Add line animations and stagger. |
| `app/globals.css` | Modified | Add helper classes for GSAP hooks. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Performance lag on scroll | Med | Use `will-change` and optimize scroll triggers. |
| "Over-designed" look | Low | Adhere strictly to Swiss minimalism (sharp edges, monochrome). |

## Rollback Plan
Revert changes to the `app/components` files using git. The logic is self-contained in `useEffect` hooks.

## Success Criteria
- [ ] All sections animate smoothly on scroll.
- [ ] Visual fidelity is perceptibly higher with new images.
- [ ] No performance drops on mobile devices.
