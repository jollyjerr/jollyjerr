+++
+++

# Differentiation

You can always use the [ formal or alternate definition of a derivative ](./derivatives.md) to find
a functions derivative, but some types of functions have easier methods.

## Explicit (normal) differentiation

### Constant

Always 0

### Linear

In a linear function `y = mx + b` the derivative will just be `m`.

### Constant multiples

```
d/dx[cf(x)] = cf'(x)
```

Find the derivative of the function and multiply by the
same constant

### Sums and differences

```
d/dx[f(x) + g(x)] = f'(x) + g'(x)
d/dx[f(x) - g(x)] = f'(x) - g'(x)
```

### Power functions

```
d/dx(x^n) = nx^(n-1)
```

Keep definitions in mind for these power functions. If you have 1/2^x you can change to
2^-x. If you have sqrt(x) you actually have x^(1/2).

Also, the derivative of e^x is e^x (https://youtu.be/m2MIpDrF7Es)

### Trig functions

```
d/dx[sin(x)] = cos(x) 😮
d/dx[cos(x)] = -(sin(x))
tan(x)' = sec^2(x)
sec(x)' = sec(x)tan(x)
csc(x)' = -csc(x)cot(x)
cot(x)' = csc^2(x)
```

### Inverse trig functions

It's helpful to review [the rules and notation of inverse trig relations and functions](../trigonometry/inverse-trig-functions.md).

Proving these definitions is pretty involved so I'm not going to put it here.

```
arctan(x) -> 1/(1+x^2)
arcsin(x) -> 1/sqrt(1-x^2)
```

### ln(x)

```
d/dx[ln(x)] = 1/x
```

### Product rule

```
d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)
```

### Quotient rule

```
with f(x) = u(x) / v(x)

f'(x) = [u'(x)v(x) - u(x)v'(x)] / [(v(x))^2]
```

### The Chain Rule (compositions of functions)

You can use the chain rule to find derivatives for [compositions of functions](../algebra/combinations-of-functions.md)

```
Suppose a(x) = (f°g)(x) = f(g(x)) where f and g are both differentiable
functions. then

a'(x) = f'(g(x))g'(x)
```

Example: `(x^2 + 1)^10`

```
(x^2 + 1)^10 can be rewritten as a composite function f(g(x))

f(u) = u^10
g(x) = x^2 + 1

So therefore

f'(u) = 10u^9
g'(x) = 2x

Written in chain rule form

(10(x^2 + 1)^9) * 2x
```

### Natural Logarithm and Exponential

Keep in mind the [properties of logarithms](../algebra/exponential-and-logarithmic-functions.md)

```
ln'(x) = 1/x

ln'(x^2 + 1) -> use chain rule -> (1/(x^2+1))(2x + 0)

a^x -> (a^x)ln(a)
```

## Implicit differentiation

If you have a statement not written as a function of x, like `x^2 + y^2 = 16`
you have to use implicit differentiation.

1. Differentiate both sides with respect to x. When you differentiate a y term,
   multiply by dy/dx.
2. Solve for dy/dx.

```
(x^2 + y^2 = 36)'
2x + 2y(dy/dx) = 0
2y(dy/dx) = -2x
dy/dx = -2x/2y
dy/dx = -x/y
```
