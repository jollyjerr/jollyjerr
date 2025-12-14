+++
+++

# Coordinate System and Degrees of freedom

How do you describe the pose of a robot?

The only full description is a total coordinate system.

You can think about it with your right hand:

- Thumb along x-axis
- Index along y-axis
- Middle along z-axis

Order counts.

- Locomotion: the ability for the robot to move itself.
- Manipulation: the ability for the robot to move other objects.

## Axis-Angle or Quaternion Notation

Three vertices (x, y, z) each with 3 values.

A point is a linear combination of three coefficients with basis vectors for the
3 axis:

```
p = c1[1,0,0] + c2[0,1,0] + c3[0,0,1]
```

You can transform this into a matrix multiplication where a rotation matrix is
multiplied with a vector of coefficients:

```
p = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
] * [c1, c2, c3]
```

We only need 4 values to express rotations (9 values):

- Each column is a basis vector
- They are orthogonal -> the third vector is given by the other two
- They are normal -> the third value is given by the other two

## Degrees of Freedom

- Cartesian space

An airplane can be in all possible positions and orientations - 6 DoF.

A human arm can move in 6 DoF in cartesian space.

- Actuator Space

An airplane can pitch, roll, and accelerate along positive X - 3 DoF.

A human arm has 7 DoF in actuator space.

### Kinematics

Develop equations for the translation and rotation along axis:

```
Using the "E Puck" as an example:

delta-x = r theta-l + r theta-r
delta-y = 0 // no wheel to move on y axis
delta-z = 0 // same...
rotate-x = 0
rotate-y = 0
rotate-z = (r theta-r - r theta-l)/d
```

Any time you change the configuration you have to re-think through each degree
of freedom and derive the equations.

## Coordinate Transforms

To understand what a position in coordinate system B means in coordinate system
A, you have to take the dot product with a rotation matrix.

- The rotation matrix consists of the basis vectors of one coordinate system
  expressed in the target coordinate system.
- Constructing this element-by-element always works

## Holonomy

Systems in which closed loops in joint space result in closed loops in
cartesian space are holonomic.

- all robot arms
- robot sliding on a track

If that is not the case, they are non-holonomic

- most wheeled platforms

## Homogeneous Transforms

```
T = [
    R, t
    0[1X3], 1
]

[p`, 1] = T[p, 1]
```

Here, R is the 3x3 rotation matrix and t the 3x1 translation vector. Together with the bottom row [0 0 0 1], they form 4x4 matrix. The approach also works in two dimensional space. Then R is a 2x2 rotation matrix, t is a 2x1 translation vector, and the bottom row is [0 0 1].

p is the original point or vector.
