# VISUAL ASSET BRIEF

## Educational illustration prompt

Create a clean notebook style teaching diagram on a warm white paper background. Show the backtracking process for generating subsets from `[1, 2, 3]`. Begin with the empty subset at the top. Draw clear hand inked branches to `[1]`, `[2]` and `[3]`, then continue to `[1, 2]`, `[1, 3]`, `[2, 3]` and `[1, 2, 3]`. Use a restrained blue accent for choose arrows and a green accent for return and remove arrows. Beside the `[1, 2, 3]` branch, show a small vertical Java call stack with `buildSubsets(start=0)`, `buildSubsets(start=1)`, `buildSubsets(start=2)` and `buildSubsets(start=3)`. Add a short handwritten note: `save → choose → explore → undo`. Keep every number and method label crisp and readable. Do not include people, laptops, robots, decorative code, gradients or futuristic AI imagery.

## Algorithm state to show

Show the moment after `[1, 2, 3]` has been copied into the result and just before `3` is removed from the working subset. The current subset is `[1, 2, 3]`, the next allowed index is `3`, and the saved results are `[]`, `[1]`, `[1, 2]` and `[1, 2, 3]`.

## Recommended aspect ratio

`16:9`, composed so the core tree and call stack remain readable when cropped to `4:5` on mobile.

## Alt text

Notebook diagram of the subset backtracking tree for 1, 2 and 3, with the current path at 1, 2, 3 and a call stack showing four recursive frames before backtracking removes 3.

## Static image or interactive animation

The interactive animation is more useful because learners need to see the same working list grow and then shrink. Use the static illustration as the article preview image and as a quick mental map before the interactive trace.
