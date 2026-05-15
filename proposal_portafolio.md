# Proposal: Immersive Horizontal Project Showcase

## Intent
Transform the static project list into a dynamic, horizontal scrolling experience that captures attention and demonstrates high-level GSAP mastery.

## Scope
- Rebuild `Portafolio.tsx` to use a sticky horizontal scroll container.
- Implement large-scale parallax typography for project titles.
- Add "Magnetic" hover interactions for buttons.
- Integrate "Perspective" tilt effects on project previews.

## Approach
1. Create a `container` that is `h-[400vh]` (long enough to scroll).
2. Pin the section using `ScrollTrigger`.
3. Animate the `x` position of a horizontal "wrapper" based on the vertical scroll progress.
4. Add staggered entry animations for each project's details.

## Affected Areas
- `app/components/Portafolio.tsx` (Major refactor)
- `app/globals.css` (Add custom cursor and perspective helpers)

## Rollback Plan
Revert to the previous `Portafolio.tsx` version.
