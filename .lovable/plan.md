# Per-letter tube-light heading interaction

## Scope
- Preserve the existing page design, content, layout, imagery, type, spacing, motion, and breakpoints.
- Wrap visible heading characters in accessible inline spans without changing their resting appearance or line breaks.
- Give the hero title the full interaction: independent 8px lift, crisp bright glyph core, tight halo, and subtle red light spill.
- Give major section titles a restrained version with a 4px lift and softer illumination.
- Enable effects only on devices with a precise hover pointer; touch and reduced-motion experiences remain visually unchanged.

## Technical details
- Add one small reusable heading-text helper in the existing home route, preserving explicit line structure and spaces.
- Implement the effect entirely in CSS using per-character transforms, tight text shadows, and 320ms cubic-bezier transitions.
- Keep letters inline and preserve whitespace so wrapping and typography remain stable.
- Verify desktop hover targets one character only, then confirm untouched desktop and mobile layouts match the existing page.
