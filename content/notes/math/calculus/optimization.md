+++
+++

# Optimization

local minimum: if f(p) <= f(near p) then point p is a local minimum of f
local maximum: if f(p) >= f(near p) then point p is a local maximum of f

## Critical Points

A point is a critical point of a function if

1. The point is in the domain of the function
2. the derivative of the function at that point is zero or if it does not exist

To find critical points of a function, take the derivative and set it equal to 0
and solve for x. Then try to find any points where the derivative is undefined.

```
f(x) = x - ln(x)
f'(x) = 1 - 1/x

1 - 1/x = 0 <-- a critical point exists at x = 1
1 - 1/x = undefined <-- a critical point exists at x = 0
```

Keep in mind the [zero product property](../algebra/equations.md) when solving
for critical points, it comes up a lot.

## First Derivative Test

You can use the behavior of a functions first derivative to define local
maximums and minimums.

```
f'(x) < 0, local minimum, f'(x) > 0
f'(x) > 0, local maximum, f'(x) < 0
if the sign does not change, there is no relative max or min
```

To solve problems with this:

1. find your function's critical points and
2. plug in numbers to the left and to the right of critical points to see the behavior
   of the derivative around that point and determine if the critical point is a
   local min, local max, or neither.
3. if the point is a min or max, take it as the x value and plug back in to the
   original function to find the coordinates (x, f(x)).

## Second Derivative Test

The first derivative test ends by plugging in points around your critical points
to see graph behavior. This is not efficient, so you can use the second
derivative test to remove that step:

```
local max:
f'(c) = 0 or undefined (critical point) AND f''(c) < 0 (concave down)

local min:
f'(c) = 0 or undefined (critical point) AND f''(c) > 0 (concave up)
```

When there is exactly one critical point, the second derivative test can be used
as proof that you have the global extrema at that point.

## Concavity

The points where a function's concavity changes are called "inflection points".

Places where the second derivative is 0 or undefined might be an inflection
point. (similar to how it might be a critical point with first derivative).

1. set the second derivative > 0 and < 0 in two [inequalities](../algebra/inequalities.md)
   and solve for x to get where you are concave up and concave down.
2. find critical points on the second derivative and compare them to your
   concavity to deduce true inflection points.

```
Find inflection points of f(x) = x^2/(x^2 + 3)

f'(x) = 6x/(x^2 + 3)^2 via the quotient rule

f''(c) = 18(1 + x)(1 - x)/(x^2 + 3)^3 via quotient, chain rule and simplifying

when is f''(c) > 0 and < 0?

observe you basically have (positive)(1 + x)(1 - x)/(positive)

observe f''(-2) < 0 and f''(0) > 0 and f''(2) < 0

so -1 and 1 are the inflection points of f(x)
```

## Finding Global Extrema

Local max and min are covered above, but also consider global max and min.

1. Compute the value of the function at the endpoints (if given an interval of
   inputs)
2. Find all critical points
3. Compute the value of the function at all critical points
4. MAX(all_values) for global max and MIN(all_values) for global min

## Finding optimal solutions to problems

Finding the global max and min can solve real world problems, like minimizing
costs and maximizing profits or minimizing transportation time.

1. Understand the problem. What is unknown? What are the given quantities?
2. Draw a diagram if possible.
3. Introduce notation. Ex: A = area, x = width, y = length
4. Express what you are trying to max/min in terms of the other symbols. Ex: A=xy
5. If there's too many variables, see if you can relate them. Ex: 2x+2y=100
6. Find the absolute max or min value using calculus.
7. Take your value back to the original problem and produce a correct answer.
   (plug x into the relation, for example)
