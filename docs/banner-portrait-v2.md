# Banner portrait, version 2

Generated with the built-in image-generation tool on 3 September 2026.

## Final asset

`src/assets/banners/rahul-educator-v2.png` (1122 × 1402 PNG).

The new portrait is used only by main-topic banners and cards. All 16 topic and subtopic background illustrations remain unchanged. The previous `rahul.png` asset is retained.

## References

* `/Users/rahulkumar/Downloads/iloveimg-converted/IMG_1635.jpg`: original facial identity reference.
* `/Users/rahulkumar/Downloads/iloveimg-converted/profile.png`: supporting illustrated facial reference.

## Initial generation prompt

```text
Use case: stylized-concept.
Asset type: a NEW illustrated author portrait cutout for a technical blog's main-topic workshop banners.
Input images: Image 1 is the original photograph of Rahul, the primary facial identity reference. Image 2 is an earlier illustrated portrait of the same person, supporting facial identity reference ONLY. Do not reuse either pose, outfit, background or composition.
Primary request: Create a fresh, distinctive editorial illustration of THIS SAME MAN as a friendly engineering educator. He is standing upright in a relaxed three-quarter pose with his shoulders turned slightly toward the viewer's left, head turned toward the viewer, eyes looking at the viewer, and a subtle warm closed-mouth smile. His arms are comfortably folded low across his torso, with natural anatomy and a relaxed posture.
Identity invariants: Preserve the recognizable face, natural facial proportions, medium-brown skin, thick dark swept-up hair, dark eyebrows, eyes, nose, moustache and short shaped beard from the references. Same age and natural build. No generic replacement face, no exaggerated jaw, no beautification or bodybuilder proportions.
Clothing: a plain deep teal casual overshirt, open over an ivory crew-neck T-shirt, sleeves casually rolled to the forearms. No patterns, text, logos, accessories, glasses or hats.
Style/medium: polished hand-painted editorial portrait, confident fine ink contours and soft brush shading, tactile gouache-like surface, attractive but natural skin and hair detail. More mature and human than a cartoon mascot. Not photorealistic, not 3D, not anime, not caricature.
Composition: portrait canvas around 4:5, isolated person from complete hair to just below crossed arms at waist, centered, modest transparent margin around the silhouette. Both shoulders and elbows inside the frame. Clear recognizable face large enough to read when scaled down on a banner.
Lighting: warm gentle light on the face, a restrained cool teal rim light along one shoulder, natural colors without orange skin or heavy neon.
Background: ACTUAL TRANSPARENT ALPHA, a clean PNG cutout. No painted backdrop of any kind, no checkerboard, no white or grey field, no circle, no scene, no desk, no props, no notebook, no devices, no glowing diagrams. Keep the hair and shirt edges clean without a white outline or halo.
Constraints: one person only; no text, no watermark. The new pose and clothing must be distinctly different from the references while retaining the person's facial identity.
```

The first output had a visible checkerboard and no alpha channel. It was not integrated into the site.

## Final background edit prompt

```text
Use case: precise-object-edit.
Input image: Image 1 is the EDIT TARGET, the newly created portrait of Rahul wearing a teal overshirt and ivory T-shirt with folded arms.
Primary request: Change ONLY the checkerboard background into a completely smooth, solid deep ink-blue backdrop, exact color #11293b. Remove every white and grey checkerboard square. This is an opaque ink-blue background, NOT a transparent-image request.
Keep unchanged: the exact person's face, facial proportions, eyes, hair, beard, expression, skin, lighting, pose, arms and hands, clothing, crop, and painted editorial illustration style. Do not redraw or beautify the subject. Do not alter the shape or size of the subject.
Composition: retain the same portrait dimensions and the full visible silhouette.
Background must have a single uninterrupted flat color #11293b, with no lighting bloom, texture, vignette, gradient, checkerboard, scenery, shapes or frames.
No text, logos, watermark or added objects. Clean natural hair and clothing edges.
```

The portrait file has an opaque ink-blue background. The first integration used rectangular edge fading, which did not remove that backdrop sufficiently. The current integration uses a matching silhouette matte, preserving the original portrait pixels while hiding the background. Astro generates responsive WebP portrait variants and one shared optimized PNG mask.

The portrait is smaller and positioned to the right. Main-topic diagrams are displayed without the previous wide-hero crop, with separate space for the title and track label. Existing subtopic artwork and covers are unchanged.

## Silhouette matte

Final asset: `src/assets/banners/rahul-educator-mask.png`, 1122 × 1402, generated with the built-in image-generation tool. Its dimensions match the portrait exactly. White preserves the portrait; black hides the blue backdrop. It is used with `mask-mode: luminance`, not as an alpha-only mask.

The source portrait, all 16 background plates, the original homepage hero, and the About photograph are unmodified.

### Generation prompt

```text
Use case: background-extraction.
Asset type: precise grayscale foreground matte for CSS luminance masking.
Input image: Image 1 is the exact portrait to segment. This is a technical mask-generation edit, NOT a new portrait.
Primary request: Return ONLY a black-and-white silhouette mask matching the input at exactly the same 1122 × 1402 canvas size and pixel alignment. Every pixel belonging to the man, including all hair, face, neck, shirt, T-shirt, arms and hands, must be solid pure WHITE (#ffffff). Every pixel belonging to the dark blue background must be pure BLACK (#000000).
The solid white silhouette must trace the existing person's external outline precisely, including individual hair tufts, ears, shoulders, shirt sleeves, bent elbows and torso. Fill the entire silhouette with white; there must be no facial detail, no clothing detail, no shading, no internal outlines. Preserve any true background spaces as black.
Keep the person in the EXACT same location, scale, pose, and crop as the input image. Do not move, resize, rotate, expand, simplify, or reimagine the outline. No border or padding. The shirt continues to the bottom edge exactly as in the input.
Only a very narrow antialiased gray transition is permitted on the exact silhouette boundary. No blur, glow, shadow, gradients or feathering elsewhere.
This output is an opaque grayscale technical matte, NOT a transparent image and NOT a checkerboard. Black means discard; white means keep. No text, labels, watermark or additional objects.
```
