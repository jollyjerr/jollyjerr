## Inverse trig relations

Just like with algebraic graphs, you can find the inverse of trig functions by swapping the x and y values:

For `sin(𝜭) = x` the inverse is `sin(x) = 𝜭`

> y is the angle whose sine is x

These inverses are called inverse trig _relations_ because they do not have the properties of [functions](../algebra/functions.md)

When solving an inverse trig relation it's best to be clear that all coterminal angles
to the solution are also solutions. So, because `sin(pi/2) = 1`, the inverse would actually
be `sin(pi/2 + 2npi) = 1`

Inverse trig relations are expressed like `sin^-1(x)` or as **arcsin**.

The first notation is not actually a negative exponent, so `sin^-1(x) != 1/sin(x)`

## Inverse trig functions

If you limit an inverse trig relation to one period then you have an inverse trig function.

This is notated with a capital letter - `Arcsinx`

```
Arccos(1/2) = y

cos is 1/2 when 𝜭 = pi/3 and 𝜭 = 5pi/3

Arccos has the range of [0,pi]

y = pi/3
```

Here are the domain and ranges of inverse trig functions:

```
Name:    Domain:                Range:

Arcsin   [-1,1]                 [-pi/2,pi/2]

Arccos   [-1,1]                 [0,pi]

Arctan   [-inf, inf]            (-pi/2, pi/2)

Arccsc   (-inf, -1] U [1, inf)  [-pi/2, 0) U (0, pi/2]

Arcsec   (-inf, -1] U [1, inf)  [0,pi/2) U (pi/2, pi]

Arccot   (-inf, inf)            (0,pi)
```

## Trig functions of inverse trig functions

Because sin and Arcsin are inverses, they have the same relationship as something like `sqt(x^2) = (sqt(x))^2 = x`
or `x^lny = ln(x^y) = x`

So `sin^-1(sinx) = x for x in [0,pi]` and `sec(Arcsec(x)) = x for x in (-inf, -1] U [1, inf)`

You can also build equations by mixing any of 12 trig functions

```
sec(cot^-1(x)) = sqt(1/x^2 + 1)
```

I need to practice this...
