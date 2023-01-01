# Complex numbers

Recall the properties of [imaginary numbers](../algebra/imaginary-numbers.md)

### Rectangular form

```
z = a + bi

a is called "real part" -> Re(z)
b is called "imaginary part" -> Im(z)
```

if a == 0 you have a pure imaginary number

```
z = bi
```

if b == 0 you have a real number

```
z = a
```

## Operations

Add and subtract complex numbers by seperating the imaginary parts

```
(-2 + 17i) + (6-8i)
(-2 + 6) + (17i - 8i)
(-2 + 6) + (17 - 8)i
4 + 9i

(21 + 16i) - (-9 + 4i)
(21 + 9) + (16i - 4i)
30 + 12i
```

Multiply and devide complex numbers like [polynomials](../algebra/polynomials.md)
FOIL, and multiply by the conjugate if you need to.

Find the absolute value with `sqt(Re(z)^2 + Im(z)^2)`. This is just using the pythagorean theory
to find the distance from the origin.

A complex number can be written in exponential form using Euler's number `e ≅ 2.718`

`z = re^i𝛳` // how to find r and 𝛳 down below

## Graphing

Complex numbers are graphed on the **complex plane** (also called the **argand plane**), which looks like a rectangular plane
but the y axis is the imaginary value and the x axis is the real value.

You can find the distance between two complex numbers by finding the distance between the
real parts and imaginary parts independently and then using the pythagorean theory.

Same with midpoints: find the midpoint of the real part and then the midpoint of the imaginary part.

To convert a complex number into **polar form**, `r` is the absolute value and use trig functions
to find 𝛳.

```
r = |z| = sqt(a^2 + b^2)

sin = opp/hyp
cos = adj/hyp
tan = opp/adj

tan𝛳 = a/b
arctan(tan𝛳) = arctan(b/a)
𝛳 = arctan(b/a)

also:
cos𝛳 = a/r, so a = rcos𝛳
sin𝛳 = b/r, so b = rsin𝛳

So the polar form is:
z = a + bi
z = rcos𝛳 + (rsin𝛳)i
z = r(cos𝛳 + isin𝛳)
```

### Polar operations

##### Multiplication

To multiply two complex numbers in polar form, you pull out both `r` values, foil the parentheses,
and then group together the real and imaginary parts - using the sum identites for sin and cosine to simplify.

When you find the product, it's distance from the origin is the product of the original distances: `r = r * r`,
and its angle is the sum of the original angles `𝛳 = 𝛳 + 𝛳`

A formula for this operation would look like this: (using 1 and 2 as labels here)

```
z1 * z2 = r1r2[cos(𝛳1 + 𝛳2) + isin(𝛳1 + 𝛳2)]
```

##### Devision

Similarly, with devision you have two options:

```
z1/z2 = r1/r2[cos(𝛳1 - 𝛳2) + isin(𝛳1 - 𝛳2)]

or

z1/z2 = (r1/r2)(e^(i(𝛳1 - 𝛳2)))
```

##### Exponents

Using **De Moivre's theorem** we find `z^n = r^n[cos(n𝛳) + isin(n𝛳)]`

If you want to find the power of a rectangular complex number, just convert it to polar form first.

You can reverse the direction and find the **roots** of a complex number with:

```
nsqt(z) = nsqt(r)[cos((𝛳+2pik)/n) + isin((𝛳 + 2pik)/n)]

or replace (2pi) with 360 for degrees
```
