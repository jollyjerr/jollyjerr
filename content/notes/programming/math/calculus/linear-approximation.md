+++
+++

# Linear Approximation

The equation of a line in point slope form

```
y - y1 = m(x - x1)
```

At any point (a, f(a)) the equation for the tangent line of a function is

```
y - f(a) = f'(a)(x - a)
y = f(a) + f'(a)(x - a)
```

The tangent line at a point can serve as a decent approximation of a function
near the point that you calculated the tangent line for.

These questions are phrased as "find the linearization of f(x) = sinx at x = 0"

## Concavity

Linearization is a better approximation when the original function is closer to
a straight line. You can determine concavity by taking a functions second
[derivative](./derivatives.md). If f''(x) is close to 0 at point a, then the
linearization will be a more accurate approximation for the original function
for points around a.

If the second derivative is positive at a point, that means that linearization
estimates will be underestimates of the original function around that point.

If the second derivative is negative, linearization estimates will be
overestimates.
