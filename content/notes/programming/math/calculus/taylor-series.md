+++
title = "Taylor Series"
+++

# Taylor Series

The Taylor series of a function f(x) is a certain [power series](./series.md) that equals f(x).

The purpose is to take a function that is not a polynomial and express it as a
series - which is like an infinite polynomial.

Graphically, a Taylor series is a closer and closer approximation to a function
centered about a point. By centered I mean - at a, each additional term of the
Taylor series matches the original functions higher order derivatives up to the
degree of the term. (tangent line, tangent parabola, tangent cubit, etc...). So
as you take the limit of the number of terms going to infinity, the series
converges into the original function.

The degree of a Taylor polynomial is how many terms you write out starting with
index 0.

```
f(x) = sum(0, inf) f^(n)(a)/n! * (x - a)^n

where f^(n)(0) is the n-th derivative of f(x) evaluated at a

a is the expansion point

you should pick an a value close to the x that you are solving for so the
approximation is accurate faster.
```

The 0-th derivative of f(x) is just f(x)

For the n-th derivative bit: take higher order derivatives of f(x) until you see a pattern
(normally 4?) and then evaluate all of them at a. If they all equal the same
thing then just use that, but if not you should be able to express them in terms
of x.

```
skipping some steps but this is the vibe

f(x) = 1/x

f'''(x) = (2 * 3) / (1 - x)^4

sum(0, inf) n!/n! x^n

sum(0, inf) x^n where |x| < 1
```

## Maclaurin series

A Taylor series with expansion about the point x = 0

```
f(x) = sum(0, inf) f^(n)(0)/n! * x^n
```

## Common Taylor Series

```
e^x = sum(0, inf) x^n/n! // for all x

1/(1-x) = sum(0, inf) x^n  // where |x| < 1

sin(x) = sum(0, inf) (-1)^n/(2n+1)! x^(2n+1) // for all x

cos(x) = sum(0, inf) (-1)^n/2n! x^(2n) // for all x
```

## Solving for a derivative

They give you the Taylor series for a function and ask for a specific
derivative.

```
f(x) = 3 + 5x - 8x^2 + ...

what is f''(0) ?
```

The secret is to match corresponding powers of x.

Set the general maclurian series up equal to the term of your specific series
where the powers of x match, the x's must cancel EVEN IF IT LOOKS OUT OF ORDER, then solve for the derivative.

Write out what the formula actually means:

```
f(x) = f(0) + f'(0)x + f''(0)x^2/2!

so now you can deduce

f''(0)/2^2 x^2 = -8x^2

so using algebra to solve for f''(0)

f''(0) = -16
```

## Finding more involved Taylor series

If you have a function that looks very similar to a common taylor series you can
just like swap in the different terms but leave the result the same.

```
1/(1-x^2) = sum(0, inf) (x^2)^n

x/(1-x) = sum(0, inf) x^n
```

You can also take a derivative on both sides to get your function to look like a
common Taylor series.

You can also take a derivative and then swap in terms in a combo move.

So basically - if the question looks close to a common Taylor series you should
just write out the full common Taylor series and then use derivatives or
multiplication by x to make the common one look like the question - and then on
the right side of the equals sign you will have your answer. This is tricky and
hard to write out so def google if you cannot figure out this method when
looking back at these notes.

So in general if you know the Taylor series of a function, by default you know
the Taylor series for a bunch of functions.

## Applications of Taylor Series

Taylor series is basically pop'n the hood on a function to see really what it is
doing behind the scenes. What is cos(x) doing? How does a calculator actually
compute that function? It uses the Taylor series of that function, computes a
bunch of terms, and adds them together.

1. So Taylor's series helps us approximate functions just by finding a bunch of
   terms (not actually summing to infinity) and then summing them. When doing
   this, remember to center your Taylor series close to the value you want to
   solve the original function for. (ex: if approximating sqrt(26), center your
   series around 25)

2. Taylor series is used in the proof of l'hopitals rule.

```
lim x -> 0 (1-cos(x))/x^2

1 - t series of cos / x^2

stuff cancels

1/2
```

3. Helps you solve harder integrals

```
∫ e^-x^2 dx

no integration techniques work

find taylor series to e^-x^2

integrate the taylor series (you can always integrate a power series)

your answer will be a power series
```

4. Differential Equations 👀

## Approximations

The error in using a n term Taylor Series to approximate a function, f(x), with
center at a is no more than:

```
[max(x <= t <= a)|f^(n+1)(t)| / (n + 1)!](x-a)^(n+1)
```

This is basically just saying you want your x and a to be as close as possible
and you want as many terms as possible. In applications you don't use this
formula directly, but technically this is the upper bound of your diff to the
original function.

## Functions of Complex Numbers

[complex numbers](../trigonometry/complex-numbers.md) are related to normal
functions, and become useful, when we use Taylor series to break apart a
function and plug in complex numbers.

So Taylor series allow us to evaluate functions at the value of complex numbers.
These series typically converge to a complex number.

### Euler's Formula

To compute the actual sum of e^ix, you can use a neat
divide and conquer trick.

Split the sum into two parts - one only contains the even terms and one only
contains the odd terms.

```
e^ipi = sum(0, inf) ipi^n/n!

even part: sum(0, inf) ipi^2n/2n!
odd part: sum(0, inf) ipi^(2n+1)/(2n+1)!
```

use exponent rules to simplify the two parts. You end up with the taylor series
for cosine and the taylor series for sin (multiplied by i), so your result is

```
e^ipi = cos(pi) + (i * sin(pi)) = -1

so generally

e^ix = cos(x) + (i * sin(x))
```

#### Euler Formula for Sin and Cosine

This is used a lot in proofs to show equivalence between two functions when one
involves imaginary parts:

```
cos(x) = (e^ix + e^(-ix))/2

sin(x) = (e^ix - e^(-ix))/2i
```

These can be used in turn to prove trig identities. Most modern trig proofs use
these. Just write the trig identity and sub in the Euler Formula for sin and
cosine and use algebra to show it is true.
