# Limits

The limit of a function at any value x is the result that function approaches at the value x.

You can approach a limit from the left or right side, and if a limit exists it is called the general limit.

A limit is precisely defined as:

```
lim f(x) = L
x->a

if, for every number epsilon > 0 there is some number delta > 0 such that

|f(x) - L| < epsilon whenever 0 < |x-a| < delta
```

So a function at any value x does not have a general limit if the left and right hand limits do not approach a single value.

## Point discontinuities

```
Example:

f(x) = (x^2 - 4)/(x-2) // call this A

f(2) is undefined because division by 0 is undefined

yet...

(x^2 - 4)/(x-2) => ((x + 2)(x - 2))/(x - 2) => f(x) = x + 2 // call this B

So f(2) = 4

A and B have different behavior at x = 2.

B has the value of 4 at x = 2 while A approaches more and more closely to 4 at x = 2 from both the left and right hand side.
```

In this example A had a point discontinuity at x = 2 and we showed algebraically that this discontinuity is removable and therefore not a vertical asymptote.

This could also be a [piecewise defined function](../algebra/piecewise-defined-functions.md):

```
f(x) = {
    (x^2 - 4)/(x-2)       x != 2
    4                     x = 2
}
```

While general limits exist in point discontinuities, they do not exist for jump discontinuities or infinite discontinuities (asymptotes).
Although, sometimes asymptotes that both approach -Inf or +Inf will be described as having a limit of - or + Inf.

##### Aside, Intermediate Value Theorem

For any continuous function, given a closed interval, we can assume there is atleast one "root" (cross of x axis) if we can find a negative point and positive
point in that interval.

## Properties of limits

You can find the limit of any function or combination of functions:

```
lim f(g(x))
x->3
```

because limits respect these properties:

```
Because typing the limit symbol is hard, & = lim
                                             x->a

for any real number c, &[cf(x)] = c * &f(x)

&[f(x)±g(x)] = &f(x)±&g(x)

&[f(x)g(x)] = &f(x)&g(x)

if g(x) != 0 then &[f(x)/g(x)] = &f(x)/&g(x)

fon any real number n, &[f(x)]^n = [limf(x)]^n
```

## Solving Limits

There are different methods you can use to solve limits.

### Substitution

If a function is always defined you may be able to just substitute the limit as the value.

```
lim log(x) == log(5)
x->5
```

### Factoring

When substitution does not work, you may be able to use factoring to show the continuous function.

```
lim (x^2-16)/(x-4)
x->4

// factor using difference of squares

(x-4)(x+4)/x-4

x+4

// now substitute

4+4 = 8
```

### Conjugate Method

If presented with a fraction that does not factor, the conjugate method may be a good approach.

Conjugate = irrational side of fraction, flip the expressions _between_ each term.

Hot tip: don't distribute everything out right away, go slow and look for the point where you can cancel terms

```
lim (sqt(4+h)-2)/(h)
h->0

sqt(4+h)-2/h * sqt(4+h)+2/sqt(4+h)+2

...
```

## Infinite Limits

There is a difference between infinite limits and "limits at infinity"

A limit at infinity refers to the limit of a function as the input approaches infinity.

An infinite limit refers to the function itself approaching infinity at a particular point.

Infinite limits exist around vertical asymptotes of a function.
