+++
+++

# Images

## Binary Image

Translate the screen into pixels, set them to 1 if they are totally filled.

## Gray scale Image

Use 255 bits to represent intensity between white and black for each pixel of
the screen.

## Binary Mask

Set pixel to 1 in foreground shape.

## Color Image

Three channels, RGB, each have map of screen pixels.

If a pixel should be black, `(0,0,0)` tensor.

Adjust each value in the range of 255 bits for each channel.

## Depth Map

Each pixel indicates how close or far from the camera, set up like gray scale.

## Image Functions

A function that maps a location to an intensity value.

```
# silly examples

f(x, y) = x + y

f(x, y) = {
    1 if |x| <= 1
    0 otherwise
}
```

### Operations

You can perform operations on the image function.

- flip: `f(x, y) => f(-x, y)`
- negate: `f(x, y) => 1 - f(x, y)`
- add: `f(x, y) => f(x, y) + 10`

You can combine operations, add two images, etc....

Also set operations like union is called masking.

`⨂` indicates a "cross correlation".

## Comparing images

```
low distance = alike
low theta = alike
high cos(theta) = alike
high similarity = alike
```

Distance

- Count different pixels, sum the amount of differences
- L1: Calculate the distance between each pixel, sum the distances
- L2: Calculate the distance squared, sum the results, take square root of sum

Similarity

- Dot product all pixels, take sum divided by square root of each pixel in
  second image squared sum?

### Image Moments

Goal:

`M(i,j) 3 x 3` represents some image `M(x,y) 20 x 20`

Definition:

Given an original image `I(x,y)`, `Mij = sum(x)sum(y)x^iy^iI(x,y)`

_Pixels -> Histograms -> Distributions_

Find histograms by counting patterns in pixels, convert to distributions by
multiplication in a linear way to unify it 0 to 1.

## Cross-Entropy

Cross-Entropy is a measure of the difference between two probability
distributions for a given random variable or set of events.

```
p
-log2^p
-p*log2^p
sum(for each p)

p and q
-log2^q
-p*log2^q
sum(for each zip(p, q))
```

## Filter

### Cross Correlation

Take a 1d list of pixels and form a matrix with it's left neighbor (shift right

1. above and right neighbor (shift left 1) below (both neighbors have padding of
   one nil value. This matrix can be multiplied by new vectors to achieve
   filter operations.

Convolution: flip filter vector

Convolution is communicative and associative
