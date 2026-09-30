# Material-specific character lighting

## Scope
- Preserve the website, character lift, scale, timing, easing, wrapping, touch behavior, and existing red tube-light treatment.
- Classify heading characters by their existing visual color without changing resting typography.
- Refine white characters into crisp warm-white architectural tube lights with only a tight near-glyph halo.
- Refine black characters into dark polished graphite with a restrained edge highlight and neutral reflective sheen.
- Keep all effects CSS-only, pointer-specific, and disabled by existing reduced-motion behavior.

## Technical details
- Extend the existing heading helper with a material class for white, dark, or red characters.
- Apply those classes at the existing heading call sites according to their unchanged foreground color.
- Separate hover lighting rules by material while retaining the current transforms and 320ms transition.
- Verify isolated letter movement, resting appearance, white/red/dark computed effects, and mobile layout stability.
