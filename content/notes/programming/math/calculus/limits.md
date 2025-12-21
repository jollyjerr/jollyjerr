+++
+++

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

## Continuity

A function is continuous at x = c if and only if lim(x -> c) == f(c)

Discontinuities can be

1. Point/Removable or hole: two sided limit exists, but value at c is different
2. Jump: two sided limit does not exist
3. Asymptotic/infinite: left and right handed limit are unbounded
4. Infinite oscillation: f(x) = sin(1/x)

### Point discontinuities

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

> Suppose f is a function continuous at every point of the interval [a, b]
> f will take on every value between f(a) and f(b) over the interval
> for any L between the values f(a) and f(b), there exists at leas one number C in [a, b] for which f(c) = L

This is useful because - for any continuous function, given a closed interval, we can assume there
is at least one "root" (cross of x axis) if we can find a negative point and positive
point in that interval.

If using the IVT to justify a value exists, make sure the function is continuous over the interval
and that the value lies within the range produced by the function over that interval (inclusive).

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

Even if fx and gx both have undefined limits, you may be able to find a limit from their combination.
You can check this by finding their limit "from the left" and "from the right" and doing the calculation.
If both of them result in the same value, then that is the limit

```
if:

lim                 lim
x->a^- (fx + gx) == x->a^+ (fx + gx)

then that value is the limit

```

### Composite Limits

```
lim
x->1 f(g(x))
```

If the limit (L) defined by g(x) exists AND f is continuous at L, then your solution is

```
f(lim x->1 g(x))
```

If not, you can solve g(x) "from the left" and "from the right" to get two different inputs
(include the direction of approach in these inputs because it may swap! The y axis of this first result is the direction of approach for the input to f),
and then plug those inputs into f(your_input) and see if they converge on a single limit.

## Solving Limits

There are different methods you can use to solve limits.

### Substitution

If a function is always defined you may be able to just substitute the limit as the value.

```
lim log(x) == log(5)
x->5
```

If you are working with an absolute value function, try [rewriting it as a piecewise defined function](../algebra/piecewise-defined-functions.md)
and solving from there.

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

If presented with a fraction that does not factor, the [conjugate](../algebra/radicals.md) method may be a good approach.

Conjugate = irrational side of fraction, flip the expressions _between_ each term.

Hot tip: don't distribute everything out right away, go slow and look for the point where you can cancel terms

After doing more of these problems I would say your goal is to work out the radical side of the fraction so that it can cancel out with the non radical side.
Use whatever tricks you can to cancel out the non radical side

```
lim (sqt(4+h)-2)/(h)
h->0

sqt(4+h)-2/h * sqt(4+h)+2/sqt(4+h)+2

...
```

