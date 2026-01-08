+++
title = "Multi View Geometry"
+++

# Multi View Geometry

Key Questions:

1. Where is the object in relation to the camera? (Multiple coordinate systems)
2. Where is the camera? (3d Translation)
3. Where is the camera pointing at? (3d Rotation)
4. How is the object seen by the camera? (Projection)

Notation:

```
P^M = P as seen from Viewpoint M
```

Different objects can have identical coordinate locations if the viewpoints are
translated with the objects relative to each other.

## CSA Planes

Think of a typical 3D box:

- Coronal (front) (x)
- Sagittal (side) (y)
- Axial (top) (z)

## Movement

Translation is achieved by matrix multiplication. Take a point and multiply by
the translation matrix.

```python
P = [
 -1, # x
 4,  # y
 -2, # z
 1   # homogeneous coordinate conversion
]

T = [
  [1, 0, 0, 3],
  [0, 1, 0, -5],
  [0, 0, 1, 4],
  [0, 0, 0, 1]
]

T * P = [2, -1, 2, 1]
```

## Rotation

```python
theta = 0 # rotation amount

c = math.cos(theta)
s = math.sin(theta)

Z = [
    [c, -s, x],
    [s, c, x],
    [x, x, 1],
]

Y = [
    [c, x, -s],
    [x, 1, x],
    [s, x, c],
]

X = [
    [1, x, x],
    [x, c, -s],
    [x, s, c],
]
```

## Camera Translation

It's helpful to draw the camera view as a little stick figure to track how the
view moves from the perspective of an outside observer.

Translate a point in the camera coordinate by multiplying the point vector with
a matrix.

```
[
    [1, x, x, 2],
    [x, 1, x, 3],
    [x, x, 1, -4]
    [x, x, x, 1]
]
```

Then you can derive how the camera must have moved.

## Extrinsic/Intrinsic Matrix

The extrinsic matrix is a transformation matrix from the world to camera
coordinate system. Combine rotation and translation into one matrix describing a
full movement.

The intrinsic matrix is a transformation matrix from the camera to pixel
coordinate system.

```
f = focal_length_scaled_x
j = focal_length_scaled_y
o = offset

[
  [f, x, o],
  [x, j, o],
  [x, x, 1]
]
```

## Epipolar Geometry

Goal - reduce the amount of search area for a camera to find points while it
moves.

Draw a triangle by connecting the two views through the scene. The flat 2d scene
across the triangle is the epipole.

```
cross_product_matrix = [
    [0, -c, b],
    [c, 0, -a],
    [-b, a, 0]
]
```
