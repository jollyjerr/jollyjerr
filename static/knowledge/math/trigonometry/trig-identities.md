## Trig identities

#### Quotient identities

If you define a right triangle in the [unit circle](./unit-circle.md) (radius = 1) you can easily find the **quotient identities**

```
tan𝜭 = sin𝜭/cos𝜭

cot𝜭 = cos𝜭/sin𝜭
```

#### Pythagorean identities

These three relationships are all derived from the pythagorean theorem (and easy to prove on a unit circle):

```
sin^2𝜭 + cos^2𝜭 = 1

1 + cot^2𝜭 = csc^2𝜭

1 + tan^2𝜭 = sec^2𝜭
```

These get used frequently like `sin^2𝜭 = 1 - cos^2𝜭`

#### Sum-difference identities for sine and cosine

```
sin(x+a) = sinxcosa + cosxsina

sin(x-a) = sinxcosa - cosxsina
```

This can be useful if given an angle that is not in the set of angles presented by the unit circle

```
find sin(pi/12)

pi/12 = (pi/3 - pi/4)

sin(pi/12) = (sqt3/2)(sqt2/2) - (1/2)(sqt2/2)

(sqt6 - sqt2)/4
```

#### Cofunction identities

The value of a trig function of an angle is equal to the value of the cofunction
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

#### Sum-difference identities for a tangent

Same deal as other sum-difference identities

```
tan(x+y) = (tanx+tany)/(1-tanxtany)

tan(x-y) = (tanx-tany)/(1+tanxtany)
```

#### Double angle identities

Used to transform 2(𝜭) to 𝛳

`sin(2𝜭) != 2sin(𝜭)`

To remove the constant from the angle you need to use a double angle identity

```
sin2x = 2sin * xcosx
cos2x = cos^2x-sin^2x = 1-2sin^2x = 2cos^2x-1
tan2x = 2tanx/1-tan^2x
```

Remember to use pythagorian identities if you are only provided with sin or cos
to find the other one.

#### Half-angle identities

Used to transform 𝛳/2 to 𝛳

```
cos(x/2) = ± sqt(1+cosx/2)
sin(x/2) = ± sqt(1-cosx/2)
tan(x/2) = ± sqt(1-cosx)/sqt(1+cosx)
```

Use positive or negative result depending on the quadrent of the angle

#### Product to sum (or difference) identities

These can be derived from the sum-difference identities

```
sin𝛳 * cosy = 1/2[sin(𝛳+y)+sin(𝛳-y)]
cos𝛳 * siny = 1/2[sin(𝛳+y)-sin(𝛳-y)]
cos𝛳 * cosy = 1/2[cos(𝛳+y)+cos(𝛳-y)]
sin𝛳 * siny = 1/2[cos(𝛳-y)-cos(𝛳+y)]
```

#### Sum (or difference) to product identities

```
sin𝛳 + siny = 2sin((𝛳 + y)/2) * cos((𝛳 - y)/2)
sin𝛳 - siny = 2cos((𝛳 + y)/2) * sin((𝛳 - y)/2)
cos𝛳 + cosy = 2cos((𝛳 + y)/2) * cos((𝛳 - y)/2)
sin𝛳 - siny = -2sin((𝛳 + y)/2) * sin((𝛳 - y)/2)
```

## Using identities in proofs

Trig identites are frequently used in proofs by manipulating an equation until it matches an identity

Some hot tips:

1. Stick to sin and cosine as much as possible and convert the others
2. Make sure all angles are the same (simplify sin(2x) to sinx)
3. Add/remove powers with the pythagorean identities
4. Consider if the equation is factorable
5. Link distant functions with identities
6. Seperate constants by multiplication by the conjugate

Just practice these bad bois

Sometimes the value of 𝛳 will be constrained `Ex: 𝛳 ∈ [0,2pi)`
