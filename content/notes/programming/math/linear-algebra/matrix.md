+++
title = "Matrix"
+++

# Matrix

## Multiplication

Easy trick for matrix multiplication by hand:

1. Move the second matrix up (not left) above the first so you find the dimensions of the
   result
2. Take dot product of each column (moving down) with each row (left to right) `sum(row i * col i for each i)`

## Homogeneous Coordinate

```
p = [4, 2, 1]

=== [8, 4, 2] (scaling vector 2)
=== [-8,-4,-2] (scaling vector -2)
```

Equality is defined between two vectors if the scaling vector is the same across
all values.

### Homogeneous Transformation

#### Translation

Translate a vector by `[x, y]`

1. Convert vector to HC
2. Multiply by `[[1,0,x],[0,1,y],[0,0,1]]`

#### Scaling

Scale a vector by `[x, y]`

1. Convert vector to HC
2. Multiply by `[[x,0,0],[0,y,0],[0,0,1]]`

#### Rotation

Rotate a vector by `x`

1. Convert vector to HC
2. Multiply by `[[cos(x), -sin(x), 0],[sin(x), cos(x), 0],[0,0,1]]`
