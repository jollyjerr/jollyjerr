+++
title = "Trig Identities"
+++

## Trig identities

All of these are provable on their own but they are helpful to memorize because
they are used all over the place in proofs and problem solving.

In this file `x === theta (𝛳)`

#### Pythagorean identities

These three relationships are all derived from the Pythagorean theorem (and easy to prove on a unit circle):

```
sin^2x + cos^2x = 1
1 + cot^2x = csc^2x
1 + tan^2x = sec^2x
```

These get used frequently like `sin^2x = 1 - cos^2x`

#### Reciprocal identities

```
cscx = 1/sinx
secx = 1/cosx
cotx = cosx/sinx
```

#### Quotient identities

If you define a right triangle in the [unit circle](./unit-circle.md) (radius = 1)
you can easily find the **quotient identities**

```
tanx = sinx/cosx
cotx = cosx/sinx
```

#### Co-function identities

The value of a trig function of an angle is equal to the value of the co-function
of the angle's complement

```
const Y = pi/2

sinx = cos(Y-x)
cscx = sec(Y-x)
cosx = sin(Y-x)
secx = csc(Y-x)
tanx = cot(Y-x)
cotx = tan(Y-x)
```

#### Even-odd identities

```
sin(-x) = -sinx
cos...
tan...
cot...
```

#### Double angle identities

Used to transform 2(x) to x

`sin(2x) != 2sin(x)`

To remove the constant from the angle you need to use a double angle identity

```
sin2x = 2sinx * cosx
cos2x = cos^2x-sin^2x = 1-2sin^2x = 2cos^2x-1
tan2x = 2tanx/1-tan^2x
```

Another helpful way to write these

```
sin^2(x) = (1 - cos(2x)) / 2
cos^2(x) - (1 + cos(2x)) / 2
```

Remember to use Pythagorean identities if you are only provided with sin or cos
to find the other one.

#### Half-angle identities

Used to transform x/2 to x

```
cos(x/2) = ± sqt(1+cosx/2)
sin(x/2) = ± sqt(1-cosx/2)
tan(x/2) = ± sqt(1-cosx)/sqt(1+cosx)
```

Use positive or negative result depending on the quadrant of the angle

#### Sum-difference identities

```
sin(x+a) = sinxcosa + cosxsina
sin(x-a) = sinxcosa - cosxsina
tan(x+y) = (tanx+tany)/(1-tanxtany)
tan(x-y) = (tanx-tany)/(1+tanxtany)
```

This can be useful if given an angle that is not in the set of angles presented by the unit circle

```
find sin(pi/12)

pi/12 = (pi/3 - pi/4)

sin(pi/12) = (sqt3/2)(sqt2/2) - (1/2)(sqt2/2)

(sqt6 - sqt2)/4
```

#### Product to sum (or difference) identities

These can be derived from the sum-difference identities

```
sinx * cosy = 1/2[sin(x+y)+sin(x-y)]
cosx * siny = 1/2[sin(x+y)-sin(x-y)]
cosx * cosy = 1/2[cos(x+y)+cos(x-y)]
sinx * siny = 1/2[cos(x-y)-cos(x+y)]
```

#### Sum (or difference) to product identities

```
sinx + siny = 2sin((x + y)/2) * cos((x - y)/2)
sinx - siny = 2cos((x + y)/2) * sin((x - y)/2)
cosx + cosy = 2cos((x + y)/2) * cos((x - y)/2)
sinx - siny = -2sin((x + y)/2) * sin((x - y)/2)
```

## Using identities in proofs

Trig identities are frequently used in proofs by manipulating an equation until it matches an identity

Some hot tips:

1. Stick to sin and cosine as much as possible and convert the others
2. Make sure all angles are the same (simplify sin(2x) to sinx)
3. Add/remove powers with the Pythagorean identities
4. Consider if the equation is factorable
5. Link distant functions with identities
6. Separate constants by multiplication by the conjugate

Just practice these bad bois

Sometimes the value of 𝛳 will be constrained `Ex: 𝛳 ∈ [0,2pi)`
