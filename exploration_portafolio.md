## Exploration: Immersive Project Showcase

### Current State
Projects are listed in a 12-column grid, stacking vertically. While clean, it's a bit "standard".

### Proposed Enhancement: The "Horizontal Gallery"
Instead of simple vertical stacking, we can use GSAP `ScrollTrigger` to pin the "Selected Work" section and scroll the projects horizontally. This is a hallmark of high-end portfolio designs.

### Key Visual Elements
- **Horizontal Scroll**: Users scroll vertically, but projects move horizontally across the screen.
- **Large Typographic Overlays**: Project titles in massive font sizes (e.g., `20vw`) that move at a different speed (parallax) than the project videos.
- **Magnetic / Cursor Effects**: Adding a custom cursor or magnetic effect to the "View Source" buttons.
- **Entrance Shuffle**: Animating the project titles with a character-by-character "shuffle" reveal.

### Risks
- **Complexity**: Horizontal scroll can be tricky for mobile if not handled correctly.
- **Accessibility**: Ensuring users can still navigate via keyboard.

### Recommendation
Implement a **Horizontal Sticky Section**. When the user reaches the "Proyectos" section, the page stops scrolling vertically and instead moves the project list horizontally. Once all projects have passed, vertical scroll resumes.