[This](https://www.khanacademy.org/math/differential-calculus/dc-limits/dc-limits-algebraic/v/limits-by-rationalizing) khan video explains this method extremely well.

_Hot Tip_ If you find a limit `0/0` that is indeterminate form and does not mean the limit does not exist. Use a different method to find the limit if you have reached that answer.

## Pythagorean Identity

If you are solving a limit that uses pythagorean functions and you reach indeterminate form (0/0), you can substitute
[trig identities](../trigonometry/trig-identities.md) to try and cancel out terms and work the problem.

A common pattern for this is to use a Pythagorean identity and then use diff of squares to reach a common factor

#### Footnote on Conjugate and Pythagorean Identity

When you cancel out terms with conjugate method or pythagorean identity you must remember to specify which value the new function does not work at

```
1-cosx/2sinx^2 -> 1-cosx/2(1-cos^2x) (a^2 - b^2 here difference of two squares) -> 1-cosx/2(1+cosx)(1-cosx) -> 1/2 + 2cosx where x != 0
```

And then you find an identical function that includes 0 in it's domain, and you know from the properties of limits that the identical function and your function will have
the same limit at x = 0. (if f(x) and g(x) are the same for all values except a and g(x) is continuous at a, then the limit of a is equivalent for both functions).

So just keep in mind the function you find from simplifying is not the function you use to solve at x because they have different domains but just happen to have identical limits.

## Strategies of finding limits

This is just a way of thinking about which of the various strategies discussed here you should use for any limit.

```
lim  f(x)
x->a
```

If f(a) = b/0 you probably have a vertical asymptote (check the graph to be sure)
If f(a) = b you probably have a limit b! (again, check the graph to be sure)
If f(a) = 0/0:
Try factoring to cancel terms
Try conjugates to cancel terms
Try trig identities to cancel terms

Once you have canceled terms, evaluate the limit in it's new form (start this whole process over again as many times as necessary)

If all else fails, try approaching the limit from below and above or try squeeze theorem

## Squeeze Theorem

If you need to find the limit of a function (a) at a certain point (x) you may be able to use the squeeze theorem.

1. Find a new function (b) that is always >= your function (a)
2. Find another new function that is always <= your function (a) and has the same limit as (b) at point (x)
3. Due to common sense, you now have your limit for function (a) at point (x)

## Infinite Limits

There is a difference between infinite limits and "limits at infinity"

A limit at infinity refers to the limit of a function as the input approaches infinity.

An infinite limit refers to the function itself approaching infinity at a particular point.

Infinite limits exist around vertical asymptotes of a function.

If a function is unbounded from the left and right in different directions, it must be unbounded - however if it is unbounded in the same direction you can say
there is an infinite limit. Aka: an infinite limit at at point means left and right are approaching the same infinity.

For "limits at infinity", keep in mind that your function can cross and/or oscillate around the horizontal asymptote while still having it as a limit.

### Limits at infinity of quotients

As x approaches infinity, you can remove lesser terms from an equation that will get proportionally less significant.

```
limf(x)  4x^5 - 3x^2 + 3 / 6x^5 - 100x^2 - 10
x -> inf

can be approximated to

4x^5/6x^5 as x approaches infinity

which = 2/3
```

- If the numerator has a greater rate of growth than the denominator the limit is likely unbounded
- If the denominator has a greater rate of growth than the numerator the limit is likely 0

Same process applies for quotients with trig functions in them. Remember trig functions oscillate and figure out if the oscillations cause the limit to not exist or if they
bound above and below by a constant value.

If the quotient has a radical in it and reasoning out the limit is difficult it can be helpful to divide the numerator and denominator
by the highest degree in both terms. This can be kinda tricky, here is an example:

```
sqt(4x^4 - x) / 2x^2 + 3

highest degree is ^2 (not ^4 because that is under a sqrt), so divide both by x raised to that degree.

remember to divide you can multiply by 1/the-thing

(1/x^2)(sqt(4x^4 - x)) / (1/x^2)(2x^2 + 3)

now you convert x^2 to sqt(x^4) so that you can combine and cancel

(1/sqt(x^4))(sqt(4x^4 - x)) -> sqt((4x^4 - x) / x^4) -> sqt(4 - (1 / x^3)) // used some solid algebra here so go read on rules of radicals

after the full division you have

sqt(4 - (1/x^3)) / 2 + (3/x^2)
```

Another challenge can be signs. If the degree you chose in this process is even then you should have a positive answer, and vice versa

#### L Hopitals rule

If f and g are [differentiable](./differentiation.md) and the limit is indeterminate of the form `0/0`
or `inf/inf`, then:

```
limx->a f(x)/g(x) === limx->a f'(x)/g'(x)
```

Example:

```
limx->inf e^x/x^2
=L'H=
limx->inf e^x/2x
=L'H=
limx->inf e^x/2
= inf/2
= inf
```

## Factorials

To find the limit of a [factorial](../algebra/factorials.md), keep in mind that
factorials get supah mega big really fast.

```
lim[n->inf] 2^n/n!

= 0
```
