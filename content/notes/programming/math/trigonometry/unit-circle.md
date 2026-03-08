+++
title = "Unit Circle"
+++

# Unit Circle

The unit circle is a circle with it's center at the origin of a cartesian plane and a radius of 1 unit.

This circle is used in all sorts of maths to explore relationships.

The equation of a unit circle can be found like:

```
(x-h)^2 + (y-k)^2 = r^2 // (h,k) = (0,0) and r = 1

x^2 + y^2 = 1
```

The unit circle contains three key pieces of information:

#### Degrees

0 to 360 with every 30° and 45° increments

0, 30, 45, 60, 90...etc...

#### Radians

Associated radian measurements to degrees

(simplified pi/6 increments and pi/4 increments)

0, pi/6, pi/4, pi/3, pi/2, 2pi/3...etc...

#### Coordinate points

Associated with the given angles

(1,0), (sqt(3)/2, 1/2), (sqt(2)/2, sqt(2)/2)...etc...

Tip: all denominators are 2 and all numerators are either +- 1, sqt(2), or sqt(3)

The sin𝜭 = y-value and cos𝜭 = x-value

## Coterminal angles

All trig functions are equal for coterminal angles. So, if you know the values at pi/4, you know the values at 9pi/4

If you have a negative angle, like -30°, find the coterminal positive angle, like 330°

You can also find coterminal angles outside of the _princible interval_ (0 to 360°)

`a = 𝜭 + n(360)` so if you want to place this in a different interval, set up an inequality

`500 <= 𝜭 + n(360) < 860`

Remember `n` in this inequality must be a whole number because you are using it to multiply by 360 to go around the unit circle

If your interval is less than 2pi, you are not guarenteed to find a coterminal angle

```
x = 13pi/4

a = x + n(2pi)

-11pi/4 < 13pi/4 <= -7pi/4

-24pi/4 < 2pin <= -20pi/4

-6pi < 2pin <= -5pi

-6pi/2pi < n <= -5pi/2pi

-3 < n <= -2.5 // no coterminal angle in this interval exists
```

#### Set of all possible angles

If solving an equation for the set of all solutions, every coterminal angle is included in the set

These full solutions are expressed in [set-builder
notation](../discrete-structures/sets)

```
sin𝜭 = 0

𝜭 = {0 +- 2pik: k ∈ Z} U {pi +- 2pik: k ∈ Z}

𝜭 = {0 +- pik: k ∈ Z}

𝜭 = {pik: k ∈ Z}
```

## Reference angles

For every angle 𝜭, there exists a positive, acute, **reference angle** formed by the x-axis and the terminal side of 𝜭.

So, depending on the quadrant of 𝜭, you can find the reference like:

```
quadrant

1      0 || 0
2      pi - 𝜭 || 180 - 𝜭
3      𝜭 - pi || 𝜭 - 180
4      2pi - 𝜭 || 360 - 𝜭
```

Because reference angles are the same in each quadrant, you can use that symmetry to build other quadrants.

## Even-odd identities

Remember that [functions can be even, odd, or neither](../algebra/functions)

`cos(-𝜭) = cos𝜭` , so cosine is even

`sin(-𝜭) = sin𝜭 * -1`, so sine is odd

`tan(-𝜭) = -tan𝜭` odd

`csc(-𝜭) = -csc𝜭` odd

`sec(𝜭) = sec𝜭` even

`cot(𝜭) = -cot𝜭` odd

## Points off the unit cirlce

Use _similar triangles_ to create a proportion.

Solve for sides and angles on the triangle on the unit circle, then you know the angles of the other triangle
and can use ratios to find the sides of the other triangle.

Drawing it all out helps a lot

Keep in mind `a^2 + b^2 = c^2` and all angles add up to 180

Also keep in mind the [trig functions](../trig-functions)
