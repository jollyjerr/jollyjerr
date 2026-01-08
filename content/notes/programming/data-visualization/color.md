+++
title = "Color"
+++

# Color

#### Hue

What our named color is.

Use to show change of category: Categorical encoding.

#### Chroma

Bright and saturate.

#### Luminance

How light or dark.

Used to encode progression or change: sequential encoding, diverging encoding

## Principles of good choices

For sequential & diverging encodings:

1. Perceptually linear (CIELAB: perceptual distance == euclidean distance)
2. Steps are naturally ordered (ie: dark/opaque is more)
3. Lightness is monotonic (avoid rainbows)
4. Diverging: Natural zero point

For categorical encodings:

1. Distinct
2. Semantically meaningful
3. Roughly equally salient
