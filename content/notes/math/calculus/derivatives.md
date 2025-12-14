+++
+++

# Derivatives

Derivatives are used to calculate instantaneous rate of change

A derivative is a [limit](./limits.md)

```
lim                change in distance / change in time
change time -> 0

normally written as (leibniz notation)

dy/dx
```

dy and dx above are called "differential"s and can be reasoned about as an infinitely small change in y over
an infinitely small change in x.

Start by thinking about an average rate of change - the slope of a secant line - and then moving the points of the secant line closer and
closer together until they form a tangent line, which the slope of will tell you the instantaneous rate of change.

## Average rate of change

To calculate an average rate of change over an interval, use `change in y / change in x` over the interval.

The foundational idea of calculus is what happens as that interval approaches 0.

## Notation

There are three common ways to notate derivatives:

- Lagrange's notation: f′
- Leibniz's notation: dy/dx
- Newton's notation: y˙ (the dot is above the y lol)

All expressing "rate of change of y with respect to x of f" (slope of the tangent line of that point)

## Tangent line equations

You may be asked: For a function g, g(-1) = 3 and g'(-1) = -2. What is the equation for the
tangent line for g at x = -1?

```
y = mx + b
y = -2x + b
3 = -2(-1) + b
3 = 2 + b
1 = b

so y = -2x + 1
```

## Rate of change of a curve

You can figure out the average rate of change on a curve over some interval by finding the slope of a secant line
(line that intersects a curve at two points). This is always deltay/deltax and simplify.

```
A secant line intersects f(x) = x^2 + 5x at 3 and t

(3, 24) and (t, t^2 + 5t)

slope = t^2 + 5t - 24 / t - 3

-> (t + 8)(t - 3) / t - 3

== t + 8 for t != -3 // because that information was lost during the division to cancel t - 3 from denominator
```

## Formal definition

The derivative of function f at x=c is the limit of the slope of the secant line
from x=c to x=c+h as h approaches 0. Symbolically, this is the limit of [f(c)-f(c+h)]/h as h→0.

Think of these two points to find a general function (this is called "formal form" and is a general function of x):

```
(x, f(x)) and (x + h, f(x + h))

(f(x + h) - f(x)) / ((x + h) - x)

f'(x) =   lim  (f(x + h) - f(x)) / h
          h->0
```

If the limit exists, we say f is differentiable at x

Alternatively, you can take the direct approach by defining a secant line and finding the limit as the
points in the secant line approach ("alternate form" used to find derivative at a specific point):

```
two points (a, f(a)) and (x, f(x))

f'(x) = lim  (f(x) - f(a)) / (x - a)
        x->a
```

## Graphing derivatives

You can approximate a graph of f'(x) by marking where a it's slope would be
positive, 0, or negative.

If you have a linear function `f(x) = mx + b` then `f'(x) = m`.

For a constant function `f(x) = c` the derivative will always be 0.

If you have a graph of f'(x), you can approximate f(x) by marking where the
function is increasing (derivative is above 0) and decreasing (derivative is
below 0) and then using the slope of each section to judge if the original
function was concave up or concave down at that point.

## Higher order derivatives

The second derivative, or the derivative of a functions derivative, measures a
function concavity or acceleration. A positive value means a function is concave up (like a
smile), while a
negative value means a function is concave down (like a frown). the second
derivative is noted like:

```
f''(x) or d^2f/dx^2
```

Any n'th level derivative is notated like:

```
f^(n)(x) or d^nf/dx^n
```

If the function is increasing or decreasing, its first derivative will be positive or negative, respectively. If the function is concave up or concave down, its second derivative will be positive or negative, respectively

A good analogy in motion is:

f(x) = displacement
f'(x) = velocity
f''(x) = acceleration
f^3(x) = jerk (strength of the acceleration is changing)

## Differentiability

A function is only differentiable at a point if you can find the slope of the
tangent line at that point. So sometimes the derivative is undefined:

1. A sharp corner where the function does not really have a defined slope.
2. A discontinuity.
3. A vertical tangent.

EX: |x| at x = 0

```
limx->0 (|0+h| - |0|)/h

limx->0- = h/h or 1

limx->0+ = -h/h or -1
```

Keep in mind a function can still be continuous without being differentiable,
but must be continuous if it is differentiable.

## Finding the tangent line

You can use the derivative to obtain the exact function of a tangent line at any
point.

Recall the point slope form of an [equation of a line](../algebra/slope.md)

```
y - y1 = m(x - x1)
```

You know one point (x1, y1) on the tangent line already, which is exactly when the
tangent intersects the function.

The slope of the tangent is by definition the derivative at that point.
